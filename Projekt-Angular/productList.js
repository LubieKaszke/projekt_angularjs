(function(angular) {
  'use strict';
function ProductListController($scope, $element, $attrs) {
  var ctrl = this;


  ctrl.updateProduct = function(product, prop, value) {
    product[prop] = value;
  };

  ctrl.deleteList = function(product) {
    var idx = ctrl.item.products.indexOf(product);
    if (idx >= 0) {
      ctrl.item.splice(idx, 1);
    }
  };
}

angular.module('myApp').component('productList', {
  templateUrl: 'productList.html',
  controller: ProductListController,
  bindings: {
    item: '='
  }
});
})(window.angular);
