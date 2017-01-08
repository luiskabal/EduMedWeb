(function() {
'use strict';

  angular
    .module('eduMed')
    .controller('LearnController', LearnController);


  LearnController.$inject = ['$sce','$scope','$state','$stateParams','$rootScope','guidesFactory','commonService'];

  function LearnController($sce,$scope,$state,$stateParams,$rootScope,guidesFactory,commonService) {
    var vm = this;
    vm.guide = {};
    vm.relatedGuides = [];
    vm.API = null;
		vm.onPlayerReady = function(API) {
			console.log(API);
			vm.API = API;
		};

    vm.toContent = function(idGuide) {
      console.log('toContent: ' + idGuide);
      $state.go(
        'app.modulo',
        {
          id: idGuide
        }
      );
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
	$scope.$watch('learn.loadGuide',function () {

         var idGuide = $stateParams.id;
            loadGuide(idGuide);

    });
	vm.getImage = function(itemNuevo){
            itemNuevo = itemNuevo || vm.guide;
            return commonService.getFileUrl(itemNuevo.pathImgPreview);
        };
    vm.isComplete = function(itemNuevo){
            itemNuevo= itemNuevo|| vm.guide;
            return itemNuevo.avance && itemNuevo.avance.completado;

        };


    vm.onCompleteVideo = function() {
			console.log("on complete 1");


				//template: 'modules/modulos/templates/modal.html',

		};

	function loadGuide(idGuide){
            guidesFactory.getGuide(idGuide).then(
                function(guide){
                  	vm.guide = guide;
                	loadRelatedGuides(vm.guide.idEnfermedad);
                },
                function(e){
                    console.error(e);
                }
            );
        }

		vm.testRun = false;
		vm.starTest = function() {
			vm.testRun = true;
			vm.API.stop();
		}
		vm.okTest = function() {
			vm.testRun = false;
		}
  function loadRelatedGuides(idAffliction){
            guidesFactory.getRelatedGuides(idAffliction).then(
            	function(relatedGuides){
            		vm.relatedGuides =[];

                    if(relatedGuides.idGuide!=vm.guide.idGuide){
                    console.log(relatedGuides);
                      return vm.relatedGuides=relatedGuides;
                    }
                },
                function(e){
                    console.error(e);
                }
            );
        }
    }
})();
