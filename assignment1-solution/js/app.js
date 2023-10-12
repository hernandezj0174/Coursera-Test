(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.textbox = "";
    $scope.message = "";

    $scope.displayItemCount = function () {
        $scope.message = determineMessage();
    };

    function determineMessage () {
        var chosenMessage = "";

        if (getFoodCount($scope.textbox) <= 3) {
            chosenMessage = "Enjoy!";
        } else {
            chosenMessage = "Too much!";
        }

        return chosenMessage;
    };

    function getFoodCount () {
        var lunchItems = $scope.textbox.split(",");
        var lunchItemCount = 0;

        for (var i = 0; i < lunchItems.length; i++) {
            if (lunchItems[i] !== "") {
                lunchItemCount += 1;
            }
        }

        return lunchItemCount;
    };
}

})();