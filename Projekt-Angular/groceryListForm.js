(function(angular) {
  'use strict';
function GroceryListFormController() {
  var ctrl=this;
  console.log(ctrl.name);
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