 angular.module("bugTrackerApp")
     .factory("Bug", function(){
            function Bug(data){
                data = data || {};
                this.id = data.id || new Date().valueOf().toString();
                this.title = data.title || '';
                this.isClosed = data.isClosed || false;
                this.createdAt = data.createdAt || new Date();
            }
            Bug.prototype.toggleStatus = function(){
                this.isClosed = !this.isClosed;
            }
            return Bug;
        });
