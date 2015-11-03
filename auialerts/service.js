'use strict';

import _ from 'lodash';

export default class AuiAlertsService {
  constructor($timeout) {
    'ngInject';

    this.$timeout = $timeout;

    this.alerts = [];
    this.successTimeout = 1000 * 3;
  }

  add(alert) {
    const alertObj = {
      type: alert.type || 'info',
      message: alert.message,
      count: 1
    };

    var existing = _.find(this.alerts, {
      type: alertObj.type,
      message: alertObj.message
    });

    if (existing) {
      existing.count++;
    } else {
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
