(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
    var service = this;

    service.getAllCategories = function() {
        var categories = [];

        return $http ({
            method: 'GET',
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
        })
        .then(function successCallback(response) {
            for (var i = 0; i < response.data.length; i++) {
                categories.push(response.data[i]);
            }

            return categories;
        })
    };

    service.getItemsForCategory = function(categoryShortName) {
        var menu_items = [];

        return $http ({
            method: 'GET',
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        })
        .then(function successCallback(response) {
            for (var i = 0; i < response.data.menu_items.length; i++) {
                menu_items.push(response.data.menu_items[i]);
            }

            return menu_items;
        })
    };
};

})();