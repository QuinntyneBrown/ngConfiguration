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