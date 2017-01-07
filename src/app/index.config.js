(function() {
  'use strict';

  angular
    .module('eduMed')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $modalProvider,$httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    angular.extend($modalProvider.defaults, {
      html: true,
      animation: 'am-fade-and-scale',
      placement: 'center',
      backdrop: 'static'
    });

    $httpProvider.interceptors.push(function(storageService,URL_API){
        //var hashPaciente = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkcmd1dGllcnJlekBvdXRsb29rLmNsIiwidXNlcm5hbWUiOiJkcmd1dGllcnJlekBvdXRsb29rLmNsIiwicm9sZXMiOiJST0xFX1BBQ0lFTlRFIn0.F_-2TIPu9c8qnDY6h4qRZgfb7s4RJJokJ5rKFFBCRgDW4bX-74IZmX-v7uMtZzqfSZG1rn7pYpRPVHJJsIDhtQ';
        //var hashDoctor = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5uaWVsZ3V0aWVycmV6OTBAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYW5uaWVsZ3V0aWVycmV6OTBAZ21haWwuY29tIiwicm9sZXMiOiJST0xFX0RPQ1RPUiJ9.wf9WBtL1F3KGIZHrpSRvQHnzARMsA_zczmol8DFA3QyAX2VzLql3_OKdgZhTpi21c1UjEWKx6ZWWt-ERWYKsZw';
        return {
          request: function(req) {
            //req.headers['X-Auth'] = hashDoctor;
            var url = URL_API + 'auth/';
            console.log(url);
            console.log(req.url);
            if(req.url === url) {
              console.log("login!!!");
              return req;
            }else{
              req.headers['X-Auth'] = storageService.getToken();
              return req;
            }
          },
          response: function(res){
            return res;
          }
        };
      }
    );

  }

})();
