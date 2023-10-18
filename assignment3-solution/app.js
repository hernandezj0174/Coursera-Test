(function () {
"use strict";

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);

function FoundItemsDirective () {
    var ddo = {
        scope: {
            items: '<',
            onRemove: '&'
        },
        templateUrl: 'template.html'
    };

    return ddo;
};

NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController (MenuSearchService) {
    var narrow = this;

    narrow.search = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {
            narrow.found = response;
        })
    };

    narrow.remove = function (index) {
        MenuSearchService.remove(index);
    };
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
    var service = this;

    var foundItems = [];

    service.getMatchedMenuItems = function(searchTerm) {
        return $http ({
            method: 'GET',
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
        })
        .then(function successCallback(response) {
            foundItems = [];

            if (searchTerm) {
                for (const category in response.data) {
                    for (var i = 0; i < response.data[category].menu_items.length; i++) {
                        var description = response.data[category].menu_items[i].description;
                        description = description.toLowerCase();
                        if (description.includes(searchTerm)) {
                            foundItems.push(response.data[category].menu_items[i]);
                        }
                    }
                }

                return foundItems;
            }
            
        },
        function errorCallback(response) {
            console.log("Something went terribly wrong!");
        });
    };

    service.remove = function(index) {
        foundItems.splice(index, 1);
    };
};

})();