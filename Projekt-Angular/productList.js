(function(angular) {
  'use strict';
function ProductListController(groceryListService) {
  var ctrl = this;


  ctrl.updateProduct = function(product, prop, value) {
    product[prop] = value;
  };
  
  ctrl.delete = function() {
    var idx = ctrl.list.indexOf(ctrl.item);
    console.log(idx);
    groceryListService.deleteObject(
                        function(){

                        },
                        function(){

                        },
              idx);

            
	  // $element.remove();
	  // $scope.$destroy();
  }
  
  ctrl.deleteList = function(product) {
    var idx = ctrl.item.indexOf(product);
    if (idx >= 0) {
      ctrl.item.splice(idx, 1);
    }
  };
}

angular.module('myApp').component('productList', {
  templateUrl: 'productList.html',
  controller: ProductListController,
  bindings: {
    item: '=?',
    list:'<'
  }
});
})(window.angular);
