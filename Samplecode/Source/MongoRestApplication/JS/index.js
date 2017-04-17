/**
 * Created by Onica Rayineedi on 4/16/2017.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.insertData = function(){
        console.log($scope.formData.fname);
        console.log($scope.formData.pno);
        console.log($scope.formData.email);
        console.log($scope.formData.age);
        console.log($scope.formData.msg);
        var dataParams = {
            'fname' : $scope.fname,
            'pno' : $scope.pno,
            'email' : $scope.email,
            'age' : $scope.age,
            'msg' : $scope.msg

        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/patientlist',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});
