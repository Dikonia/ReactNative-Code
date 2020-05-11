'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {PHONE} from '../constants/Images';
import BoldText from './BoldText';
import Loading from './Loading';
import {
  WHITE,
  APP_MAIN_COLOR,
  APP_MAIN_COLOR_DISABLE,
} from '../constants/Colors';
const BUTTON_HEIGHT = 40;
const BUTTON_TEXT_SIZE = 16;

class ButtonWithBorder extends PureComponent {
  static defaultProps = {
    isShowLoading: false,
    disable: false,
    isShowImage: false,
    source: PHONE,
  };
  render() {
    const {isShowLoading, disable, isShowImage, source} = this.props;
    let isDisable = isShowLoading || disable;
    let buttonMainStyle = styles.SubmitButtonStyle;
    if (isDisable) {
      buttonMainStyle = styles.SubmitButtonDisable;
    }
    return (
      <TouchableOpacity
        disabled={isDisable}
        {...this.props}
        style={[buttonMainStyle, this.props.style]}>
        <View style={styles.viewStyle}>
          {isShowImage && <Image source={source} style={styles.buttonImage} />}
          <BoldText style={[styles.TextStyle, this.props.textStyle]}>
            {this.props.children}
          </BoldText>
          {isShowLoading && (
            <Loading indicatorColor={APP_MAIN_COLOR} style={styles.loading} />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  SubmitButtonStyle: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: BUTTON_HEIGHT / 2,
    borderWidth: 2,
    borderColor: WHITE,
    width: '100%',
    height: BUTTON_HEIGHT,
  },
  SubmitButtonDisable: {
    justifyContent: 'center',
    backgroundColor: APP_MAIN_COLOR_DISABLE,
    borderRadius: BUTTON_HEIGHT / 2,
    width: '100%',
    height: BUTTON_HEIGHT,
  },
  TextStyle: {
    color: WHITE,
    fontSize: BUTTON_TEXT_SIZE,
    textAlign: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
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
    marginRight: 5,
  },
});

export default ButtonWithBorder;
