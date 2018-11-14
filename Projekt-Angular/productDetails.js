(function(angular) {
  'use strict';
function ProductDetailController($element, $scope, groceryListService) {
  var ctrl = this;

  ctrl.delete = function() {
    var listIndex = ctrl.list.indexOf(ctrl.item);
    var productIndex = ctrl.item.products.indexOf(ctrl.product);
    groceryListService.deleteObjectProduct(
                        function(){
                          ctrl.refresh();
                        },
                        function(){

                        },
              listIndex,
              productIndex);
    
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({product: ctrl.product, prop: prop, value: value});
  };
}

angular.module('myApp').component('productDetails', {
  templateUrl: 'productDetails.html',
  controller: ProductDetailController,
  bindings: {
    product: '=',
    onDelete: '&',
    onUpdate: '&',
    list: '<',
    item: '<',
    refresh: '='
  }
});
})(window.angular);