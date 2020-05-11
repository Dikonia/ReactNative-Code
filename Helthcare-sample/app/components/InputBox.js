'use strict';

import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Input} from 'react-native-elements';
import {APP_MAIN_BLUE_COLOR, APP_MAIN_COLOR_DISABLE} from '../constants/Colors';
import {SEARCH} from '../constants/Images';

const INPUT_BOX_HEIGHT = 50;

class InputBox extends Component {
  static defaultProps = {
    placeHolder: 'Input here...',
    boxStyle: {},
    inputStyle: {},
    maxLines: 0,
    placeHolderTextColor: APP_MAIN_BLUE_COLOR,
  };

  render() {
    const {
      placeHolder,
      boxStyle,
      inputStyle,
      maxLines,
      isSearch,
      searchImageStyle,
      placeHolderTextColor,
    } = this.props;
    return (
      <Input
        {...this.props}
        multiline={maxLines > 1}
        numberOfLines={maxLines > 0 ? maxLines : null}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        rightIcon={
          isSearch && (
            <Image
              source={SEARCH}
              style={[styles.searchImage, searchImageStyle]}
            />
          )
        }
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
    backgroundColor: APP_MAIN_COLOR_DISABLE,
    borderRadius: INPUT_BOX_HEIGHT / 2,
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    fontWeight: 'bold',
    color: APP_MAIN_BLUE_COLOR,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  searchImage: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
});

export default InputBox;
