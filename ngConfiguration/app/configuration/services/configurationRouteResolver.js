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