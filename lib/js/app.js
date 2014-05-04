angular

    .module("github-interface", [
        "ngRoute",
        "restangular"
    ])

    .config([

        "$routeProvider",
        "$locationProvider",
        "RestangularProvider",

        function ($routeProvider, $locationProvider, RestangularProvider) {

            "use strict";

            $locationProvider.html5Mode(true);

            RestangularProvider.setDefaultHttpFields({
                cache: true
            });

            RestangularProvider.setBaseUrl('https://api.github.com/orgs');
            RestangularProvider.setDefaultRequestParams('get', {'type': 'public'});


            $routeProvider
                .when("/", {
                    templateUrl: "/templates/index.html",
                    routeName: "index",
                    controller: 'main'
                })
                // Add further routes here
            ;
        }
    ])
;
