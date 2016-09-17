(function() {
    'use strict';

    angular
        .module('eduMed')
        .directive('routeCssClassnames', routeCssClassnames)
        .directive('goClick', goClick);

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

    goClick.$inject = ['$location'];
    function goClick($location) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
            var path;

            attrs.$observe( 'goClick', function (val) {
                path = val;
            });

            element.bind( 'click', function () {
                scope.$apply( function () {
                    $location.path( path );
                });
            });
        }
    }
    /* @ngInject */
    function ControllerController () {
        
    }



})();