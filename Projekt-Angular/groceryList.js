(function(angular) {
  'use strict';
function GroceryListController(groceryListService) {
	var ctrl = this;
	
	ctrl.groceryList = [];
	
	ctrl.getGroceryLists = function (list) {
            ctrl.groceryList = list;
        };

        ctrl.refreshGroceryLists = function(){
            groceryListService.getAllLists(ctrl.getGroceryLists);
        };

        ctrl.$onInit=function(){
            ctrl.refreshGroceryLists();
        };
}

angular.module('myApp').component('groceryList', {
  templateUrl: 'groceryList.html',
  controller: GroceryListController
});
})(window.angular);
