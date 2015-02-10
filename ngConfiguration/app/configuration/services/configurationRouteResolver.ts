module ConfigurationModule {

    class ConfigurationRouteResolver {

        public static serviceId: string = "configurationRouteResolver";

        public static $inject = ["configurationService", "$q", "$route"];

        resolveRoute = () => {

            return this.configurationService.get();
        }

        constructor(private configurationService, private $q, private $route) {

        }
    }

    angular.module("configuration").service(ConfigurationRouteResolver.serviceId, (configurationService, $q, $route) => new ConfigurationRouteResolver(configurationService, $q, $route));
} 