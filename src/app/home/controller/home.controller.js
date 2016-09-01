(function() {
  'use strict';

  angular
    .module('eduMed')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log,parallaxHelper) {
    $log.log('home');
    var vm = this;
    vm.background = parallaxHelper.createAnimator(-0.8);
    vm.fadeIn = function(elementPosition) {
      $log.log(elementPosition);
      var factor = -0.90;
      var pos = (Math.max(elementPosition.elemY*factor, 0));
      var opacity = pos / 100;

      return {
        opacity: 1 - opacity,
      };
    }
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