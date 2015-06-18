'use strict';

import _ from 'lodash';

export default class AuiAlertsService {
  /** @ngInject */
  constructor($timeout) {
    this.$timeout = $timeout;

    this.alerts = [];
    this.successTimeout = 1000 * 3;
  }

  add(alert) {
    var existing = _.find(this.alerts, { type: alert.type, msg: alert.msg });

    if (existing) {
      existing.count++;
    } else {
      var self = this;

      var alertObj = {
        type: alert.type,
        msg: alert.msg,
        count: 1
      };
      alertObj.close = () => {
        this.remove(alertObj);
      };

      if (alert.type === 'success') {
        this.$timeout(alertObj.close, this.successTimeout);
      }

      this.alerts.push(alertObj);
    }
  }

  remove(alert) {
    this.removeAt(this.alerts.indexOf(alert));
  }

  removeAt(index) {
    this.alerts.splice(index, 1);
  }
}
