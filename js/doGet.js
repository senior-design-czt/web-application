//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the app, 
//responding to get requests with query strings as appropriate to dish out
//new pages.
//*********************************************************************************

function doGet(e) {
  var template;
  if (e.parameter.user) { //main page
    template = HtmlService.createTemplateFromFile('html/MainPage');
    template.data = {userId: e.parameter.user};
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Main Page")
  } 
  
  else 
  { //login page
    template = HtmlService.createTemplateFromFile('html/LoginUI-Starter');
    return template
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle("Welcome to the CZT Project")
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}     
