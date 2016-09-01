(function() {
'use strict';

  angular
    .module('eduMed')
    .controller('PatientsController', PatientsController);

  PatientsController.$inject = ['$log'];
  function PatientsController($log) {
    var vm = this;
    
    vm.showDetail = function (u) {
      $log.log(u);
      vm.active = u;
    };

    vm.users = [
      {
        avatar:"pathAvatar",
        email:"drgutierrez@outlook.cl",
        fechaNacimiento:"1990-12-19",
        genero:"MASCULINO",
        id:"578158a876b0bf7d7cba1ca0",
        idDoctor:"57815f9503641334c0b546a6",
        idInstitucion:"578158e90364f631191afbe3",
        institucion:"Clinica del Dr Guti",
        isapre:"Cruz Blanca",
        nombre:"Dagoberto",
        tipoUsuario:"ROLE_PACIENTE"
      },
      {
        avatar:"pathAvatar",
        email:"dxnni@live.cl",
        fechaNacimiento:"1990-12-19",
        genero:"MASCULINO",
        id:"578163a876b0bf7d7cba1ca0",
        idDoctor:"57815f9503641334c0b546a6",
        idInstitucion:"578158e90364f631191afbe3",
        institucion:"Clinica Alemana",
        isapre:"Cruz Blanca",
        nombre:"demian",
        tipoUsuario:"ROLE_PACIENTE"
      }
    ]
    

   
   
  }
})();

