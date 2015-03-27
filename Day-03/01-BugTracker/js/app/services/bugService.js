angular.module("bugTrackerApp")
    .service("bugService", function($http, Bug, $q){
       /* this.getAll = function(){
            var promise = $http({
                url : "http://localhost:3000/bugs",
                method : "GET"
            });
            return promise;
        }*/
         this.getAll = function(){
            var deferred = $q.defer();

            var promise = $http({
                url : "http://localhost:3000/bugs",
                method : "GET"
            });
            promise.then(function(response){
                var result = response.data.map(function(bugData){
                    return new Bug(bugData);
                });
                deferred.resolve(result);
            });

            return deferred.promise;
        }
    });
