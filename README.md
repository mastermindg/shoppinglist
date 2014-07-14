<html>
<h1>Shopping List</h1>
This is a Cordova application that integrates Drupal services with the ZXing Barcode Scanner plugin to allow users to create personal shopping lists and add products by scanning them with their phone.

<h2>Creating with Cordova</h2>

<h3> Step 1: Create Cordova Scaffolding</h3>
cordova create myApp<br>
cd myApp<br>
cordova platform add android<br>
cordova plugins add https://github.com/wildabeast/BarcodeScanner.git<br>

This will create the default folders/files that you'll need to get started.<br>


<h3> Step 2: Pull this repo into the newly created myApp folder</h3>
git fetch --all<br>
git reset --hard origin/master

<h3> Step 3: Setup Drupal 7 for authentication</h3>
These instructions are a condensed version of Tyler Frankensteins tutorial on integrating Drupal with PhoneGap. <br>
<a href="http://tylerfrankenstein.com/code/android-app-with-drupal-7-services-phonegap-and-jquery-mobile">Drupal & PhoneGap - Mobile Application with Drupal 7 Services, PhoneGap & JQuery Mobile for Android - Example</a><br><br>
This configuration is using an older version of the Drupal <a href="https://www.drupal.org/project/services">Services</a> module - 7.x.3.2<br>
<a href="http://ftp.drupal.org/files/projects/services-7.x-3.2.zip">Download Services 7.x.3.2 here</a><br><br>
Install the module by uploading or copying the path of the link and installing locally via Update Manager.<br><br>
<b>Enable Service and the REST server.</b><br><br>
<b>Add a Service</b><br><img src="http://tylerfrankenstein.com/sites/default/files/styles/large/public/services-add.png?itok=-GyCkC_l"><br>
<b>Setup Service Resources</b><br><img src="http://tylerfrankenstein.com/sites/default/files/styles/large/public/services-resources.png?itok=96Dl-y4g"><br>
The resources you'll need to enable are:<br>
node -> retrieve,create,update,delete<br>
system -> connect<br>
user -> login,logout<br><br>
<b>Enable REST Server Response Formatters & Request Parsing<b><br>

Switch to the 'Server' tab and make sure the following are enabled:<br><br>
<b>Response formatters</b><br>
json<Br><br>
<b>Request parsing</b><br>
application/json<Br>
application/x-www-form-urlencoded<Br><br>
Feel free to test your webservice using <a href="http://tylerfrankenstein.com/code/android-app-with-drupal-7-services-phonegap-and-jquery-mobile">Tyler Frankenstein's tutorial</a><br><br>
<h3> Step 4: Create EAN account and enable data feed</h3>
This app uses EANData to pull product data from a UPC. <br><br>Create an account with EAN here:<br>
<a href="http://eandata.com/">EANData</a><br><br>
Activate Data feeds here:<br>
<a href="http://eandata.com/feed">EANData Data Feed Activate</a><br><br>
<h3> Step 5: Fill in the Settings.js file</h3>
Application settings are stored in www/settings.js. The file will need to be created as it is not kept in the repository.<br>
Here you'll need to enter your Drupal 7 webiste address (the root of the site, i.e. http://example.com/drupal)<br>
You'll also need to enter your EANData keycode which is used for querying the barcodes.<br>
<h3> Step 6: Build your app!</h3>
cordova run<br> 
cordova emulate android<br>


</html>

