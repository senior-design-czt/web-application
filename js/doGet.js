//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the app, 
//responding to get requests with query strings as appropriate to dish out
//new pages.
//*********************************************************************************

function doGet(e) {
  var template, faviconUrl;
  if (e.parameter.player) { //main page
    template = HtmlService.createTemplateFromFile('html/MainPage');
    template.data = {playerId: e.parameter.player};
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Score for " + e.parameter.player)
  } 
  
  else 
  { //login page
    template = HtmlService.createTemplateFromFile('html/LoginUI-Starter');
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Welcome to SpeedScore LIVE")
    .setFaviconUrl(faviconUrl);
  }
}
  
 //include: Allows us to include files using templated HTML, per Google's best practices 
//(https://developers.google.com/apps-script/guides/html/best-practices)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}     
