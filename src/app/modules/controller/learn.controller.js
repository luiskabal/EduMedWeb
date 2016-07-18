(function() {
'use strict';

  angular
    .module('eduMed')
    .controller('learnController', learnController);

  learnController.$inject = ['$sce'];
  function learnController($sce) {
    var vm = this;
    
    vm.API = null;
		vm.onPlayerReady = function(API) {
			console.log(API);
			vm.API = API;
		};
 

		vm.config = {
			
            preload: "none",
            sources: [
                {src: $sce.trustAsResourceUrl("assets/video/La_artritis_psoriasica.mp4"), type: "video/mp4"}
            ],
            //theme: {
            //    url: "lib/videogular-themes-default/videogular.css"
            //},
            plugins: {
         		poster: "assets/video/La_artritis_psoriasica.jpg"
            }
           
		};
		
		vm.testRun = false;
		vm.starTest = function() {
			vm.testRun = true;
			vm.API.stop();
		}
		vm.okTest = function() {
			vm.testRun = false;
		}

    
  }
})();