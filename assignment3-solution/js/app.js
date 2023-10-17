(function () {
"use strict";

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);

NarrowItDownController.$inject["MenuSearchService"];
function NarrowItDownController (MenuSearchService) {
    $scope.textbox = "";

    var narrow = this;

    narrow.removeItem = function (itemIndex) {
        MenuSearchService.removeItem(itemIndex);
    };

    narrow.search = function () {
        MenuSearchService.getMatchedMenuItems($scope.textbox);
    };
};

function MenuSearchService () {
    var service = this;

    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {

        var response = $http({
            method: "GET",
            url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
        });

        for (const letter in response) {
            for (const item in letter.menuItems) {
                if (item.description.includes(searchTerm)) {
                    foundItems.push(item.name + ", " + item.short_name + ", " + item.description);
                }
            }
        }

        return foundItems;
    };

    service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex, 1);
    };
};

function FoundItemsDirective () {
    var ddo = {
        templateUrl: "../foundItems.html",
        scope: {
            items: '<',
            onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: "NarrowCtrl",
        bindToController: true
    };

    return ddo;
};

})();