(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log','$state'];
    function LoginController($log,$state) {
        var vm = this;

        vm.goDash = function() {
            $state.go('dash.main');
        }
        

        activate();

        ////////////////

        function activate() { }
    }
})();