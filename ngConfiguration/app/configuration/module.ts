module ConfigurationModule {

    var app = angular.module("configuration", [

        "ngRoute"
    ])
        .config(config)
        .run(run);


    config.$inject = ["$routeProvider"];

    function config($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "app/configuration/templates/index.html",
            resolve: {
                routeData: [
                    "configurationRouteResolver", (configurationRouteResolver) => {
                        return configurationRouteResolver.resolveRoute();
                    }
                ]
            }
        });
    }

    function run() {
        
    }
}