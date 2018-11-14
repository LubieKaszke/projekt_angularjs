(function(angular) {
  'use strict';
function ProductListController(groceryListService) {
  var ctrl = this;


  ctrl.updateProduct = function(product, prop, value) {
    var updateObject = {listIndex: "", prodIndex: "", value: ""}
    updateObject.listIndex = ctrl.list.indexOf(ctrl.item);
    updateObject.prodIndex = ctrl.item.products.indexOf(product);
    updateObject.value = value;
    product[prop] = value;
    groceryListService.editObjectDesc(
                        function(){
                          ctrl.refresh();
                        },
                        function(){

                        },
              JSON.stringify(updateObject));
    
  };
  
  ctrl.delete = function() {
    var idx = ctrl.list.indexOf(ctrl.item);
    groceryListService.deleteObject(
                        function(){
                          ctrl.refresh();
                        },
                        function(){

                        },
              idx);
  }
}

angular.module('myApp').component('productList', {
  templateUrl: 'productList.html',
  controller: ProductListController,
  bindings: {
    item: '=?',
    list:'<',
    refresh: '='
  }
});
})(window.angular);
