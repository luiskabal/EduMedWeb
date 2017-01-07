/**
 * Created by pvill on 07-01-2017.
 */
(function() {
  'use strict';

  angular
    .module('eduMed')
    .factory('loginFactory', loginFactory);

  loginFactory.$inject = ['commonService'];
  function loginFactory(commonService) {

    return {
      login : login,
      suscribirse : suscribirse,
      recuperar: recuperar
    };

    function suscribirse(params){
      return commonService.post('signup/',params);
    }

    function login(user,password){
      return commonService.post('auth/',{
        "username": user,
        "password": password
      });
    }

    function recuperar(email){
      return commonService.getResource('recupera-clave?email='+email);
    }
  }
})();
