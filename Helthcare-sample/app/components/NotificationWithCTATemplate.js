'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, Image, Text} from 'react-native';
import {Card, Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import {
  APP_MAIN_COLOR,
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
import BoldText from './BoldText';
import {TEST2} from '../constants/Images';
import ButtonDefault from './ButtonDefault';
import ClickableText from './ClickableText';

const ITEM_MARGIN = 25;
const BUTTON_HEIGHT = 50;

class NotificationWithCTATemplate extends PureComponent {
  constructor (props) {
  super(props)
  this.state = {
  	  hideModal : false
  }
  }
  close = () => {
  	  this.setState({hideModal : true})
  }
  render() {
    const {notificationItem} = this.props;
    return (
	<View>
	{!this.state.hideModal ? 
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
        <Card containerStyle={styles.card}>
          <Image source={TEST2} style={styles.imageStyle} />
        </Card>
        <View style={styles.bottomLayout}>
          <ClickableText textStyle={styles.clickText}>
            {notificationItem.clickableText}
          </ClickableText>
          <BoldText style={styles.riskText}>
            {notificationItem.riskText}
          </BoldText>
          <ButtonDefault textStyle={styles.buttonText} style={styles.button} onPress={() => this.close()}>
            CLOSE
          </ButtonDefault>
        </View>
		</View>
	  : null}
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
  imageStyle: {
    width: '100%',
    height: 240,
    alignSelf: 'center',
  },
  dateText: {
    fontSize: NOTIFICATION_DATE_TEXT,
    color: DARK_GRAY,
  },
  card: {
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    shadowColor: APP_MAIN_COLOR,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  clickText: {
    color: APP_MAIN_BLUE_COLOR,
    marginTop: ITEM_MARGIN,
    textAlign: 'center',
  },
  riskText: {
    color: LIGHT_BLUE_TEXT_COLOR,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
  },
  bottomLayout: {
    marginLeft: ITEM_MARGIN,
    marginRight: ITEM_MARGIN,
  },
  button: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    alignSelf: 'center',
    margin: ITEM_MARGIN,
    backgroundColor: APP_MAIN_BLUE_COLOR,
  },
  buttonText: {
    color: WHITE,
  },
});

export default NotificationWithCTATemplate;
