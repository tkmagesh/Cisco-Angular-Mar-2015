angular.module("bugTrackerApp")
    .service("bugStorage", function BugStorage(Bug, $window){

                var storage = $window.localStorage;

                this.save = function(bug){
                    storage.setItem(bug.id, $window.JSON.stringify(bug));
                };
                this.remove = function(id){
                    storage.removeItem(id);
                };
                this.getAll = function(){
                    var result = [];
                    for(var i=0; i< storage.length;i++){
                        var id = storage.key(i);
                        var bugAsString = storage.getItem(id);
                        var bug = new Bug($window.JSON.parse(bugAsString));
                        result.push(bug);
                    }
                    return result;
                }
            });
