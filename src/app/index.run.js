(function() {
  'use strict';

  angular
    .module('eduMed')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
