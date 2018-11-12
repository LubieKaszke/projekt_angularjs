(function(angular) {
  'use strict';
function GroceryListFormController(groceryListService) {
  var ctrl=this;
  
  ctrl.postObject = { owner:"", listName: "" };
  
  ctrl.submitList = function() {
	  ctrl.postObject.owner = ctrl.owner;
	  ctrl.postObject.listName = ctrl.name;
	  groceryListService.post(
                    function () {
                    },
                    function () {
                    },
                    JSON.stringify(ctrl.postObject));
  }
}

angular.module('myApp').component('groceryListForm', {
  templateUrl: 'groceryListForm.html',
  controller: GroceryListFormController,
      bindings: {
        name: '=',
        owner: '='
    }
});
})(window.angular);