'use strict';

import React, {PureComponent} from 'react';

import {View} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import ButtonDefault from '../components/ButtonDefault';
import ButtonWithBorder from '../components/ButtonWithBorder';
import styles from './styles';

class ImageChooserPopup extends PureComponent {
  render() {
    const {
      isVisible,
      handleDismissDialog,
      cameraPress,
      galleryPress,
    } = this.props;
    return (
      <BaseDialog onClose={handleDismissDialog} visible={isVisible}>
        <View style={CommonStyles.addPopupParent}>
          <ButtonDefault onPress={cameraPress} style={styles.cameraButton}>
            Camera
          </ButtonDefault>
          <ButtonWithBorder style={styles.galleryButton} onPress={galleryPress}>
            Gallery
          </ButtonWithBorder>
        </View>
      </BaseDialog>
    );
  }
}

export default ImageChooserPopup;
