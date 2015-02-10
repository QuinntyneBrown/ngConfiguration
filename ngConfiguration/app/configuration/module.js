var ConfigurationModule;
(function (ConfigurationModule) {
    var app = angular.module("configuration", [
        "ngRoute"
    ]).config(config).run(run);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "app/configuration/templates/index.html",
            resolve: {
                routeData: [
                    "configurationRouteResolver",
                    function (configurationRouteResolver) {
                        return configurationRouteResolver.resolveRoute();
                    }
                ]
            }
        });
    }
    function run() {
    }
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=module.js.map