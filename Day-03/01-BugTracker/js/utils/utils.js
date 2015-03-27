var utils = angular.module("utils",[]);
utils.value("defaultTrimTextLength",60)

utils.filter("trimText", function(defaultTrimTextLength){
    return function(data, lengthLimit){
        lengthLimit = lengthLimit || defaultTrimTextLength;
        return data.length < lengthLimit ? data : data.substr(0,lengthLimit) + "...";
    }
});
