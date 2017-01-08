(function() {
'use strict';

  angular
    .module('eduMed')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$state','storageService'];
  function DashboardController($state,storageService) {
    var vm = this;
    vm.goInicio = function(){
      $state.go('dash.main');
    };

    vm.cerrarSesion = function(){
      storageService.setToken("");
      $state.go('login');
    }
  }
})();
