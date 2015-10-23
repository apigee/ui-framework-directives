'use strict';

import _ from 'lodash';

export default class AuiAlertsCtrl {
  /** @ngInject */
  constructor(auiAlerts) {
    this.auiAlerts = auiAlerts;
  }
  messages() {
    return _.pluck(this.auiAlerts.alerts, 'msg');
  }
  severestAlertType() {
    var types = ['danger', 'warning', 'info', 'success'];
    return 'alert-' + _.chain(this.auiAlerts.alerts).pluck('type').uniq().sortBy(function(val) {
      var index = types.indexOf(val);
      if (index === -1) {
        index = 1; //warning
      }
      return index;
    }).first().value();
  }
}
