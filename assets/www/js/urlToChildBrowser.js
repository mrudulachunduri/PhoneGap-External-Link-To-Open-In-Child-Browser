function urlToChildBrowser(parentEle)
{
	
	$("#"+parentEle+" a").addClass("external-link").bind("click",function(){
	window.plugins.childBrowser.showWebPage($(this).attr("href"), { showLocationBar: false });
	return false;
	});
	

}

