angular.module("bugTrackerApp")
    .filter("toMoment", function(bTmoment){
            return function(dt){
                return bTmoment(dt).fromNow();
            }
        });
