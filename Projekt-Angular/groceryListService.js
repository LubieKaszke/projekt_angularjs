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
	
	factory.postObject = function (success, fail, object) {
        $http.post(apiUrl + "/addList", object).then(
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

        factory.postProduct= function (success, fail, object) {
        $http.post(apiUrl + "/addListProduct", object).then(
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

    factory.deleteObject = function(success,fail,object){
        $http.delete(apiUrl +"/deleteList/" + object).then(
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

    factory.deleteObjectProduct = function(success,fail,listIdx,productIdx){
        $http.delete(apiUrl +"/deleteListProduct?listIndex=" + listIdx + "&productIndex=" + productIdx).then(
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

    factory.editObjectDesc = function(success,fail,object) {
        $http.post(apiUrl + "/editListProduct", object).then(
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
    }
	
	return factory;
}])
})(window.angular);
