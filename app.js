// A simple server to receive the webhook from AppSheet and run your automation script.
const express = require('express');
const app = express();
// Cloud Run and Railway provide this PORT environment variable.
const port = process.env.PORT || 8000;
console.log(`Application is using port: ${port}`);

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

const axios = require('axios');



// Replace these with your actual AppSheet credentials
const APPSHEET_APP_ID = '41aa9d8f-9048-4ab7-ad08-60bac0a43488';
// const APPSHEET_TABLE_ID = 'wafbproducts';
const APPSHEET_TABLE_ID = 'Sheet1';
const APPSHEET_API_KEY = 'q7IoB-iZwUV-mxZYq-SHhHA-2youF-oTAXC-ZmeWd-ZzYsp';






// Launch the browser and open a new blank page
// app.js

async function runAutomation() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🕐 Starting automation at", new Date().toLocaleString() ," \n");




    try {
        // ✅ Put all your automation code here:
        // e.g., launch Chrome, connectOverCDP, post to Facebook, etc.

        // Example placeholder:
        // await launchBrowserForProfile(profilePath);
        // await doAutomation(page);




        // #!/usr/bin/env node

        // import dotenv from 'dotenv';
        // dotenv.config();
        
        // Or import puppeteer from 'puppeteer-core';
        // import { fileURLToPath } from 'url';
        
        
        
        
        const dotenv = require('dotenv');
        dotenv.config();
        
        
        // const puppeteer = require('puppeteer-extra'); // or puppeteer-core
        const path = require('path');
        const fs = require('fs');
        const os = require('os');
        const { platform } = require('process');
        const { chromium } = require('playwright');
        const { spawn } = require('child_process');
        const { exec } = require('child_process');
        // const net = require("net")s;
        
        
        // const StealthPlugin = require('puppeteer-extra-plugin-stealth');        
        // puppeteer.use(StealthPlugin());
        
        // // To get __dirname and __filename in CommonJS
        // const fileur = __filename || require('url').fileURLToPath(import.meta.url);
        // const __dirname = path.dirname(__filename);
        
        // const fileURLToPath =require('')
        
        // Import your own module (also must be CommonJS!)
        // // you’ll need to update these files too
        // const { postTogroups } = require('./posttogroups.js'); 
        // const { listInmorePlaces }= require('./listinmoreplaces.js');
        
        const { createMarketplaceListing } =require( './listonmarketplace.js');
        
        
        
        
        
        
        
        
        
        
        
        
        
        (async ()=>{
        
            try{


                //First Killing all Existing chromes 
                const killchromes= async()=>{
                    const isWindows = process.platform === 'win32';
                    
                    const killCommand = isWindows
                    ? 'taskkill /F /IM chrome.exe /T' // Windows
                    : 'pkill chrome';                // Linux/macOS
                    
                    return new Promise((resolve,reject)=>{

                        exec(killCommand, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`❌ Error killing Chrome: ${error.message}`);
                                setTimeout(resolve,3000)

                                // reject(error)
                                return;
                            }
                            if (stderr) {
                                console.error(`⚠️ stderr: ${stderr}`);
                                // resolve(resolve=> setTimeout(resolve,30000))
                                setTimeout(resolve,3000)

                                return;
                            }
                                console.log(' ✅ Chrome processes killed');
                                // resolve(resolve=> setTimeout(resolve,30000))
                                setTimeout(resolve,3000)

                        });
                        

                    })
                }        
            
                //Kill Chrome processes 
                console.log("\About to kill All Chrome Processes Running Before Starting the Program waiting for 5 Seconds");
                await delay(5000)

                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                  }
                  
                  // await killchromes()
                console.log("Waited 10 Seconds")
                // await killchromes()





        
                console.log('WELCOME TO Fbyebot FB Marketplace Automation Software; The App Just Started')
        
        
        
        
    
    
                function getAppDataDir(appName = 'ali-multiproFbautoposter-us-linwinmac') {
                    const app="/app/data"


                    // Ensure folder exists
                    if (!fs.existsSync(app)) {
                        fs.mkdirSync(app, { recursive: true });
                        console.log("No App folder Found Just Created a New App  at ", app);
                    }
                    console.log("App Dir Found, Continue...")
                


                    if (platform === 'win32') {
                        return path.join(app, appName);
                    }else{
                        // Linux and macOS
                        return path.join(app, appName);

                    }
                }
        
                const appDir = getAppDataDir(); // e.g., ~/.config/fbyebot or %APPDATA%\fbyebot


                // Ensure folder exists
                if (!fs.existsSync(appDir)) {
                    fs.mkdirSync(appDir, { recursive: true });
                    console.log("No AppDir Found Just Created a New AppDir  at ", appDir);
                }
                console.log("AppDir Found, Continue...")
            
        
                const chromeUserDataDir = path.join(appDir, "fbyebotChromeProfiles")
        
                if(!fs.existsSync(chromeUserDataDir)){
                    fs.mkdirSync(chromeUserDataDir,{recursive:true});
                    console.log(" chromeUserDataDir not Found!! , Just Created a new chromeUserDataDir  in ", chromeUserDataDir );
                }
            
                console.log("chromeUserDataDir path Found at "  , chromeUserDataDir, " Continue... ")
            





                // Where to store user files (can be current dir or ~/.config/appname)
                const envDir = path.join(appDir, "productpaths-per-locationChanger");

                // Create the directory if it's missing
                if (!fs.existsSync(envDir)) {
                    fs.mkdirSync(envDir, { recursive: true });
                    console.log(`\nCreated directory for allproducts root folder paths: ${envDir}`);
                }
                // Where to store user files (can be current dir or ~/.config/appname)
                const envPath = path.join(envDir ,'.env');



                const cookiesPath = path.join(appDir, 'cookies.json');  
                
            
                // Create default .env if missing
                if (!fs.existsSync(envPath)) {
                    fs.writeFileSync(envPath, 'root="path to your cabinets folder"');
                    console.log('\n⛔ .env file created. Go to your home folder then search for allproductsrootpathfolder then go to the  .env  file and then kindly fill up the path to your products folder.');
        
                }
                
                // Create default cookies.json if missing
                if (!fs.existsSync(cookiesPath)) {
                    fs.writeFileSync(cookiesPath, JSON.stringify([], null, 2));
                    console.log('\n ⛔cookies.json file created. go to your home folder then search .config or APPDATA(if on windows), then click it and look for folder called fbyebot-us-2.0 click it then you can log in to facebook copy and paste the cookies here in the cookie.json  \n\n');
                }
                
                // Load env
                dotenv.config({ path: envPath });
                

                // Try to load the cookies. The file should be put in this directory when you deploy.
                try {
                    const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));
                    
                    console.log("Cookies loaded successfully.  ", cookies);
                } catch (error) {
                    console.error("❌ Could not load cookies file. Error:", error.message);
                }

        
        
                const cacheDir = path.join(appDir, 'usercache', 'images');
        
                if (!fs.existsSync(cacheDir)) {
                fs.mkdirSync(cacheDir, { recursive: true });
                }
                
                // const screenshotPath = path.join(cacheDir, 'home.png');
                // await page.screenshot({ path: screenshotPath });
                
        
                const marketplacelistingimgs = path.join(appDir, 'marketplacelistingimgs');
        
                if (!fs.existsSync(marketplacelistingimgs)) {
                fs.mkdirSync(marketplacelistingimgs, { recursive: true });
                }
        
            


















               //LIst of profiles to use 
               const userprofiles=[
                //    "Profile 1", //Tito's account to me
                   "Default", //Ken Lopez Facebook Account 
                ]   

                //    ,"Profile 1","Profile 2","Profile 3"
                //    ,"Profile 4","Profile 5",
                // "Default","Profile 10","Profile 2","Profile 12", "Profile 11","Profile 1",   
                // "Profile 6","Profile 7","Profile 8","Profile 9","Profile 12","Profile 10", 
                // "Profile 11","Profile 12","Profile 13","Profile 14","Profile 15",
                // "Profile 16","Profile 17","Profile 18","Profile 19","Profile 20"


                for(const userprofile of userprofiles){
                    const chromeUserProfile = path.join(chromeUserDataDir, userprofile)
                    
                    if(!fs.existsSync(chromeUserProfile)){
                        fs.mkdirSync(chromeUserProfile,{recursive:true});
                        console.log(" chromeUserProfile  not Found, Just Created a new chromeUserDataDir  in ", chromeUserProfile );
                    }
                
                    console.log("chromeUserProfile path Found at "  , chromeUserProfile, " Continue... ")
                    fs.chmodSync(chromeUserProfile,0o755)
                
                }
        

                // Function to get the current profile index based on a 3-hour rotation
                function getRotatedIndex() {
                    const totalProfiles = userprofiles.length;
                    const now = new Date();
                    return Math.floor(now.getHours() / 12.99) % totalProfiles; // Change the profile every 3 hours
                }
        
                // // Function to get the current profile index based on a 10 MInuts for testing -hour rotation
                // function getRotatedIndex() {
                //     const totalProfiles = userprofiles.length;
                //     const now = new Date();
                //     return Math.floor( now.getMinutes() / 11.9) % totalProfiles; // Change the profile every 3 hours
                // }
        

            



                //get profile index
                const profileIndex=getRotatedIndex();
                console.log("\n Here isthe Index to select Profile Index " + profileIndex)
        

                // console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage... First here is the Chrome Path  '   ,chromePath , 'Here is the user--data-dir ' + chromeUserDataDir, "and here is the profile-diretory  " + userprofiles[profileIndex]);

                console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage... First here is the Chrome Path  '   , 'Here is the user--data-dir ' + chromeUserDataDir, "and here is the profile-diretory  " + userprofiles[profileIndex]);





                // *********************Above is the proxy setting*******************************************

                // console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage... First here is the Chrome Path  '   ,chromePath , 'Here is the user--data-dir ' + chromeUserDataDir, "and here is the profile-diretory  " + userprofiles[profileIndex]);
    
                // const proxyserverandport='brd.superproxy.io:33335'
                // const proxypassword="f1pzd1811h8j"
                // const proxyusernames=[
                //     "brd-customer-hl_4202dfdf-zone-fbyebot_isp_proxy_1-ip-178.171.6.8", //chicago/us Nexo Rion Facebook Account/Chrome Profile/ Or is it New York NY_1
                //     "brd-customer-hl_4202dfdf-zone-fbyebot_isp_proxy_1-ip-158.46.212.107", //nexorionholdingsgroup@gmail.com New York/USA NY_2
                //     "brd-customer-hl_4202dfdf-zone-fbyebot_isp_proxy_1-ip-198.252.45.4", //Nevada_LA/USA LA_1
                //     "brd-customer-hl_4202dfdf-zone-fbyebot_isp_proxy_1-ip-198.143.3.162", //New Yor/USA Kibet's Proxy-lied is in Chicago NY_3
                //     "brd-customer-hl_4202dfdf-zone-fbyebot_isp_proxy_1-ip-158.46.217.183" //New YorK/USA NY_4
                // ]





                // // Function to get the current profile index based on a 10 MInuts for testing -hour rotation
                // function getProxyRotatedIndex() {
                //     const totalProxies = proxyusernames.length;
                //     const now = new Date();
                //     return Math.floor( now.getMinutes() / 11.9) % totalProxies; // Change the profile every 3 hours
                // }
        

                // //get profile index
                // const proxyProfileIndex=getProxyRotatedIndex();
                // console.log("\n Here isthe Index to select Proxy Index " + proxyProfileIndex)
        
                // console.log('\n 🚀 Launching Chrome with Playwright Persistent Storage...Proxy Chosen  username '   ,proxyusernames[proxyProfileIndex], 'Here is the proxuemd point ' + proxyserverandport, "and here is the proxy password  " + proxypassword);

                // *********************Above is the proxy setting*******************************************




                // ******************************Webshare Proxies*******************************************


                // const username="yntvjcps-rotate";
                const username='yntvjcps-US-rotate'
                const password="ta7c221qdbq9";
                const proxyAddress="p.webshare.io"
                // const url="https://ipv4.webshare.io/"
                const proxyPort="80";

                // const proxyString=`https://${username}:${password}@${proxyAddress}:${proxyPort}`;
            




                const userDataDir = path.join(chromeUserDataDir,userprofiles[profileIndex])
                
                const browser= await chromium.launchPersistentContext(userDataDir, {
                  headless: true,
                  //executablePath: chromePath,
                    args: [
                      '--disable-notifications',
                      '--disable-blink-features=AutomationControlled',
                      '--disable-infobars',
                      '--no-sandbox', // Use with caution, understand the security implications
                      '--disable-setuid-sandbox',
                      '--disable-dev-shm-usage',
                      '--ignore-certificate-errors',
                      '--ignore-ssl-errors',
                      '--disable-extensions', // Sometimes extensions can interfere
                      '--disable-component-extensions-with-background-pages',
                    ],
                    // *****This is Webshare proxies***************
                    // proxy: {
                    //      server:  `${proxyAddress}`, // Replace with your proxy host and port
                    //      username:`${username}`, // Replace with username
                    //      password: `${password}`, 
                    //  }





                    // *********************This below is for DataBright Proxy*******************
                    //  proxy: {
                    //  server:  `${proxyserverandport}`,        // Replace with your proxy host and port
                    //  username:`${proxyusernames[proxyProfileIndex]}`,           // Replace with username
                    //  password: `${proxypassword}`,          // Replace with your proxy password
                    //  // username: 'brd-customer-hl_4202dfdf-zone-residential_proxy1_test-country-us-city-california',        // Replace with your proxy username                        
                    //  // Make sure you set reject rejectUnauthorized to false
                    //  // rejectUnauthorized: false,
                    //  // ignoreHTTPSErrors: true // Ignore SSL errors

                    //  },

                });
                
                


                // Your environment variable containing the cookie data.
                const cookiesEnvVar = process.env.COOKIES;
                // It should be a JSON string, so you must parse it first.
                const cookies = JSON.parse(cookiesEnvVar);

               
                // Create a new browser context (like an incognito window)
                // const context = await browser.newContext();

                // Add the cookies to the context before navigating
                // The cookies variable should be an array of cookie objects
                // Each object must have name, value, domain, and path properties.
                await browser.addCookies(cookies);
                

                //Now, create a new page within this context. The page will inherit the cookies.
                const page = await browser.newPage();

                // You can now proceed with your automation logic using the 'page' object.
                console.log("Successfully created a new page in the persistent context!");





                // Create a new page within this context
                // const page = await context.newPage();

                console.log('🧭 Page:', page.url());
                
                try {
                    await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
                    
                    // Wait and click on first result.
                    await page.waitForSelector("a[aria-label='Home'][role='link']");
                    
                    console.log('✅ USING COOKIES sUCCESSFULLY Already logged in to FACEBOOK!');
                }
                catch(err) {
                    if (err.name === "TimeoutError") {
                        console.log('❌ Not logged in to Facebook! Cookies may be expired EXPIRED.');
                    } else {
                        console.error(err);
                    }
                }

                // Your main logic here
                console.log('✅ SURVIVED THE NOT LOGGED IN TIMEOUT ERROR NOW!');

                // await browser.close();
                // })();






















