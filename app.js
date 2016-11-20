(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .controller('HeaderController', HeaderController)
        .config(config)
        .run(run);

    HeaderController.$inject = ['$scope','$location'];
    function HeaderController($scope, $location) 
    {
        $scope.isActive = function (viewLocation) 
        { 
            return viewLocation === $location.path();
        };
    }

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'HeaderController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/about', {
                controller: 'AboutController',
                templateUrl: 'about/about.view.html',
                controllerAs: 'vm'
            })
            .when('/contact', {
                controller: 'ContactController',
                templateUrl: 'contact/contact.view.html',
                controllerAs: 'vm'
            })

            .when('/resources', {
                controller: 'ResourceController',
                templateUrl: 'resources/resources.view.html',
                controllerAs: 'vm'
            })

            .when('/search', {
                controller: 'SearchController',
                templateUrl: 'search/search.view.html',
                controllerAs: 'vm'
            })

            .when('/signup1', {
                controller: 'SignupController',
                templateUrl: 'signup/signup1.view.html',
                controllerAs: 'vm'
            })
            .when('/signup2', {
                controller: 'SignupController',
                templateUrl: 'signup/signup2.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/signup1']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();