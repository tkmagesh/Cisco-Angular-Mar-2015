angular.module("bugTrackerApp")
    .controller("bugsController", function($scope, Bug, bugStorage, bugService){
            $scope.bugs = {
                list : [],
                addBug : function(){
                    var newBug = new Bug({
                        title : $scope.newBug
                    });
                    bugStorage.save(newBug);
                    this.list.push(newBug);
                    $scope.newBug = "";
                },
                toggleStatus : function(bug){
                    bug.toggleStatus();
                    bugStorage.save(bug);
                },
                removeClosedBugs : function(){
                    for(var i=this.list.length-1; i>=0; i--)
                        if (this.list[i].isClosed){
                            bugStorage.remove(this.list[i].id);
                            this.list.splice(i,1);
                        }
                }
            };

            /*bugService.getAll().then(function(response){
                $scope.bugs.list = response.data.map(function(bugData){
                    return new Bug(bugData);
                });
            });*/
            bugService.getAll().then(function(bugs){
                $scope.bugs.list = bugs;
            });
        });
