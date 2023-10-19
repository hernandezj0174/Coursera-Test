(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController (MenuDataService) {
    var categoryList = this;
    categoryList.categories = [];

    categoryList.$onInit = function () {
        MenuDataService.getAllCategories()
        .then(function (result) {
            categoryList.categories = result;
        });
    };
};
    
})();