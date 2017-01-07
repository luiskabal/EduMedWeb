/**
 * Created by pvill on 07-01-2017.
 */
(function() {
  'use strict';

  angular
    .module('eduMed')
    .factory('storageService', storageService);

  storageService.$inject = ['$window'];
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
})();
