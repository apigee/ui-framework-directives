'use strict';

import angular from 'angular';

import AuiStatusTmpl from './template.html';

export default angular.module('apigee-ui-framework.status', [])
  .directive('auiStatus', function() {
    return {
      restrict: 'E',
      scope: {
        status: '@'
      },
      template: AuiStatusTmpl
    };
  });
