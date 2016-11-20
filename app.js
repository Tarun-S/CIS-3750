(function () {

angular.module('app',['ui.router']);

angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/login');

    // Set up UI states
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.view.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.view.html'
        })

        .state('error', {
            url: '/error',
            urlTemplate: 'app-content/error.view.html'
        })

        .state('edit', {
            url: '/edit',
            templateUrl: 'edit/edit.view.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'login/login.view.html'
        })

        .state('survey', {
            url: '/survey',
            templateUrl: 'survey/survey.view.html'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'search/search.view.html'
        })

        .state('signup1', {
            url: '/signup1',
            templateUrl: 'signup/signup1.view.html'
        })
        
        .state('signup2', {
            url: '/signup2',
            templateUrl: 'signup/signup2.view.html'
        });
}


})();
