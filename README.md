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
This configuration is using an older version of the Drupal <a href="https://www.drupal.org/project/services">Services</a> module - 7.x.3.2<br>
<a href="http://ftp.drupal.org/files/projects/services-7.x-3.2.zip">Download Services 7.x.3.2 here</a><br>
Install the module by uploading or copying the path of the link and installing locally via Update Manager.<br>
<b>Enable Service and the REST server.</b><br>
Add a Service<br><img src="http://tylerfrankenstein.com/sites/default/files/styles/large/public/services-add.png?itok=-GyCkC_l"><br>
Setup Service Resources<br><img src="http://tylerfrankenstein.com/sites/default/files/styles/large/public/services-resources.png?itok=96Dl-y4g"><br>
</html>

