'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import BoldText from './BoldText';
import Loading from './Loading';
import {
  WHITE,
  APP_MAIN_COLOR,
  APP_MAIN_COLOR_DISABLE,
} from '../constants/Colors';
const BUTTON_HEIGHT = 35;
const BUTTON_RADIUS = 15;
const BUTTON_TEXT_SIZE = 14;

class ButtonWithImage extends PureComponent {
  static defaultProps = {
    isShowLoading: false,
    disable: false,
    isShowDialer: false,
  };
  render() {
    const {
      isShowLoading,
      disable,
      isShowRightIcon,
      rightImage,
      rightImageStyle,
    } = this.props;
    let isDisable = isShowLoading || disable;
    let buttonMainStyle = styles.buttonActiveStyle;
    if (isDisable) {
      buttonMainStyle = styles.buttonDisableStyle;
    }
    return (
      <TouchableOpacity
        disabled={isDisable}
        {...this.props}
        style={[buttonMainStyle, this.props.style]}>
        <View style={styles.viewStyle}>
          <BoldText style={[styles.textStyle, this.props.textStyle]}>
            {this.props.children}
          </BoldText>
          {isShowRightIcon && (
            <Image
              source={rightImage}
              style={[styles.buttonImage, rightImageStyle]}
            />
          )}
          {isShowLoading && (
            <Loading indicatorColor={APP_MAIN_COLOR} style={styles.loading} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonActiveStyle: {
    justifyContent: 'center',
    backgroundColor: APP_MAIN_COLOR,
    borderRadius: BUTTON_RADIUS,
    flex: 1,
    height: BUTTON_HEIGHT,
    shadowColor: APP_MAIN_COLOR,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  buttonDisableStyle: {
    justifyContent: 'center',
    backgroundColor: APP_MAIN_COLOR_DISABLE,
    borderRadius: BUTTON_RADIUS,
    flex: 1,
    height: BUTTON_HEIGHT,
  },
  textStyle: {
    color: WHITE,
    fontSize: BUTTON_TEXT_SIZE,
    textAlign: 'center',
    marginLeft: 10,
    flex: 1,
    alignSelf: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    height: BUTTON_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: BUTTON_HEIGHT / 2,
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonImage: {
    width: BUTTON_TEXT_SIZE,
    height: BUTTON_TEXT_SIZE,
    marginRight: 10,
  },
});

export default ButtonWithImage;
