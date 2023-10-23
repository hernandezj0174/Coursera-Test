(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {
    var info = this;

    info.getUserInfo = function () {
        info.userInfo = SignupService.fetchUserPreferences();
        console.log(info.userInfo);
    }
};

})();