'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {APP_MAIN_COLOR, APP_MAIN_BLUE_COLOR} from '../constants/Colors';
import {TASK_ICON_RIGHT_MARGIN} from '../constants/Const';
import {TASK} from '../constants/Images';
import BoldText from './BoldText';
import NormalText from './NormalText';

const TASK_IMG_SIZE = 15;

class TaskRow extends PureComponent {
  static defaultProps = {
    isShowIcon: true,
    isBoldText: true,
    iconColor: APP_MAIN_COLOR,
    taskIcon: TASK,
    disabled: true,
  };

  render() {
    const {
      isShowIcon,
      isBoldText,
      textStyle,
      taskIcon,
      taskIconStyle,
      style,
      disabled,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        {...this.props}
        style={[styles.parent, style]}>
        {isShowIcon && (
          <Image source={taskIcon} style={[styles.image, taskIconStyle]} />
        )}
        {isBoldText ? (
          <BoldText style={[styles.localTextStyle, textStyle]}>
            {this.props.children}
          </BoldText>
        ) : (
          <NormalText style={[styles.localTextStyle, textStyle]}>
            {this.props.children}
          </NormalText>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  localTextStyle: {
    fontSize: 12,
    color: APP_MAIN_BLUE_COLOR,
  },
  image: {
    width: TASK_IMG_SIZE,
    height: TASK_IMG_SIZE,
    marginRight: TASK_ICON_RIGHT_MARGIN,
  },
});

export default TaskRow;
