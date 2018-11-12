(function(angular) {
  'use strict';
angular.module('myApp', ["ngRoute"])

.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/lists",{
        template: '<grocery-list></grocery-list>'
    });
});

})(window.angular);


