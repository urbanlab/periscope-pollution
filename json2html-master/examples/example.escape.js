
(function() {
	//Test the handling of quoted strings 
    var test_data = {"test1":"'single-quoted'", "test2":"\"double-quoted\""};

    var transform = [
			{"<>":"a-text", "html":"", "value":"${liste_points.nom}", "position": "0 0 -8", "align": "center", "width": "10", "height": "10", "color": "red", "cursor": "fuse: true", "id": "niveauPollution", "visible": "true"},
		];

        
    var html = json2html.transform(test_data, transform);

    document.write(html);
    
})();
