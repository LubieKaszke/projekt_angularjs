(function(angular) {
  'use strict';
function GroceryListController($scope, $http, $element, $attrs) {
	var ctrl = this;
	ctrl.list = [
   {
   "owner":"Jan",
   "name":"Lista1",
   "isVisible":true,
   "products": [
         {
            "name":"Chleb zytni",
			"desc":"bla",
            "done":true
         },
         {
            "name":"Kot",
			"desc":"bla",
            "done":false
		 },
         {
            "name":"pies",
			"desc":"bla",
            "done":false
         }
      ]
   },
   {
   "owner":"Adam",
   "name":"Lista na wieczor",
   "isVisible":true,
   "products": [
         {
            "name":"Chleb zytni",
			"desc":"bla",
            "done":false
         },
         {
            "name":"Woda",
			"desc":"bla",
            "done":false
		 },
         {
            "name":"Denaturat",
			"desc":"bla",
            "done":false
         }
      ]
   }
]
}

angular.module('myApp').component('groceryList', {
  templateUrl: 'groceryList.html',
  controller: GroceryListController
});
})(window.angular);
