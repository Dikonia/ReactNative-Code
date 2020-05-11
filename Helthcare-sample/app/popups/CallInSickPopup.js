'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import TextArea from '../components/TextArea';
import Toast from 'react-native-simple-toast';
import styles from './styles';

class CallInSickPopup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  submitCallInSickRequest = () => {
    const {message} = this.state;
    if (!message) {
      Toast.show('Please enter note.');
    } else {
      this.props.dismissDialog();
      this.setState({message: ''});
    }
  };

  render() {
    const {isVisible, dismissDialog} = this.props;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText
                numberOfLines={1}
                style={CommonStyles.addPopupBadgeTitle}>
                Call in Sick
              </BoldText>
            </View>
            <BoldText
              style={[
                CommonStyles.addPopupInputLabel,
                CommonStyles.addPopupNoteText,
              ]}>
              Note
            </BoldText>
            <TextArea
              boxStyle={styles.popupTextArea}
              onChangeText={text => this.setState({message: text})}
              placeHolder=""
            />
            <ButtonDefault
              textStyle={CommonStyles.greenButtonText}
              onPress={this.submitCallInSickRequest}
              style={CommonStyles.addPopupButtonStyle}>
              Submit
            </ButtonDefault>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default CallInSickPopup;
