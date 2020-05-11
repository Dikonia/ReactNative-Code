import React, {PureComponent} from 'react';
import NotificationsBadge from './NotificationsBadge';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Image from 'react-native-fast-image';
import {
  HOME_ACTIVE,
  HOME_INACTIVE,
  CALENDAR_ACTIVE,
  CALENDAR_INACTIVE,
  NOTIFICATION_ACTIVE,
  NOTIFICATION_INACTIVE,
  GROUP_ACTIVE,
  GROUP_INACTIVE,
} from '../constants/Images';

const DEFAULT_IMAGE_SIZE = 30;

const ICON_STATES = {
  default: 'default',
  highlighted: 'highlighted',
  active: 'active',
  activeHighlighted: 'activeHighlighted',
};

const NAV_ICONS = {
  Home: {
    default: HOME_INACTIVE,
    active: HOME_ACTIVE,
  },
  Calendar: {
    default: CALENDAR_INACTIVE,
    active: CALENDAR_ACTIVE,
  },
  Notification: {
    default: NOTIFICATION_INACTIVE,
    active: NOTIFICATION_ACTIVE,
  },
  Group: {
    default: GROUP_INACTIVE,
    active: GROUP_ACTIVE,
  },
};

export class NavigationButton extends PureComponent {
  getImages = () => {
    return NAV_ICONS;
  };

  render() {
    const {type, focused, horizontal} = this.props;
    const images = this.getImages();
    const imageVariant = focused ? ICON_STATES.active : ICON_STATES.default;
    const icon = images[type][imageVariant];
    const scale = horizontal ? 0.8 : 1;
    const imageSize = DEFAULT_IMAGE_SIZE * scale;
    const imageStyle = {
      height: imageSize,
      width: imageSize,
      marginBottom: isIphoneX() ? -15 : 0,
    };

    return (
      <NotificationsBadge
        type={type}
        size={imageSize * 0.6}
        icon={<Image source={icon} style={imageStyle} />}
      />
    );
  }
}

export default NavigationButton;
