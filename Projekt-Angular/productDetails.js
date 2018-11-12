(function(angular) {
  'use strict';
function ProductDetailController($element, $scope) {
  var ctrl = this;

  ctrl.delete = function() {
	  $element.remove();
	  $scope.$destroy();
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
    onUpdate: '&'
  }
});
})(window.angular);