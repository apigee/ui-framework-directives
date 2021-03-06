'use strict';

import _ from 'lodash';

export default class AuiAlertsCtrl {
  constructor(auiAlerts) {
    'ngInject';

    this.auiAlerts = auiAlerts;

    this.isCollapsed = true;
  }

  get messages() {
    return _.pluck(this.auiAlerts.alerts, 'message');
  }

  get severestAlertType() {
    var types = ['danger', 'warning', 'info', 'success'];

    const type = _.chain(this.auiAlerts.alerts)
      .pluck('type')
      .uniq()
      .sortBy(val => {
        var index = types.indexOf(val);
        if (index === -1) {
          index = 1; //warning
        }
        return index;
      })
      .first()
      .value() || 'info';

    return `alert-${type}`;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
