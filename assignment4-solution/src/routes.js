(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

    // Route to Home Page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider

    // Home Page
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
    })

    // Categories Page
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'CategoriesController as CategoriesCtrl'
    })

}

})();