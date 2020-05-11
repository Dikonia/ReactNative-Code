'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import NormalText from '../components/NormalText';
import {CLOSE_BLUE} from '../constants/Images';
import styles from './styles';

class MessagePopup extends PureComponent {
  render() {
    const {isVisible, title, message, dismissDialog} = this.props;
    return (
      <BaseDialog
        closeImage={CLOSE_BLUE}
        dialogStyle={styles.whiteDialog}
        onClose={dismissDialog}
        visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            {title && <BoldText style={styles.msgPopupTitle}>{title}</BoldText>}
            {message && (
              <NormalText style={styles.msgPopupDesc}>{message}</NormalText>
            )}
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default MessagePopup;
