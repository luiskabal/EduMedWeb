(function() {
'use strict';

    angular
        .module('eduMed')
        .controller('LoginController', LoginController)
        .controller('RegistrarController',RegistrarController);


    LoginController.$inject = ['$scope','$log','$state','$modal','loginFactory','commonService','$rootScope','storageService','profileFactory','validateService'];
    RegistrarController.$inject =['$scope','$log','loginFactory','$rootScope','commonService','$filter','utilsFactory','$window','$timeout'];
    function LoginController($scope,$log,$state,$modal,loginFactory,commonService,$rootScope,storageService,profileFactory,validateService) {
        var vm = this;
        vm.errorLogin = false;

        validateService.isValid();

        $scope.$watchGroup(['login.password','login.user'], function() {
          if(vm.errorLogin) {
            vm.errorLogin = false;
          }
        });

        vm.login = function() {
          //console.log(vm.user + ' '+ vm.password);
          vm.errorLogin = false;
          //showLoading();
          var response = loginFactory.login(vm.user,vm.password);
          response.then(
            function(data){
              $rootScope.perfil = data.perfilUsuario;
              $rootScope.perfil.avatarPerfil = commonService.getFileUrl(data.avatar);
              storageService.setToken(data.tokenSesion);
              //storageService.setAvatar($rootScope.perfil.avatarPerfil);
              //hideLoading();
              $state.go('dash.main');
            },
            function(e){
              vm.errorLogin = true;
              //hideLoading();
              console.log(e);
            }
          );
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
    function RegistrarController($scope,$log,loginFactory,$rootScope,commonService,$filter,utilsFactory,$window,$timeout ){
    var vm = this;

    console.log($rootScope.registro);
    vm.instituciones = [];

    var traeInstituciones = utilsFactory.getInstituciones();
    traeInstituciones.then(
      function(data){
        vm.instituciones = data._embedded.institucions;
        console.log(vm.instituciones);
      },
      function(e){
        console.error(e);
      }
    );

    var traeIsapres = utilsFactory.getIsapres();
    traeIsapres.then(
      function(data){
        vm.isapres = data._embedded.isapres;
        console.log(vm.isapres);
      },
      function(e){
        console.error(e);
      }
    );

    vm.generos= [{
      "id" : "MASCULINO",
      "nombre": "Masculino"
    },{
      "id" : "FEMENINO",
      "nombre": "Femenino"
    }];

    vm.enviarRegistro = function(){
      $rootScope.registro = {};
      $rootScope.registro.nombre = vm.nombre;
      $rootScope.registro.email = vm.email;
      $rootScope.registro.password = vm.password;
      $rootScope.registro.fechaNacimiento = $filter('date')(vm.fechaNacimiento, 'yyyy-MM-dd')+'T00:00:00.000Z';
      $rootScope.registro.genero = vm.genero.id;
      $rootScope.registro.idInstitucion = vm.institucion.id;
      $rootScope.registro.codigoAcceso = vm.codigoAcceso;
      $rootScope.registro.tipoUsuario = 'ROLE_PACIENTE';
      $rootScope.registro.especialidad = " ";
      $rootScope.registro.intereses = [];
      $rootScope.registro.isapre = vm.isapre.id;

      console.log($filter('json')($rootScope.registro));
      var registrar = loginFactory.suscribirse($rootScope.registro);
      registrar.then(
        function(data){
          $timeout(function() {
            angular.element('#botonCerrar').triggerHandler('click');
          });
        },
        function(e){
          $window.alert("Código no válido");
        }
      );
    };
  }
})();

