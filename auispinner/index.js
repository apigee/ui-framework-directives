'use strict';

import angular from 'angular';

import AuiSpinnerTmpl from './template.html';

export default angular.module('apigee-ui-framework.spinner', [])
  .directive('auiSpinner', function() {
    return {
      restrict: 'E',
      scope: {
        size: '@'
      },
      template: AuiSpinnerTmpl
    };
  });
