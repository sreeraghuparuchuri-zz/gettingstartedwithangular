var app = angular.module("gettingStarted", []);

app.controller("gtgStdCtrl", function($scope) {
console.log($scope);
$scope.showMe = false;
    $scope.Addnew = function() {
        $scope.showMe = !$scope.showMe;
    }
    
    $scope.newFunc = function() {
    console.log("HEllo");
    
    }
});
