(function() {
  'use strict';

  angular
    .module('eduMed')
    .controller('homeController', homeController);

  /** @ngInject */
  function homeController($log) {
    $log.log('home');
    var vm = this;
    vm.images = [{
        url: 'assets/img/carousel/carousel-05.jpg'
      }, {
        url: 'assets/img/carousel/carousel-02.jpg'
      }, {
        url: 'assets/img/carousel/carousel-03.jpg'
      }, {
        url: 'assets/img/carousel/carousel-04.jpg'
      }, {
        url: 'assets/img/carousel/carousel-05.jpg'
      }, {
        url: 'assets/img/carousel/carousel-06.jpg'
    }];
    
    
  }


})();