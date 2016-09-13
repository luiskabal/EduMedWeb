(function() {
  'use strict';

  angular
    .module('eduMed')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.tabs = [{
            title: 'Nuevas Guías',
            url: 'nuevas'
        }, {
            title: 'Guías de Mi Interes',
            url: 'interes'
        }];

    vm.currentTab = 'nuevas';

    vm.onClickTab = function (tab) {
        vm.currentTab = tab.url;
    }
    
    vm.isActiveTab = function(tabUrl) {
        return tabUrl == vm.currentTab;
    }
  }
})();
