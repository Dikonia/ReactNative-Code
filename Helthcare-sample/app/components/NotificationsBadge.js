import React, {PureComponent} from 'react';
// import { PushNotificationIOS } from "react-native"; // eslint-disable-line
import {View, Platform} from 'react-native';
import {Badge} from 'react-native-elements';
import {NOTIFICATION_COUNT_BG_COLOR, WHITE} from '../constants/Colors';

const BADGE_WIDTH_HEIGHT = 20;

export class NotificationsBadge extends PureComponent {
  state = {
    count: 0,
  };

  componentDidMount = () => {
    this.updateCount();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {unreadTotalCount} = this.props;

    if (unreadTotalCount !== prevProps.unreadTotalCount) {
      this.updateCount();
    }
  };

  updateCount = () => {
    const {unreadTotalCount} = this.props;
    if (Platform.OS === 'ios') {
      // PushNotificationIOS.setApplicationIconBadgeNumber(unreadTotalCount);
    }

    this.setState({count: unreadTotalCount});
  };

  render() {
    const {count} = this.state;
    const {icon} = this.props;

    return count > 0 ? (
      <View>
        <View>{icon}</View>
        <Badge
          value={count}
          containerStyle={styles.badgeContainer}
          badgeStyle={styles.badgeElement}
          textStyle={styles.badgeContent}
        />
      </View>
    ) : (
      icon
    );
  }
}

const styles = {
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -8,
    flex: 1,
    backgroundColor: 'transparent',
  },
  badgeElement: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: NOTIFICATION_COUNT_BG_COLOR,
    borderWidth: 0,
    width: BADGE_WIDTH_HEIGHT,
    height: BADGE_WIDTH_HEIGHT,
    borderRadius: BADGE_WIDTH_HEIGHT / 2,
  },
  badgeContent: {
    color: WHITE,
    fontSize: 10,
    fontWeight: 'bold',
  },
};

export default NotificationsBadge;
