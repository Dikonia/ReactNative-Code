'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import {WHITE} from '../constants/Colors';
import {
  NOTIFICATION_LAYOUT_RADIUS,
  NOTIFICATION_LAYOUT_PADDING,
  NOTIFICATION_LAYOUT_MARGIN_BOTTOM,
} from '../constants/Const';
import BoldText from './BoldText';

class NotificationTextTemplate extends PureComponent {
  render() {
    const {notificationItem} = this.props;
    return (
      <TouchableOpacity style={styles.flexRow}>
        <Badge
          badgeStyle={[
            CommonStyles.badgeElement,
            CommonStyles.notificationBadgeLayout,
          ]}
        />
        <BoldText style={CommonStyles.notificationTitleText}>
          {notificationItem.notificationTitle}
        </BoldText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: WHITE,
    minHeight: 50,
    borderRadius: NOTIFICATION_LAYOUT_RADIUS,
    padding: NOTIFICATION_LAYOUT_PADDING,
    marginBottom: NOTIFICATION_LAYOUT_MARGIN_BOTTOM,
  },
});

export default NotificationTextTemplate;
