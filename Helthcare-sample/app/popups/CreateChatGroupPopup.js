'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import TextArea from '../components/TextArea';
import styles from './styles';

class CreateChatGroupPopup extends PureComponent {
  state = {
    note: ''
  };

  render() {
    const {isVisible, dismissDialog, onPress} = this.props;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
      <View style={{paddingHorizontal: 20}}>
        <BoldText
          style={[
            CommonStyles.addPopupInputLabel,
            CommonStyles.addPopupNoteText,
          ]}>
          Group Name
        </BoldText>
        <TextArea
          boxStyle={styles.popupGroupTextNameArea}
          onChangeText={this,this.props.onChangeText}
          placeHolder=""
        />
        <ButtonDefault
          textStyle={CommonStyles.greenButtonText}
          onPress={() => onPress(this.state.note)}
          style={CommonStyles.addPopupButtonStyle}>
          Submit
        </ButtonDefault>
      </View>
      </BaseDialog>
    );
  }
}

export default CreateChatGroupPopup;
