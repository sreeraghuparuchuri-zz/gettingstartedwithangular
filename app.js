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

        var putReq = {
            method: "PUT",
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

        $http(putReq).then(function (response) {
            console.log(response);

        });
        //$scope.showMe = false;

    }

    

});

app.controller("gtgStdDataCtrl", function($scope, $http) {

$scope.getData = function() {
   // alert("inside getData");

// $http({
//   method: 'GET',
//   url: "http://localhost:8080/com.raghu.webservice.restful/gettingstarted/hello"
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log("successCallBack",response);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//     console.log("errorCallBack",response);
//   });


var getReq = {
            method: "GET",
            url: "http://localhost:8080/com.raghu.webservice.restful/gettingstarted/hello",
            
        }

        $http(getReq).then(function (response) {
            console.log(response);
           angular.forEach(data, function(value, key) {
               console.log("Each Response:::",response);
              // console.log(value);
               //console.log(key);

           });  

            // console.log(response.data);
            
            // var splitResponse = response.data.split(",");
            // console.log(splitResponse[3]);

        });

}

});
