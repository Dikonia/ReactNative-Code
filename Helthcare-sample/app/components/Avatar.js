import React, {PureComponent} from 'react';
import {StyleSheet, Image} from 'react-native';
import {WHITE} from '../constants/Colors';
import {DEFAULT_PROFILE} from '../constants/Images';

const AVATAR_SIZE = 70;

export default class Avatar extends PureComponent {
  static defaultProps = {
    avatar: null,
    size: AVATAR_SIZE,
  };

  getCirceStyle = (size, rounded = true) => ({
    borderRadius: rounded ? size / 2 : 0,
    height: size,
    width: size,
  });

  render() {
    const {avatar, size} = this.props;
    const avatarSize = this.getCirceStyle(size);
    const avatarStyle = {...styles.avatarImage, ...avatarSize};
    let avatarSource = DEFAULT_PROFILE;
    if (avatar) {
      avatarSource = {uri: avatar};
    }
    return <Image style={avatarStyle} source={avatarSource} />;
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    alignItems: 'center',
    flex: 0,
    borderWidth: 1,
    borderColor: WHITE,
  },
});
