(function(angular) {
  'use strict';
var app=angular.module('myApp', ["ngRoute"])

.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/lists",{
        template: '<grocery-list></grocery-list>'
    })
       .when("/add",{
        template: '<grocery-list-form></grocery-list-form>'
    });

app.directive('validation', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function validate(value) {
                if (value.match("^[a-zA-Z]+$")) {
                    mCtrl.$setValidity('isText', true);
                } else {
                    mCtrl.$setValidity('isText', false);
                }
                return value;
            }
            mCtrl.$parsers.push(validate);
        }
    };
});

});

})(window.angular);


