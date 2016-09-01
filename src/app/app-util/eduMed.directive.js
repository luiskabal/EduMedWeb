(function() {
    'use strict';

    angular
        .module('eduMed')
        .directive('routeCssClassnames', routeCssClassnames);

    routeCssClassnames.$inject = ['$rootScope','$log'];
    function routeCssClassnames($rootScope,$log) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: routeCssClassnamesController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, elem) {
            $log.log('funca');
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
                var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                // don't do anything if they are the same
                if (fromClassnames != toClassnames) {
                    if (fromClassnames) {
                        elem.removeClass(fromClassnames);
                    }

                    if (toClassnames) {
                        elem.addClass(toClassnames);
                    }
                }
            });
        }
    }
    /* @ngInject */
    function routeCssClassnamesController () {
        
    }
})();