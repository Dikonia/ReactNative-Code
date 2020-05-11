'use strict';

import React, {PureComponent} from 'react';

import {View} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import ButtonDefault from '../components/ButtonDefault';
import NormalText from '../components/NormalText';
import TextArea from '../components/TextArea';
import {GRAY} from '../constants/Colors';
import {USER_TYPE} from '../constants/Const';
import {CLOSE_BLUE} from '../constants/Images';
import styles from './styles';

class PanicPopup extends PureComponent {
  render() {
    let userType = USER_TYPE.NURSE;
    const {isVisible, dismissDialog} = this.props;
    return (
      <BaseDialog
        dialogStyle={styles.panicPopupDialog}
        closeImage={CLOSE_BLUE}
        onClose={dismissDialog}
        visible={isVisible}>
        <View style={CommonStyles.addPopupParent}>
          <NormalText style={styles.panicPopupTitle}>
            Are you sure, there is a panic situation.
          </NormalText>
          {userType === USER_TYPE.NURSE && (
            <TextArea
              boxStyle={styles.panicTextArea}
              onChangeText={text => this.setState({message: text})}
              placeHolder="Type here"
              placeHolderTextColor={GRAY}
            />
          )}
          <ButtonDefault
            textStyle={CommonStyles.greenButtonText}
            style={CommonStyles.dangerButtonStyle}>
            Confirm
          </ButtonDefault>
          <ButtonDefault
            textStyle={CommonStyles.greenButtonText}
            onPress={dismissDialog}
            style={[
              CommonStyles.addPopupButtonStyle,
              styles.panicCancelButton,
            ]}>
            Cancel
          </ButtonDefault>
        </View>
      </BaseDialog>
    );
  }
}

export default PanicPopup;
