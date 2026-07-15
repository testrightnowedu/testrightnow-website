# TESTRIGHTNOW - MANDATORY BUILD & DEPLOYMENT POLICY

This policy MUST be followed for every build and deployment.
Never assume the deployment target.
Always identify which application was modified before building or deploying.

## PROJECT ARCHITECTURE

**Firebase Project ID:** 	estrightnow-admin

There are THREE independent applications.

### APPLICATION 1: MARKETING WEBSITE
* **Project Folder:** 	estrightnow-WEBSITE
* **Technology:** React + Vite
* **Firebase Hosting Site:** 	estrightnow-website
* **Production Domain:** https://www.testrightnow.com
* **Firebase URL:** https://testrightnow-website.web.app
* **Build Commands:** 
pm install, 
pm run build
* **Deployment Command:** irebase deploy --only hosting:website

### APPLICATION 2: STUDENT APP
* **Project Folder:** Flutter Student App
* **Technology:** Flutter Web
* **Firebase Hosting Site:** 	estrightnow-admin
* **Production Domain:** https://app.testrightnow.com
* **Firebase URL:** https://testrightnow-admin.web.app
* **Build Commands:** lutter clean, lutter pub get, lutter analyze, lutter test, lutter build web --release
* **Deployment Commands:** irebase deploy --only hosting:studentapp
* **Firestore Rules:** irebase deploy --only firestore:rules

### APPLICATION 3: ADMIN PORTAL
* **Project Folder:** Admin Portal
* **Technology:** React
* **Firebase Hosting Site:** 	estrightnow-admin-portal
* **Firebase URL:** https://testrightnow-admin-portal.web.app
* **Build Commands:** 
pm install, 
pm run build
* **Deployment Command:** irebase deploy --only hosting:adminportal

## DEPLOYMENT ORDER
1. Firestore Rules -> 2. Student App -> 3. Marketing Website -> 4. Admin Portal

## MANDATORY PRE-DEPLOYMENT REPORT
Before deployment ALWAYS report:
* Application, Repository, Firebase Project, Firebase Hosting Site, Production Domain, Firebase URL, Build Command, Deployment Command

## MANDATORY POST-DEPLOYMENT REPORT
After deployment ALWAYS report:
* Application, Repository, Firebase Hosting Site, Production Domain, Firebase URL, Build Status, Deployment Status, Verification Status, Deployment Timestamp, Git Commit Hash

## CRITICAL RULES
* **Marketing Website MUST NEVER be deployed to:** 	estrightnow-admin, pp.testrightnow.com, 	estrightnow-admin-portal
* **Student App MUST NEVER be deployed to:** 	estrightnow-website, www.testrightnow.com, 	estrightnow-admin-portal
* **Admin Portal MUST NEVER be deployed to:** 	estrightnow-website, 	estrightnow-admin
* **FINAL RULE:** Never deploy until the application, repository, hosting site, production domain, and deployment command have been identified and confirmed. Always verify the live production URL after deployment before declaring successful.
