(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('elementsController', elementsController);

    elementsController.$inject = ['$log'];
    function elementsController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();