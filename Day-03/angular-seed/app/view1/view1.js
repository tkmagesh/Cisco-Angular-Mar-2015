'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.service("greetService", function(){
    this.greet = function(name){
        return "Hi " + name;
    }
})

.controller('View1Ctrl', function($scope, greetService) {
    $scope.name = "";
    $scope.greetMsg = "";
    $scope.greet = function(){
        $scope.greetMsg = greetService.greet($scope.name);
    }
})

.filter("trimLength", function(){
    return function(data, lengthLimit){
        return data.length <= lengthLimit ? data : data.substr(0,lengthLimit);
    }
})
