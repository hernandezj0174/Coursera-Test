(function () {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController (ShoppingListService) {
    var showItems = this;
    showItems.items = ShoppingListCheckOffService.getToBuyItems();
};

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController (ShoppingListService) {
    
};

function ShoppingListCheckOffService () {
    var service = this;

    var toBuyItems = [{"name": "Cookies", "quantity": 2},
                        {"name": "Hot Cheetos", "quantity": 2},
                        {"name": "Limes", "quantity": 10}];
    var boughtItems = [];

    // service.buyItem = function (itemName, quantity) {
    //     var item = {
    //         name: itemName,
    //         quantity: quantity
    //     };
        
        
    // };

    service.getToBuyItems = function () {
        return toBuyItems;
    };

    service.getBoughtItems = function () {
        return boughtItems;
    };
};

})();