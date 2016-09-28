var app = angular.module("gettingStarted", []);

app.controller("gtgStdCtrl", function ($scope) {
    console.log($scope);
    $scope.showMe = false;
    $scope.addNew = function () {
        $scope.showMe = !$scope.showMe;
    }

    $scope.submitAddNew = function () {
        console.log("submitAddNew");

        var fName = document.getElementsByName("fname")[0].value;
        var lName = document.getElementsByName("lname")[0].value;
        var age = document.getElementsByName("age")[0].value;

        console.log(fName);
        console.log(lName);
        console.log(age);

        //$scope.showMe = false;

    }

});
