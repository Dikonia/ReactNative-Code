'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {
  APP_MAIN_COLOR,
  APP_LIGHT_BLUE_COLOR,
  APP_MAIN_BLUE_COLOR,
} from '../constants/Colors';

const INPUT_BOX_HEIGHT = 100;
const BORDER_RADIUS = 20;

class TextArea extends Component {
  static defaultProps = {
    placeHolder: 'Input here...',
    boxStyle: {},
    inputStyle: {},
    maxLines: 0,
    placeHolderTextColor: APP_MAIN_COLOR,
  };

  render() {
    const {
      placeHolder,
      boxStyle,
      inputStyle,
      placeHolderTextColor,
    } = this.props;
    return (
      <Input
        {...this.props}
        multiline={true}
        textAlignVertical="top"
        numberOfLines={4}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        containerStyle={[styles.box, {...boxStyle}]}
        inputStyle={[styles.input, inputStyle]}
        inputContainerStyle={styles.inputContainerStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  box: {
    paddingLeft: 20,
    height: INPUT_BOX_HEIGHT,
    backgroundColor: APP_LIGHT_BLUE_COLOR,
    borderRadius: BORDER_RADIUS,
  },
  input: {
    fontSize: 13,
    color: APP_MAIN_BLUE_COLOR,
    alignSelf: 'flex-start',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

export default TextArea;
