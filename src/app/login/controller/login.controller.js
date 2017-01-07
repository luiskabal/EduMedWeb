(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$log','$state','$modal'];
    function LoginController($scope,$log,$state,$modal) {
        var vm = this;

        vm.login = function() {
            console.log(vm.user + ' '+ vm.password);
            //$state.go('dash.main');
        };


        var myOtherModal = $modal({ templateUrl: 'app/login/templates/modal-suscribete.html', show: false});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        $scope.showModal = function() {
            myOtherModal.$promise.then(myOtherModal.show);
        };
        $scope.hideModal = function() {
            $log.log('ocultar');
            myOtherModal.$promise.then(myOtherModal.hide);
        };

    }
})();

