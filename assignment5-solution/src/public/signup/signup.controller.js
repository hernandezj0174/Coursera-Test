(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
    var reg = this;

    reg.user = {
        
    };

    reg.submit = function () {
        reg.completed = true;
        console.log("BUTTON PRESS DETECTED!");
    };
};

})();