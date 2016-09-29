var app = angular.module("gettingStarted", []);

app.controller("gtgStdCtrl", function ($scope, $http) {
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

        var req = {
            method: "POST",
            url: "http://localhost:8080/com.raghu.webservice.restful/gettingstarted/addnew",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                FNAME: fName,
                LNAME: lName,
                AGE: age
            }
        }

        $http(req).then(function (response) {
            console.log(response);

        });
        //$scope.showMe = false;

    }

});
