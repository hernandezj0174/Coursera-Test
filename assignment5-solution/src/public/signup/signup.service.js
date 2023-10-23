(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = ['$http'];
function SignupService ($http) {
    var service = this;

    service.fetchFavoriteItem = function(itemShortName) {
        var favoriteItemLetter = itemShortName[0];
        var favoriteItemNumber = itemShortName[1] - 1;
        var link = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + favoriteItemLetter +'/menu_items/' + favoriteItemNumber +'.json'
        return $http ({
            method: 'GET',
            url: link
        })
        .then(function successCallback(response) {
            return response;
        },
        function errorCallback(response) {
            console.log("Something went terribly wrong!");
        });
    };

    service.storeUserPreferences = function(firstName, lastName, email, phone, favoriteItem) {
        service.userFirstName = firstName;
        service.userLastName = lastName;
        service.email = email;
        service.phone = phone;
        service.favoriteItem = favoriteItem;

        console.log("INSIDE STORE USER PREFERENCES");
    };

    service.fetchUserPreferences = function() {
        var userPreferences = {
            firstName: service.firstName,
            lastName: service.lastName,
            email: service.email,
            phone: service.phone,
            favoriteItem: service.favoriteItem
        };

        console.log("INSIDE FETCH USER PREFERENCES");

        return userPreferences;
    }
};

})();