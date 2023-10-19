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
        controller: 'CategoriesController as CategoriesCtrl',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    // Category Items Page
    .state('item', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/templates/main-items.template.html',
        controller: 'ItemsController as ItemsCtrl',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function successCallback(response) {
                    return response;
                });
            }]
        }
    })

}

})();