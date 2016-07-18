(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('loginController', loginController);

    loginController.$inject = ['$log'];
    function loginController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();