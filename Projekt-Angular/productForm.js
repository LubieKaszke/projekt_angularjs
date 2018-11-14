(function(angular) {
  'use strict';
function ProductFormController(groceryListService) {
  var ctrl=this;
  
  ctrl.postProduct = {listIndex:"",name:"", desc: "",done:false };
  
  ctrl.submitProduct = function() {
    console.log(ctrl.name + ctrl.desc);
    var idx =ctrl.list.indexOf(ctrl.item);
	  ctrl.postProduct.name = ctrl.name;
	  ctrl.postProduct.desc = ctrl.desc;
    ctrl.postProduct.listIndex = idx;
	  groceryListService.postProduct(
                    function () {   
                      ctrl.refresh();
                    },
                    function () {
                    },
                    JSON.stringify(ctrl.postProduct));
  }

          ctrl.$onInit = function () {
                ctrl.postProduct = {listIndex:"", name:"", desc: "",done:false };

        };
}


angular.module('myApp').component('productForm', {
  templateUrl: 'productForm.html',
  controller: ProductFormController,
      bindings: {
        name: '=?',
        desc: '=?',
        item: '=?',
        list: '=?',
        refresh: '='
    }
});
})(window.angular);