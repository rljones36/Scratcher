'use strict';

angular.module('scratcherUI')
.directive('buttonChoice', function() {
    return {
        scope: {
            label: '@',
            value: '=?',
            doAction:'&?'
        },
        templateUrl:'source/components/buttonChoice/buttonChoice.html',
        link: function(scope, element, attrs) {

            scope.callDoAction = function() {
                scope.doAction({value: scope.value});
            };
        }
    };
});