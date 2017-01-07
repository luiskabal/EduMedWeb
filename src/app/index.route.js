(function() {
  'use strict';

  angular
    .module('eduMed')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      /*.state('home', {
        url: '/',
        templateUrl: 'app/home/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        data : {
          cssClassnames : 'home'
        }
      })*/
      .state('elements', {
        url: '/elements',
        templateUrl: 'app/elements/templates/elements.html',
        controller: 'ElementsController',
        controllerAs: 'elements'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/templates/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        data : {
          cssClassnames : 'auth'
        }
      })
      //dashView
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dashboard/templates/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dash',
        abstract: true
      })
      .state('dash.main', {
        url: '/main',
        views: {
          'dashView': {
            templateUrl: 'app/main/templates/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('dash.learn', {
        url: '/aprender/:id',
        views: {
          'dashView': {
            templateUrl: 'app/modules/templates/learn.html',
            controller: 'LearnController',
            controllerAs: 'learn'
          }
        }
      })
      .state('dash.video', {
        url: '/video',
        views: {
          'dashView': {
            templateUrl: 'app/modules/templates/video.html',
            controller: 'LearnController',
            controllerAs: 'learn'
          }
        }
      })
      .state('dash.user', {
        url: '/user',
        views: {
          'dashView': {
            templateUrl: 'app/user/templates/user.html',
            controller: 'UserController',
            controllerAs: 'user'
          }
        }
      })
      .state('dash.patients-list', {
        url: '/patients-list',
        views: {
          'dashView': {
            templateUrl: 'app/patients/templates/patients-list.html',
            controller: 'PatientsController',
            controllerAs: 'patients'
          }
        }
      })
      .state('dash.patient', {
        url: '/patient',
        views: {
          'dashView': {
            templateUrl: 'app/patients/templates/patient.html',
            controller: 'PatientsController',
            controllerAs: 'patients'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
