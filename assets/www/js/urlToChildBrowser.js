var currIndex = 0;
var newHtmlContent = "";

function urlToChildBrowser(oldHtmlContent)
{
	oldIndex = 0;
	currIndex = 0;
	newHtmlContent = "";
	tempHtmlContent = ""	
	urlString= "";
	
	while(oldHtmlContent.indexOf("href=") != -1)
	{		
		currIndex = oldHtmlContent.indexOf('href="');
		newHtmlContent = newHtmlContent + oldHtmlContent.substring(0,currIndex);
		oldHtmlContent = oldHtmlContent.substring(currIndex+6);
		currIndex = oldHtmlContent.indexOf('"');
		urlString = oldHtmlContent.substring(0,currIndex+1);
		//newHtmlContent = newHtmlContent + "#";
		newHtmlContent = newHtmlContent.insert(newHtmlContent.length+1," class='external-link' onclick='window.plugins.childBrowser.showWebPage(\""+urlString+", { showLocationBar: false });'");
		oldHtmlContent = oldHtmlContent.substring(urlString.length);
	}
	if(oldHtmlContent != "")
	{
		newHtmlContent = newHtmlContent + oldHtmlContent;
	}
	console.log(newHtmlContent);
	if(newHtmlContent == "")
	{
		return oldHtmlContent;
	}
	else
		return newHtmlContent;
	
}

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};