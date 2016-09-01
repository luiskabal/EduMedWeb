(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('ElementsController', ElementsController);

    ElementsController.$inject = ['$log'];
    function ElementsController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();