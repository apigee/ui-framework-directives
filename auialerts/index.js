'use strict';

import angular from 'angular';
import angularBootstrap from 'angular-bootstrap';

import AuiAlertsCtrl from './controller';
import AuiAlertsService from './service';
import AuiAlertsTmpl from './template.html';

export default angular.module('apigee-ui-framework.alerts', [
  angularBootstrap
])
  .directive('auiAlerts', function() {
    return {
      restrict: 'E',
      scope: {},
      template: AuiAlertsTmpl,
      controller: 'AuiAlertsCtrl as vm'
    };
  })
  .controller('AuiAlertsCtrl', AuiAlertsCtrl)
  .service('auiAlerts', AuiAlertsService);
