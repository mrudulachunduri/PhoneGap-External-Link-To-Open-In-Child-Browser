Premise:: Hyperlinks of the 3rd party HTML content need to be modified to open up in child-browser. This snippet scan thrugh the HTML and modifies to produce the desired effect. In addition, it adds an extra class to visully distinguish the link. You can add whatever CSS you want.

Solution:

1. Add the ChildBrowser plugin to the application.
2. Add the urlToChildBrowser.js script to the page.
3. Add the below css style to the page
<style>
		.external-link{
			color:blue;	
			text-decoration:underline;
		}
</style>

This script has a function urlToChildBrowser() which takes html as input and outputs the html with the hyperlinks modified to open in ChildBrowser.

Usage:

var htmlToAdd = urlToChildBrowser(data.description);						
$("#divDescriptionContent").append(htmlToAdd);

In the above example, the data.description contains the html.

Once the html content is modified, it can be appended to its parent element. The CSS style ‘external-link’ will highlight the links in the html.
