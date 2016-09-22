(function() {
  'use strict';

  angular
    .module('eduMed')
    .factory('guidesFactory', guidesFactory);

  guidesFactory.$inject = ['commonService','CANT_GUIDES_HOME'];
  function guidesFactory(commonService,CANT_GUIDES_HOME) {

    return {
      getGuide : getGuide,
      getNewGuides : getNewGuides,
      getGuidesOfInterest : getGuidesOfInterest,
      getRelatedGuides : getRelatedGuides
    };

    function getNewGuides(){
      return commonService.getResource('guia?latest=' + CANT_GUIDES_HOME);
    }

    function getGuidesOfInterest(){
      return commonService.getResource('guia');
    }

    function getGuide(idGuide){
      return commonService.getResource('guia/'+idGuide);
    }

    function getRelatedGuides(idAffliction){
      return commonService.getResource('guia?idEnfermedad='+idAffliction);
    }




  }
})();
/**
 * Created by pvill on 22-09-2016.
 */
