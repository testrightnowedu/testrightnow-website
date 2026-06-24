import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc, serverTimestamp, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase Config (TestRightNow project)
const firebaseConfig = {
  apiKey: "AIzaSyB2oCVNej7VAU4RYOAibOmB9tvjJOUwTJA",
  authDomain: "testrightnow-admin.firebaseapp.com",
  projectId: "testrightnow-admin",
  storageBucket: "testrightnow-admin.firebasestorage.app",
  messagingSenderId: "886273790862",
  appId: "1:886273790862:web:308ed4030f157f7e9b4adf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// --- 1. Bot Filtering ---
const BOT_REGEX = /GoogleBot|BingBot|Ahrefs|Semrush|YandexBot|DuckDuckBot|Crawler|Spider/i;
if (BOT_REGEX.test(navigator.userAgent)) {
  console.log("[Analytics] Bot detected. Tracking disabled.");
} else {
  try {
    initTracker();
  } catch (e) {
    console.error("[Analytics] Core analytics initialization failed, bypassing to prevent app impact:", e);
  }
}

function initTracker() {
  // --- 1.5. Internal Traffic Filtering ---
  // IMPORTANT: Explicit production allowlist — these hosts are NEVER internal traffic.
  // This prevents substring matches like "test" from incorrectly flagging testrightnow.com.
  const PRODUCTION_HOSTS = [
    "testrightnow.com",
    "www.testrightnow.com",
    "app.testrightnow.com"
  ];
  const hostname = window.location.hostname;
  const isProductionHost = PRODUCTION_HOSTS.some(h => hostname === h || hostname.endsWith("." + h));

  const isLocalhost = hostname === "localhost" ||
                      hostname === "127.0.0.1" ||
                      hostname.endsWith(".local") ||
                      hostname.includes("192.168.") ||
                      hostname.includes("10.0.");
  // NOTE: Do NOT use hostname.includes("test") — it would match testrightnow.com.
  const isStaging = hostname.includes("staging") ||
                    hostname.includes("github.io");
  const isInternalTraffic = isProductionHost ? false : (isLocalhost || isStaging);

  // --- 2. Identity & Session Setup ---
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  const urlParams = new URLSearchParams(window.location.search);
  
  // visitorId setup (persistent in localStorage)
  let visitorId = localStorage.getItem("tr_visitor_id");
  if (!visitorId) {
    visitorId = "vis_" + generateId();
    localStorage.setItem("tr_visitor_id", visitorId);
  }

  // sessionId setup (session-based, adopt refSessionId or renew on timeout)
  let sessionId = localStorage.getItem("tr_session_id");
  let lastActive = Number(localStorage.getItem("tr_session_last_active") || 0);
  const now = Date.now();
  let isNewSession = false;

  const urlSessionId = urlParams.get("refSessionId");
  
  if (urlSessionId) {
    // Adopt session ID from url parameter (cross-domain migration)
    sessionId = urlSessionId;
    localStorage.setItem("tr_session_id", sessionId);
    localStorage.setItem("tr_session_last_active", String(now));
    isNewSession = true; // Flag to check location and create initial record
  } else if (!sessionId || (now - lastActive > SESSION_TIMEOUT)) {
    // Generate new session ID
    sessionId = "sess_" + generateId();
    localStorage.setItem("tr_session_id", sessionId);
    localStorage.setItem("tr_session_last_active", String(now));
    isNewSession = true;
  } else {
    // Keep existing session, update last active
    localStorage.setItem("tr_session_last_active", String(now));
  }

  // Determine origin (marketing vs app)
  const isApp = window.location.hostname.includes("app.testrightnow.com") || 
                window.location.port === "5173" || // Local development port for student web
                window.location.port === "5174";
  const origin = isApp ? "app" : "marketing";

  // Attribution priority: 1. UTM, 2. Referrer, 3. Direct
  const referrer = document.referrer || "";
  const isExternalReferrer = referrer && !referrer.includes(window.location.hostname);
  
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  
  let source = "Direct";
  if (utmSource) {
    if (utmSource.toLowerCase().includes("google")) source = "Google Ads";
    else if (utmSource.toLowerCase().includes("facebook") || utmSource.toLowerCase().includes("meta")) source = "Meta Ads";
    else if (utmSource.toLowerCase().includes("email")) source = "Email";
    else source = utmSource;
  } else if (isExternalReferrer) {
    source = "Referral";
  }

  // Device Signature Info
  const deviceDetails = getDeviceDetails();

  // Session state in memory
  let cachedLocation = JSON.parse(localStorage.getItem("tr_location") || "null");
  let userId = localStorage.getItem("tr_user_id") || null;
  let email = localStorage.getItem("tr_user_email") || null;
  let visitorType = localStorage.getItem("tr_visitor_type") || "anonymous";
  let isPaidUser = localStorage.getItem("tr_is_paid") === "true";

  // Initialize session record if new
  if (isNewSession) {
    createSessionRecord();
  }

  // Initial page track
  trackPageView(true);

  // Set up SPA tracking listeners
  interceptHistory();
  window.addEventListener("popstate", () => trackPageView(false));

  // Set up Page Visibility and Unload listeners
  let pageEntryTime = Date.now();
  window.addEventListener("beforeunload", handlePageExit);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      handlePageExit();
    } else {
      pageEntryTime = Date.now();
    }
  });

  // Set up 120-second Heartbeat
  setInterval(sendHeartbeat, 120000);

  // Listen to Authentication State
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userId = user.uid;
      email = user.email;
      visitorType = "student";
      localStorage.setItem("tr_user_id", userId);
      localStorage.setItem("tr_user_email", email);
      localStorage.setItem("tr_visitor_type", visitorType);

      // Check paid status
      try {
        const userSnap = await getDoc(doc(db, "users", user.uid));
        if (userSnap.exists()) {
          const userData = userSnap.data();
          isPaidUser = userData.paymentStatus === "paid";
          localStorage.setItem("tr_is_paid", String(isPaidUser));

          // Log auth event
          const createdTime = userData.createdAt ? userData.createdAt.toDate().getTime() : 0;
          const isNewSignup = (Date.now() - createdTime < 15 * 60 * 1000); // Signed up in last 15m
          
          if (isNewSignup) {
            logEvent("signup_complete", { method: "firebase_auth", email });
          } else {
            logEvent("login", { email });
          }
        }
      } catch (e) {
        console.error("[Analytics] Error fetching user entitlements:", e);
      }
    }
  });

  // Expose trackEvent globally
  window.trackEvent = function(name, category = "Custom", label = "", value = null) {
    logEvent(name, { category, label, value });
  };

  // --- Core Functions ---

  async function createSessionRecord() {
    let country = "Unknown";
    let region = "Unknown";
    let city = "Unknown";

    if (cachedLocation) {
      country = cachedLocation.country;
      region = cachedLocation.region;
      city = cachedLocation.city;
    } else {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const geo = await res.json();
        if (geo && !geo.error) {
          country = geo.country_name || "Unknown";
          region = geo.region || "Unknown";
          city = geo.city || "Unknown";
          
          cachedLocation = { country, region, city };
          localStorage.setItem("tr_location", JSON.stringify(cachedLocation));
        }
      } catch (e) {
        console.warn("[Analytics] Geolocation fetch failed:", e);
      }
    }

    const sessionObj = {
      sessionId,
      visitorId,
      userId,
      email,
      visitorType,
      source,
      utmSource,
      utmMedium,
      utmCampaign,
      referrer,
      landingPage: window.location.pathname + window.location.hash,
      currentPage: window.location.pathname + window.location.hash,
      deviceType: deviceDetails.type,
      browser: deviceDetails.browser,
      operatingSystem: deviceDetails.os,
      country,
      region,
      city,
      sessionStart: serverTimestamp(),
      lastActive: serverTimestamp(),
      sessionEnd: null,
      isPaidUser,
      isInternalTraffic,
      pageViews: 1,
      durationSeconds: 0,
      createdAt: serverTimestamp()
    };

    try {
      await setDoc(doc(db, "website_sessions", sessionId), sessionObj);
      logEvent("session_start", { source, origin });
    } catch (e) {
      console.error("[Analytics] Failed to create session document:", e);
    }
  }

  async function logEvent(eventType, metadata = {}) {
    const eventId = "evt_" + generateId();
    const eventObj = {
      eventId,
      sessionId,
      visitorId,
      userId,
      eventType,
      page: window.location.pathname + window.location.hash,
      metadata,
      timestamp: serverTimestamp()
    };

    // Update session timestamp in localStorage
    localStorage.setItem("tr_session_last_active", String(Date.now()));

    try {
      await setDoc(doc(db, "website_events", eventId), eventObj);
    } catch (e) {
      console.error("[Analytics] Failed to write event:", e);
    }
  }

  function trackPageView(isLanding = false) {
    const page = window.location.pathname + window.location.hash;
    
    // Automatically trigger contextual event logs based on pages loaded
    if (isLanding) {
      logEvent("landing_page_view", { referrer });
    } else {
      logEvent("page_view", { referrer });
    }

    if (page.includes("/pricing")) {
      logEvent("pricing_view");
    } else if (page.includes("/payment") || page.includes("premium")) {
      logEvent("payment_page_view");
    } else if (page.includes("/signup")) {
      logEvent("signup_start");
    } else if (page.includes("/practice") || page.includes("/test") || page.includes("/exam")) {
      logEvent("mock_test_start");
    }
  }

  function handlePageExit() {
    const exitTime = Date.now();
    const timeSpent = Math.round((exitTime - pageEntryTime) / 1000);
    if (timeSpent > 0) {
      logEvent("page_exit", {
        page: window.location.pathname + window.location.hash,
        durationSeconds: timeSpent
      });
    }
  }

  function sendHeartbeat() {
    logEvent("heartbeat");
  }

  // --- Utilities ---

  function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  function getDeviceDetails() {
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    let os = "Unknown OS";
    let type = "Desktop";

    if (ua.indexOf("Firefox") > -1) browser = "Firefox";
    else if (ua.indexOf("Chrome") > -1) browser = "Chrome";
    else if (ua.indexOf("Safari") > -1) browser = "Safari";
    else if (ua.indexOf("Edge") > -1) browser = "Edge";

    if (ua.indexOf("Windows") > -1) os = "Windows";
    else if (ua.indexOf("Macintosh") > -1) os = "macOS";
    else if (ua.indexOf("Linux") > -1) os = "Linux";
    else if (ua.indexOf("Android") > -1) os = "Android";
    else if (ua.indexOf("iPhone") > -1) os = "iOS";

    if (/Mobi|Android|iPhone/i.test(ua)) {
      type = "Mobile";
    } else if (/Tablet|iPad/i.test(ua)) {
      type = "Tablet";
    }

    return { os, browser, type };
  }

  function interceptHistory() {
    const pushState = history.pushState;
    history.pushState = function() {
      handlePageExit();
      pushState.apply(this, arguments);
      pageEntryTime = Date.now();
      trackPageView(false);
    };

    const replaceState = history.replaceState;
    history.replaceState = function() {
      handlePageExit();
      replaceState.apply(this, arguments);
      pageEntryTime = Date.now();
      trackPageView(false);
    };
  }
}
