#set( $prefix=$className.toLowerCase())
#set( $symbol_dollar = '$' )
'use strict';

angular.module('${prefix}Service', ['ngResource']).
        factory('${className}', function ($resource) {
            return ${symbol_dollar}resource('rest/${prefix}/:id', {}, {
                'save': {method:'PUT'}
            });
        });
