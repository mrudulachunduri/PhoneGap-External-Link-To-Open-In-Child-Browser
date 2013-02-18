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

Usage:

	$("#divDescriptionContent").append(data.description);
	urlToChildBrowser("divDescriptionContent");

In the above example, the data.description contains the html.

Once the html content is appended to its parent element, th function urlToChildBrowser() is called which takes the name of the parent element as input and modifies the hyperlinks to open in childbrowser.
The CSS style ‘external-link’ that is added to the hyperlinks will highlight the links in the html.
