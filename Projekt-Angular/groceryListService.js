(function(angular) {
  'use strict';
angular.module('myApp').factory('groceryListService', ['$http', '$log', function ($http, $log) {
  var factory = {};

  var apiUrl = "http://127.0.0.1:8081"
  
    factory.getAllLists = function (success, fail) {
        $http.get(apiUrl + "/list").then(
            function (response) {
                $log.log(response);

                if (success)
                    success(response.data);
            },
            function (response) {
                $log.log(response);

                if (fail)
                    fail(response);
            }
        );
    };
	
	return factory;
}])
})(window.angular);