// Continue with automation using `browserContext.pages()[0]` or `browserContext.newPage()`
                


                //launch new page
                // const page=await browser.newPage();

                await page.setViewportSize  ({width: 1800, height: 900});
                

                console.log("Waiting for 5 Seconds before screeshot for after Proxy Login")

                await page.evaluate(async ()=>{
                    return new Promise(resolve => setTimeout(resolve, 2000))
                })


                // Test the proxy by visiting an IP verification website
                // await page.goto('https://myip.com', {waitUntil:"domcontentloaded", timeout:60000});

                // await page.goto('https://whatismyipaddress.com/', {waitUntil:"domcontentloaded", timeout:60000});

                
                // Capture a screenshot to verify the setup
                await page.screenshot({ path: 'example.png' });
            
                // await browser.close();
        





        
                //launch new page
                // const page=await browser.newPage();
                
                console.log("Waiting for 5 minutes before proceeding to Facebook.com....")

                await page.evaluate(async ()=>{
                    return new Promise(resolve => setTimeout(resolve, (8 * 1000)))
                })
        































        
                // console.log('🧭 Page:', page.url());
                
                // await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded', timeout:60000 });
        
                


                // const url = page.url();
                
                // try{
                //     // await page.wait

                //     //  Wait and click on first result.
                
                //     await page.waitForSelector("a[aria-label='Home'][role='link']")
            
                //     console.log('✅ Already logged in to FACEBOOK!');
                // }
                // catch(err){
                //     if(err.name==="TimeoutError"){
                //         console.log('❌ Not logged in to Facebook! Kindly Check the Browser and Login');

                //         // since not logged in load the cookies from the process.env.COOKIES
                        
                //         // / Load cookies from the cookie.json file
                //         // const cookies = JSON.parse(fs.readFileSync('./cookies/kiprotichkiproperties.json'));
                //         // const cookies=process.env.COOKIES;

                //         //   // Set the cookies in the page
                //         // await page.addCookies(...cookies);
                //         // console.log("Just added the cookies, Should NOw be Logged in ")
                        

                //     }
                // }

                // console.log('✅ SURVIVED THE NOT LOGGED IN TIMEOUT ERROR Already logged in to FACEBOOK NOW!');
            
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/kiprotichkiproperties.json'));
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/yegonk247.json'));
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/juan.json'))
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/valitaly.json'));
        
        
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/kiprotichmesh1.json'));
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/meshackwanjohi.json'));
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/meslelu.json'));
        
        
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/marioneliza.json'));
        
                // Load cookies from the cookie.json file
                // const cookies = JSON.parse(fs.readFileSync('./cookies/megastrength.json'));
        
        
  
        
                try{
        
                    // Set the cookies in the page
                    // await context.addCookies(...cookies);
        
        
                    // await page.goto('https://www.facebook.com/   ', { waitUntil: 'networkidle', timeout:30000 });
        
        
        
                    await page.waitForSelector("a[aria-label='Home'][role='link']")
            
                    const homebutton=await page.$('a[aria-label="Home"][role="link"]')
        
                    if(homebutton){
                        console.log("Wow! Yess! Just landed on the Home page")
        
        
                            
                        await page.evaluate(async()=>{
                            return new Promise(resolve => setTimeout(resolve, 5000))
                        }); 
        
                        
                        // await postTogroups(page,browser);
        
        
                        await createMarketplaceListing(page,browser);
        
                        // await listInmorePlaces(page,browser);
        
                        // await browser.close();
                    }
                    else{
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});
                        console.log("Error catch No Home Page Found")
        
                    }
        
        
        
        
                    // *****************This logging in part comment out for now***********
        
                        // Type into search box.
                        // await page.locator('#email').fill(`${process.env.email}`);
        
                        // await page.locator('#pass').fill(`${process.env.password}`);
                        // await page.locator('#pass').fill(`${process.env.password}`);
        
                        // Wait and click on first result.
                        // await page.locator('#loginbutton').click();
        
        
                    
            
        
                }
                catch(error){
                    console.log("Caough ERror AFter trying to use Cookies \n" + error);
                    console.log(error);
        
                    if(error.name==="TimeoutError"){
                        // Navigate the page to a URL.Navigate to the website
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
        
                        // await page.setCookie(...cookies);
        
                        
                        // Navigate the page to a URL.Navigate to the website
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:80000 });
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:30000 });
                        
        
                        // Perform actions on the page
        
        
                        //  wait for 30 seconds before starting to scroll the joined groups 
                        //  await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 300000))
                        // }); 
        
                        //wait for redirect after clicking the loginbutton
                        await page.waitForNavigation({timeout:300000});
        
                        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        
                        // For example, take a screenshot
                        // await page.screenshot({ path: './cookieshomelogin.png' });
                        await page.screenshot({ path: './cookieshomelogin.png' });
        
                        // console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")
                        console.log("Aleaady taken a screen shot of the Home page after login using cookies found in cookieshomelogin.png ")
        
        
                        //  await page.screenshot({ path: "./userscache/images/home.png" });
                        await page.screenshot({ path: path.join(cacheDir, "home.png" )});
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                        // let isCached = false;
        
                        // // Listen for responses and check if they come from cache
                        // page.on('response', response => {
                        //     const status = response.status();
                        //     const fromCache = response.fromCache();
        
                        //     // Check if any resource was served from cache
                        //     if (fromCache) {
                        //         isCached = true;
                        //     }
                        // });
        
                        // // Navigate the page to a URL.Navigate to the website
                        // await page.goto('https://www.facebook.com/', { waitUntil: 'networkidle2', timeout:80000 });
                                
                        // // Check if cookies are available
                        // const cookies = await page.cookies();
                    
                        // if (cookies.length > 0 || isCached) {
                        //     console.log('Cookies or cache found, no need to login.');
                        //     // Continue with the script
        
        
                        //     console.log(cookies);
        
        
                        // } else {
        
                        //             // Navigate the page to a URL.
                        //             // await page.goto('https://www.facebook.com/login/', {waitUntil:'networkidle2', timeout:30000});
        
                        //             // console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                        //                 // wait for 30 seconds before starting to scroll the joined groups 
        
                        //             // Wait for the email input to be available
                        //             await page.waitForSelector('#email');
                        //             // Wait for the email input to be available
                        //             await page.waitForSelector('#pass');
        
                        //             // Wait for the login button submit to be available
                        //             // await page.waitForSelector('#loginbutton');
        
                        //             //console.log email from process.env file
                        //             console.log(process.env.email)
                        //             console.log(process.env.password)
        
                        //             // Type into search box.
                        //             await page.locator('#email').fill(`${process.env.email}`);
        
                        //             //take screen shot 
                        //             //take screen shot 
                        // // 
                        //             // Wait and click on first result.
                        //             // await page.locator('#loginbutton').click();
        
                        //             //wait for redirect after clicking the loginbutton
                        //             await page.waitForNavigation({timeout:60000});
        
                        //             // wait for 30 seconds before starting to scroll the joined groups 
                        //             await page.evaluate(async()=>{
                        //                 return new Promise(resolve => setTimeout(resolve, 10000))
                        //             }); 
                                
                        //             // Continue with your tasks
                        //             console.log('Waited for 2 minutes');
        
                        //             console.log("Login Successfull")
        
                        //             //wait for redirect after clicking the loginbutton
                        //             // await page.waitForNavigation({timeout:60000});
        
                        //             await page.screenshot({ path: "./marketplacelistingimgs/homepage.png" });
        
                        //             console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                        //                 // wait for 30 seconds before starting to scroll the joined groups 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                        // *****************This one is the copy of the Above for logging in***********
        
                        // console.log('No cookies or cache found, redirecting to login...');
                        console.log('No cookies or cache found, redirecting to login...');
                        
                        // Navigate the page to a URL.
                        // await page.goto('https://www.facebook.com/login/', {waitUntil:'networkidle2', timeout:30000});
        
                        await page.screenshot({ path: path.join(marketplacelistingimgs, "homepage.png" )});
                        // await page.screenshot({ path: "./marketplacelistingimgs/homepage.png" });
        
                        console.log("Just took a Login Success screenshot  markerplacelisttinfg to home.png")
                            // wait for 30 seconds before starting to scroll the joined groups 
        
                        // Wait for the email input to be available
                        // await page.waitForSelector('#email');
        
        
                        // Wait for the email input to be available
                        // await page.waitForSelector('#pass');
        
                        // Wait for the login button submit to be available
                        // await page.waitForSelector('#loginbutton');
        
                        // //console.log email from process.env file
                        // console.log(process.env.email)
                        // console.log(process.env.password)
        
        
        
        
                        
        
        
        
                        try{
                            await page.waitForSelector("a[aria-label='Home'][role='link'")
        
                            const homebutton=await page.$('a[aria-label="Home"][role="link"]')
        
                            if(homebutton){
                                console.log("Wow! Yess! Just landed on the Home page")
                            }
                            else{
                                //wait for redirect after clicking the loginbutton
                                await page.waitForNavigation({timeout:300000});
        
                            }
                            
        
                        }
                        catch(error){
                            if(error.name==="TimeoutError"){
                                //wait for redirect after clicking the loginbutton
                                await page.waitForNavigation({timeout:300000});
                            }
                            else{
                                console.log("Different Error Encountered");
                            }
                        }
        
        
        
        
        
        
        
        
        
        
                        // await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 5000))
                        // }); 
        
        
                        // // }
        
        
                        
                        // await page.evaluate(async()=>{
                        //     return new Promise(resolve => setTimeout(resolve, 5000))
                        // }); 
        
                        
                        // await postTogroups(page,browser);
        
        
                        await createMarketplaceListing(page,browser);
        
                        // await listInmorePlaces(page,browser);
        
                        // await browser.close();
        
                        
                    }   
                    else{
                        console.log("It's just another stupid error   ,  \n", error)
                        console.log(error)
                    }
                }
        
                    
            }
            catch(err){
                console.log("I just created an error during login")
                console.log(err);
            }
        })()
        
        
        
        
        
        
        
        



















        console.log("✅ Automation completed.");
    } catch (err) {
        console.error("❌ Automation failed:", err);
    }

    console.log("⏳ Waiting 3 hours until next run...\n");

    // await browser.close()

    // Wait for 3 hours (10 min = 600000 for testing)
    setTimeout(runAutomation, 13 * 60 * 60 * 1000);
    // Wait for every 3 minuts to start application 
    // setTimeout(runAutomation, 12 * 60 * 1000);

}

