/**
 * <p>In most cases each team will be provided with a repository that has all the fundamental directories, files and project dependencies already set up. Use this set up as an example in the event that your workstation does not already have Ruby, Sass, Compass and or Foundation Framework installed via gems. Going through this example will install Ruby, Sass, Compass and Foundation and will demonstrate how the HTML file, Scss files are wired uo.</p>
 *
 * <p>Step 1: Download Project Set Up: <a href="app.zip" target="_blank">DOWNLOAD BASIC DIRECTORY STRUCTURE</a></p>
 * <p>Step 2: Un-archive the zipped directory app somewhere on your local hard disk and follow the examples below</p>
 *
 * @example
 * // Step 3:
 * // By default all MAC's come installed with Ruby 1.8.7
 * // if your running a MAC skip to step 4
 * // if your running windows skip to installing Ruby on Windows
 *
 * // Step 4: Update system Gems
 * // (Note for windows don't use sudo)
 * sudo gem update --system
 *
 * // Step 5: installing Compass
 * // (Note for windows don't use sudo)
 * sudo gem install compass
 *
 * // Step 6: installing Sass
 * // (Note for windows don't use sudo)
 * sudo gem install sass
 *
 * // Step 7: Install any dependencies, in this case we will be installing
 * // a responsive framework Foundation
 * // (Note for windows don't use sudo)
 * sudo gem install zurb-foundation
 *
 *
 * // Step 8: Navigate to the app project we downloaded in step 1 and open the index.html in your web browser
 * app > index.html
 *
 * // Step 9: Watching and compiling your sass files
 * // cd into your app project with terminal/command prompt
 * pinuelasj$ cd /YOUR_DIRECTORY/app
 *
 * // Step 9: Running Compass watch
 * // in your terminal/command prompt enter the following command
 * compass watch
 *
 * // you should see the following output in your terminal/command prompt
 * >>> Change detected at 14:05:35 to: app.scss
 * create css/app.css
 * create css/ie.css
 * create css/medium.css
 * create css/print.css
 * create css/small.css
 *
 * Step 10: Refresh your browser window
 * // You should now see a top bar component and a headline
 * // This example includes Sass, Compass, Foundation and the HTML 5 Boilerplate
 *
 *
 * // Please note when adding Foundation components to please include the appropriate scripts
 * // In this example we have included top bar, orbit, drop down and interchange
 * js/foundation/foundation.js
 * js/foundation/foundation.topbar.js
 * js/foundation/foundation.orbit.js
 * js/foundation/foundation.dropdown.js
 * js/foundation/foundation.interchange.js
 * // For other foundation components please refer to their documentation at http://foundation.zurb.com/docs/
 *
 *
 *
 *
 * // In this example we are using the simplest set up possible to avoid any confusion
 *
 *
 *
 *
 * // Installing Ruby on Windows:
 * Go to http://rubyinstaller.org/ and click the download button
 * Follow the installations steps. Once complete continue to step 5
 *
 */

// Use camelCase for naming varibale names.
var SassCompassSetUp = "General Sass & Compass Set Up";

