#set( $prefix=$className.toLowerCase())
'use strict';

angular.module('${prefix}App', ['${prefix}Service']).
        config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
            when('/${prefix}/list', {templateUrl:'views/${prefix}-list.html', controller:${className}ListController}).
            when('/${prefix}/new', {templateUrl:'views/${prefix}-new.html', controller:${className}NewController}).
            when('/${prefix}/:id', {templateUrl:'views/${prefix}-detail.html', controller:${className}DetailController}).
            otherwise({redirectTo:'/${prefix}/list'});
}]);