// Start the loop
// runAutomation();




// This is the server part. It's the "cashier" waiting for AppSheet.
// The '/trigger' route is what AppSheet will call.
app.post('/startposting', async (req, res) => {
    console.log('✅ Webhook request received from AppSheet! Starting automation...');

    try {
        // Here, we call your automation script.
        // await runAutomation();
        // res.status(200).send('\n \n Automation task has been triggered successfully.\n');
        console.log('\n \n Automation task has been triggered successfully.\n');














        //gogole sheets thisngs 

        console.log('Received request from AppSheet bot. About to Call Google Appsheets Apis');

        try {
            // Step 1: Make a POST request to the AppSheet API to get the data
            const response = await axios.post(
                `https://api.appsheet.com/api/v2/apps/${APPSHEET_APP_ID}/tables/${APPSHEET_TABLE_ID}/Action`,
                {
                    "Action": "Find",
                    "Properties": {
                        "Locale": "en-US"
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'ApplicationAccessKey': APPSHEET_API_KEY
                    }
                }
            );

            // Check if the AppSheet API call was successful
            if (response.data && response.data.Rows) {
                const productData = response.data.Rows;
                console.log(`Successfully fetched ${productData.length} rows from AppSheet.`);

                // Step 2: Loop through the fetched data and perform your posting task
                for (const product of productData) {
                    // YOUR FACEBOOK POSTING LOGIC GOES HERE
                    // The 'product' object contains all the column data for one row
                    console.log(`Processing product: ${product.Title}`); 
                    // You can access other columns like this: product.Price, product.Description
                }

                // Send a success response back to the AppSheet bot
                res.status(200).send('Process started successfully.');
            } else {
                console.error('AppSheet API returned an unexpected response:', response.data);
                res.status(500).send('Error fetching data from AppSheet.');
            }



             await runAutomation();
            // res.status(200).send('\n \n Automation task has been triggered successfully.\n');
            console.log("Just falled the RunAutomation Function")

        } catch (error) {
            console.error('Error in startposting endpoint:', error.message);
            res.status(500).send('Internal Server Error.');
        }





    } catch (error) {
        console.error('❌ Error triggering automation:', error);
        res.status(500).send('An error occurred while attempting to trigger the automation.');
    }
});

app.listen(port, () => {
  console.log(`Server listening for webhooks on port ${port}`);
});
