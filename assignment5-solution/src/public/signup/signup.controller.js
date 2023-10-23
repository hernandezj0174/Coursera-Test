(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
    var reg = this;
    var saved_info = [];

    reg.user = {
        
    };

    reg.submit = function () {
        saved_info.push(reg.user.firstName);
        saved_info.push(reg.user.lastName);
        saved_info.push(reg.user.email);
        saved_info.push(reg.user.phone);
        
        // Fetch favorite menu item
        SignupService.fetchFavoriteItem(reg.user.favoriteItem)
        .then(function successCallback(response) {
            saved_info.push(response);
            reg.httpSuccess = true;
        },
        function errorCallback(response) {
            reg.httpFail = true;
        });

        SignupService.storeUserPreferences(reg.user.firstName, reg.user.lastName, reg.user.email, reg.user.phone, reg.user.favoriteItem);
    };
};

})();