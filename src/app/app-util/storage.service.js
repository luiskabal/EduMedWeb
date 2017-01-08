/**
 * Created by pvill on 07-01-2017.
 */
(function() {
  'use strict';

  angular
    .module('eduMed')
    .factory('storageService', storageService)
    .service('validateService',validateService);

  storageService.$inject = ['$window'];
  validateService.$inject = ['storageService','$state','profileFactory','commonService','$rootScope'];
  function storageService($window) {

    return {
      getToken : getToken,
      setToken : setToken,
      setAvatar :setAvatar,
      getAvatar :getAvatar
    };

    function setAvatar(avatar){
      $window.localStorage['avatar'] = avatar;
      return true
    }

    function getAvatar(){
      return $window.localStorage['avatar'];
    }


    function getToken(){
      return $window.localStorage['token'];
    }

    function setToken(token){
      $window.localStorage['token'] = token;
      return true
    }
  }

  function validateService(storageService,$state,profileFactory,commonService,$rootScope){
    return {
      isValid : isValid
    };

    function isValid(){
      if (!angular.isUndefined(storageService.getToken())) {
        //showLoading();
        var callPerfil = profileFactory.getProfile();
        callPerfil.then(
          function (data) {
            $rootScope.perfil = data;
            if (!angular.isUndefined(storageService.getAvatar())) {
              $rootScope.perfil.avatarPerfil = storageService.getAvatar();
            }else {
              $rootScope.perfil.avatarPerfil = commonService.getFileUrl(data.avatar);
            }
            //hideLoading();
            //if($state.current.name);
            if($state.current.name == 'login'){
              $state.go('dash.main');
            }
          },
          function (e) {
            //hideLoading()
            console.log(e);
          }
        )
      }else{
        if($state.current.name !== 'login'){
          $state.go('login');
        }
      }
    }
  }
})();
