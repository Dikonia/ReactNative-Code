'use strict';

import React, {PureComponent} from 'react';

import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import {APP_MAIN_COLOR, APP_MAIN_BLUE_COLOR} from '../constants/Colors';
import {POPUP_BORDER_RADIUS} from '../constants/Const';
import {CLOSE_WHITE} from '../constants/Images';

const CLOSE_IMG_SIZE = 16;

class BaseDialog extends PureComponent {
  static defaultProps = {
    visible: false,
    onClose: null,
    closeIcon: true,
    children: null,
    style: {},
    dialogStyle: {},
    closeIconStyle: {},
  };

  render() {
    const {
      visible,
      onClose,
      children,
      closeIcon,
      style,
      dialogStyle,
      closeImage,
      closeIconStyle,
      ...other
    } = this.props;
    let closeImg = CLOSE_WHITE;
    if (closeImage) {
      closeImg = closeImage;
    }
    return (
      <Dialog
        keyboardShouldPersistTaps="always"
        visible={visible}
        dialogBackgroundColor={APP_MAIN_COLOR}
        contentStyle={styles.dialogContent}
        dialogStyle={[styles.dialog, dialogStyle]}
        supportedOrientations={['portrait', 'landscape']}
        onTouchOutside={onClose}
        {...other}>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor="#000000AA" barStyle="light-content" />
        ) : null}
        {children}
        {closeIcon && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            hitSlop={{top: 10, bottom: 10, left: 30, right: 30}}>
            <Image
              source={closeImg}
              style={[styles.closeIcon, closeIconStyle]}
            />
          </TouchableOpacity>
        )}
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  dialog: {
    width: Platform.isPad ? '50%' : '100%',
    maxHeight: '90%',
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: POPUP_BORDER_RADIUS,
    alignSelf: 'center',
    backgroundColor: APP_MAIN_BLUE_COLOR,
  },
  dialogContent: {
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 10,
  },
  closeIcon: {
    padding: 0,
    width: CLOSE_IMG_SIZE,
    height: CLOSE_IMG_SIZE,
  },
});

export default BaseDialog;
