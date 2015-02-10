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
var ConfigurationModule;
(function (ConfigurationModule) {
    var ConfigurationRouteResolver = (function () {
        function ConfigurationRouteResolver(configurationService, $q, $route) {
            var _this = this;
            this.configurationService = configurationService;
            this.$q = $q;
            this.$route = $route;
            this.resolveRoute = function () {
                return _this.configurationService.get();
            };
        }
        ConfigurationRouteResolver.serviceId = "configurationRouteResolver";
        ConfigurationRouteResolver.$inject = ["configurationService", "$q", "$route"];
        return ConfigurationRouteResolver;
    })();
    angular.module("configuration").service(ConfigurationRouteResolver.serviceId, function (configurationService, $q, $route) { return new ConfigurationRouteResolver(configurationService, $q, $route); });
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=configurationRouteResolver.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var ConfigurationService = (function () {
        function ConfigurationService($http, $q, $rootScope) {
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.baseUri = "api/configuration/";
        }
        ConfigurationService.prototype.get = function () {
            var deferred = this.$q.defer();
            deferred.resolve(true);
            //this.$http({ method: "GET", url: this.baseUri + "get" }).then((results) => {
            //    deferred.resolve(this.$rootScope.configuration = results.data);
            //}).catch((error) => {
            //    deferred.reject(error);
            //});
            return deferred.promise;
        };
        ConfigurationService.serviceId = "configurationService";
        return ConfigurationService;
    })();
    ConfigurationModule.ConfigurationService = ConfigurationService;
    angular.module("configuration").service(ConfigurationService.serviceId, ["$http", "$q", "$rootScope", function ($http, $q, $rootScope) { return new ConfigurationService($http, $q, $rootScope); }]);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=configurationService.js.map
//# sourceMappingURL=IConfigurationService.js.map
//# sourceMappingURL=ICoreRootScope.js.map
