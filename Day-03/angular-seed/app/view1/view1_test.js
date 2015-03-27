'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe("trimLength filter", function(){
      it("should return the given string for shorter length", inject(function($filter){
          var trimLengthFilter = $filter("trimLength");
          var data = "Magesh"
          var result = trimLengthFilter(data,20);
          expect(result).toBe(data);
      }));
  })

  describe('view1 controller', function(){

    it('should have initialized name as empty string', inject(function($controller) {
      //spec body
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      expect(view1Ctrl).toBeDefined();
      expect(scope.name).toBe("");
    }));

    it('should populate the greetmsg with appropriate greeting message', inject(function($controller) {
      //spec body
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      scope.name = "Magesh";
      scope.greet();
      expect(scope.greetMsg).toBe("Hi Magesh");
    }));



it('should call greet method of the greetService', inject(function($controller) {
      //spec body
      var scope = {};
      var spyGreetService = {
          greet : function(){}
      };
      spyOn(spyGreetService, "greet");

      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, greetService : spyGreetService});
      scope.name = "Magesh";
      scope.greet();
      expect(spyGreetService.greet).toHaveBeenCalled();
    }));

      it('should call greet method of the greetService with the name', inject(function($controller) {
      //spec body
      var scope = {};
      var spyGreetService = {
          greet : function(){}
      };
      spyOn(spyGreetService, "greet");

      var view1Ctrl = $controller('View1Ctrl', {$scope : scope, greetService : spyGreetService});
      scope.name = "Magesh";
      scope.greet();
      expect(spyGreetService.greet).toHaveBeenCalledWith(scope.name);
    }));

  });
    });
