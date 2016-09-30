(function() {
  'use strict';

  angular
    .module('eduMed')
    .controller('MainController', MainController);
    MainController.$inject=['$scope','$state','guidesFactory','commonService']
  /** @ngInject */
  function MainController($scope,$state,guidesFactory,commonService) {

    var vm = this;
    vm.newGuides=[];
    vm.guidesOfInterest=[];
    vm.tabs = [{
            title: 'Nuevas Guías',
            url: 'nuevas'
        }, {
            title: 'Guías de Mi Interes',
            url: 'interes'
        }];

    vm.currentTab = 'nuevas';

    $scope.$watch('main.currentTab',function () {
   
      loadGuides(vm.currentTab);
    });

    loadGuides(vm.currentTab);

    vm.onClickTab = function (tab) {
        vm.currentTab = tab.url;
    }
    
    vm.isActiveTab = function(tabUrl) {
        return tabUrl == vm.currentTab;
    }

    vm.isComplete = function(guide){
            return guide.avance && guide.avance.completado;
        }
    vm.getImage = function(guide){
            return commonService.getFileUrl(guide.pathImgPreview);
        }
    vm.toLearn = function(idGuide) {
         console.log(idGuide);
            console.log('CULPS OF ETERNITY');
           $state.go(
                'dash.learn',
                {
                    id: idGuide
                }
            );
        };
  function loadGuides(current){
      var response = current ==='nuevas' ? guidesFactory.getNewGuides(): guidesFactory.getGuidesOfInterest() ;
      response.then(
        function(data){
              if(current=='nuevas'){
                vm.newGuides=[];
                vm.newGuides=data;
              }else{
                 vm.guidesOfInterest=[];
                 vm.guidesOfInterest=data;
              }
            },
            function(e){
              console.error(e);
            }
        );
    }
    vm.searchGuides = function (){
console.log(vm.currentTab);
console.log(vm.textoBuscar);
//recorrer cada guia y recorrer sus tags

    }

  }
})();
