(function() {
  'use strict';

  angular
    .module('eduMed')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/templates/home.html',
        controller: 'homeController',
        controllerAs: 'home',
        data : {
          cssClassnames : 'home'
        }
      })
      .state('elements', {
        url: '/elements',
        templateUrl: 'app/elements/templates/elements.html',
        controller: 'elementsController',
        controllerAs: 'elements'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/templates/login.html',
        controller: 'loginController',
        controllerAs: 'login',
        data : {
          cssClassnames : 'auth'
        }
      })
      //dashView
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dashboard/templates/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dash',
        abstract: true
      })
      .state('dash.main', {
        url: '/main',
        views: {
          'dashView': {
            templateUrl: 'app/main/templates/main.html',
            controller: 'mainController',
            controllerAs: 'main'
          }
        }
      })
      .state('dash.learn', {
        url: '/aprender',
        views: {
          'dashView': {
            templateUrl: 'app/modules/templates/learn.html',
            controller: 'learnController',
            controllerAs: 'learn'
          }
        }
      })
      .state('dash.video', {
        url: '/video',
        views: {
          'dashView': {
            templateUrl: 'app/modules/templates/video.html',
            controller: 'learnController',
            controllerAs: 'learn'
          }
        }
      })
      .state('dash.user', {
        url: '/user',
        views: {
          'dashView': {
            templateUrl: 'app/user/templates/user.html',
            controller: 'userController',
            controllerAs: 'user'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
