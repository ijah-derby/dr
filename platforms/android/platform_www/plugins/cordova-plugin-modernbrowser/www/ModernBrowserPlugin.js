cordova.define("cordova-plugin-modernbrowser.ModernBrowserPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

var url = null;
var statusBarColor = null;
var toolbarColor = null ;
var iconDefaultColor = null;
var iconDisabledColor = null;
var iconPressedColor = null;
var fileChooserEnabled = null;
var showIconBack = null;
var disableIconBack = null;
var showIconForward = null;
var disableIconForward = null;
var showIconMenu = null;
var disableIconMenu = null;
var webViewCameraEnabled = null;
var showProgressBar = null;
var progressBarColor = null;
var showUrl = null;
var titleColor = null;
var menuColor = null;
var webViewAppCacheEnabled = null;
var webViewCookieEnabled = null;
var webViewGeolocationEnabled = null;
var webViewAudioEnabled = null;
   
function plugin() {
}

 var params = {
 	url : url,
 	statusBarColor : statusBarColor,
 	toolbarColor : toolbarColor,
 	iconDefaultColor : iconDefaultColor,
 	iconDisabledColor : iconDisabledColor,
 	iconPressedColor : iconPressedColor,
 	fileChooserEnabled : fileChooserEnabled,
 	showIconBack : showIconBack,
 	disableIconBack : disableIconBack,
 	showIconForward : showIconForward,
 	disableIconForward : disableIconForward,
 	showIconMenu : showIconMenu,
 	disableIconMenu : disableIconMenu,
 	webViewCameraEnabled : webViewCameraEnabled,
 	showProgressBar:showProgressBar,
 	progressBarColor : progressBarColor,
 	showUrl:showUrl,
 	titleColor:titleColor,
    menuColor:menuColor,
    webViewAppCacheEnabled:webViewAppCacheEnabled,
    webViewCookieEnabled:webViewCookieEnabled,
    webViewGeolocationEnabled:webViewGeolocationEnabled,
    webViewAudioEnabled:webViewAudioEnabled

 }
   
plugin.prototype.create = function(params, successCallback, errorCallback) {
   
    var options = {};
    
    options.url = params.url;
    options.statusBarColor = params.statusBarColor;
    options.toolbarColor = params.toolbarColor;
    options.iconDefaultColor = params.iconDefaultColor;
    options.iconDisabledColor = params.iconDisabledColor;
    options.iconPressedColor = params.iconPressedColor;
    options.fileChooserEnabled = params.fileChooserEnabled;
    options.showIconBack = params.showIconBack;
    options.disableIconBack = params.disableIconBack;
    options.showIconForward = params.showIconForward;
    options.disableIconForward = params.disableIconForward;
    options.showIconMenu = params.showIconMenu;
    options.disableIconMenu = params.disableIconMenu;
    options.webViewCameraEnabled = params.webViewCameraEnabled;
    options.showProgressBar = params.showProgressBar;
    options.progressBarColor = params.progressBarColor;
    options.titleColor = params.titleColor;
    options.showUrl = params.showUrl;
    options.menuColor = params.menuColor;
    options.webViewAppCacheEnabled = params.webViewAppCacheEnabled;
    options.webViewCookieEnabled = params.webViewCookieEnabled;
    options.webViewGeolocationEnabled = params.webViewGeolocationEnabled;
    options.webViewAudioEnabled = params.webViewAudioEnabled;

    exec(successCallback, errorCallback, "ModernBrowserPlugin", "create", [options]);
}
   
module.exports = new plugin();
});
