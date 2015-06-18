'use strict';

import angular from 'angular';

import auispinner from 'ui-framework-directives/auispinner';

import AuiSpinnerOverlayTmpl from './template.html';

export default angular.module('apigee-ui-framework.spinner-overlay', [
  auispinner.name
])
  .directive('auiSpinnerOverlay', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        active: '=',
        spinnerSize: '@'
      },
      template: AuiSpinnerOverlayTmpl
    };
  });
