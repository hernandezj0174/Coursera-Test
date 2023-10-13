(function () {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController (ShoppingListCheckOffService) {
    var showItems = this;
    showItems.items = ShoppingListCheckOffService.getToBuyItems();

    showItems.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
    }
};

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController (ShoppingListCheckOffService) {
    var showItems = this;
    showItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService () {
    var service = this;

    var toBuyItems = [{"name": "Cookies", "quantity": 2},
                        {"name": "Hot Cheetos", "quantity": 2},
                        {"name": "Limes", "quantity": 10}];
    var boughtItems = [];

    service.buyItem = function (index) {
        boughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index, 1);
    };

    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getBoughtItems = function () {
        return boughtItems;
    };
};

})();