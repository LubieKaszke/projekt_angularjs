(function(angular) {
  'use strict';
function GroceryListFormController(groceryListService) {
  var ctrl=this;
  
  ctrl.postObject = { owner:"", listName: "" };
  
  ctrl.submitList = function() {
	  ctrl.postObject.owner = ctrl.owner;
	  ctrl.postObject.listName = ctrl.name;
	  groceryListService.postObject(
                    function () {   
                      
                    },
                    function () {
                    },
                    JSON.stringify(ctrl.postObject));
    ctrl.owner="";
    ctrl.name="";
    window.location.href="#!lists";
    window.location.reload(true);
  }

          ctrl.$onInit = function () {
                ctrl.postObject = { owner:"", listName: "" };

        };
}


angular.module('myApp').component('groceryListForm', {
  templateUrl: 'groceryListForm.html',
  controller: GroceryListFormController,
      bindings: {
        name: '=?',
        owner: '=?',
        refreshList: '='
    }
});
})(window.angular);