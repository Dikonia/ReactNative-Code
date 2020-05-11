'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import {
  WHITE,
  LIGHT_BLUE_TEXT_COLOR,
  APP_MAIN_BLUE_COLOR,
  DARK_GRAY,
} from '../constants/Colors';
import {
  NOTIFICATION_LAYOUT_RADIUS,
  NOTIFICATION_LAYOUT_PADDING,
  NOTIFICATION_LAYOUT_MARGIN_BOTTOM,
  NOTIFICATION_DATE_TEXT,
} from '../constants/Const';
import AvailableHoursPopup from '../popups/AvailableHoursPopup';
import BoldText from './BoldText';
import ButtonDefault from './ButtonDefault';

const ITEM_MARGIN = 18;

class NotificationDecisionTemplate extends PureComponent {
  state = {
    isShowAvailableHoursPopup: false,
  };

  showHoursPopup = () => {
    this.setState({isShowAvailableHoursPopup: true});
  };

  hideHoursPopup = () => {
    this.setState({isShowAvailableHoursPopup: false});
  };

  render() {
    const {notificationItem} = this.props;
    return (
      <View style={styles.parent}>
        <View style={styles.flexRow}>
          <Badge
            badgeStyle={[
              CommonStyles.badgeElement,
              CommonStyles.notificationBadgeLayout,
            ]}
          />
          <View>
            <BoldText style={CommonStyles.notificationTitleText}>
              {notificationItem.notificationTitle}
            </BoldText>
            <BoldText style={styles.dateText}>{notificationItem.date}</BoldText>
          </View>
        </View>
        <View style={styles.bottomLayout}>
          <BoldText style={styles.messageText}>
            {notificationItem.clickableText}
          </BoldText>
          <BoldText style={styles.messageInfoText}>
            {notificationItem.riskText}
          </BoldText>
          <View style={styles.buttonsParent}>
            <ButtonDefault
              textStyle={CommonStyles.yesNoBtnText}
              style={CommonStyles.buttonNo}>
              NO
            </ButtonDefault>
            <ButtonDefault
              onPress={this.showHoursPopup}
              textStyle={CommonStyles.yesNoBtnText}
              style={CommonStyles.buttonYes}>
              YES
            </ButtonDefault>
          </View>
        </View>
        <AvailableHoursPopup
          dismissDialog={this.hideHoursPopup}
          isVisible={this.state.isShowAvailableHoursPopup}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: WHITE,
    borderRadius: NOTIFICATION_LAYOUT_RADIUS,
    padding: NOTIFICATION_LAYOUT_PADDING,
    marginBottom: NOTIFICATION_LAYOUT_MARGIN_BOTTOM,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dateText: {
    fontSize: NOTIFICATION_DATE_TEXT,
    color: DARK_GRAY,
  },
  badgeLayout: {
    marginTop: 7,
  },
  messageText: {
    color: APP_MAIN_BLUE_COLOR,
    marginTop: ITEM_MARGIN,
    textAlign: 'center',
  },
  messageInfoText: {
    color: LIGHT_BLUE_TEXT_COLOR,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
  },
  bottomLayout: {
    marginLeft: ITEM_MARGIN,
    marginRight: ITEM_MARGIN,
  },
  buttonsParent: {
    flexDirection: 'row',
    marginTop: ITEM_MARGIN,
  },
});

export default NotificationDecisionTemplate;
