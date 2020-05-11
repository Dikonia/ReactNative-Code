'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {WHITE} from '../constants/Colors';
import BoldText from './BoldText';
import NormalText from './NormalText';

class ClickableText extends PureComponent {
  static defaultProps = {
    isBoldText: true,
    isDisable: false,
  };
  render() {
    const {isBoldText, textStyle, onPress, isDisable} = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        disabled={isDisable}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onPress}>
        {isBoldText ? (
          <BoldText style={[styles.textStyle, textStyle]}>
            {this.props.children}
          </BoldText>
        ) : (
          <NormalText style={[styles.textStyle, textStyle]}>
            {this.props.children}
          </NormalText>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    color: WHITE,
    textAlign: 'center',
  },
});

export default ClickableText;
