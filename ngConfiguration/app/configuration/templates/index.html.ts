angular.module("configuration").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/configuration/templates/index.html",
		"<div>"+
		"    <h1>Configuration</h1>"+
		"</div>"
	);
}]);
