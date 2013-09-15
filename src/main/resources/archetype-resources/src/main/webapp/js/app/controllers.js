#set( $prefix=$className.toLowerCase())
#set( $symbol_dollar = '$' )
'use strict';

function ${className}ListController($scope, $location, ${className}) {
    $scope.${prefix}s = ${className}.query();
    $scope.goto${className}NewPage = function () {
    	${symbol_dollar}location.path("/${prefix}/new")
    };
    $scope.delete${className} = function (${prefix}) {
        ${prefix}.$delete({'id':${prefix}.id}, function () {
            $location.path('/');
        });
    };
}

function ${className}DetailController($scope, $routeParams, $location, ${className}) {
    $scope.${prefix} = ${className}.get({id:$routeParams.id}, function (${prefix}) {
    });
    $scope.goto${className}ListPage = function () {
        $location.path("/")
    };
}

function ${className}NewController($scope, $location, ${className}) {
    $scope.submit = function () {
    	${className}.save($scope.$prefix, function ($prefix) {
            $location.path('/');
        });
    };
    $scope.gotoTodoListPage = function () {
        $location.path("/")
    };
}
