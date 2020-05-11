'use strict';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView, Alert} from 'react-native';
import {Badge} from 'react-native-elements';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import TextArea from '../components/TextArea';
import Toast from 'react-native-simple-toast';
import CommonStyles from '../common/CommonStyles';
import styles from './styles';
import OverlaySpinner from '../components/OverlaySpinner';
import {
  WHITE,
} from '../constants/Colors';

import {
  appointmentNote,
  getAppointmentNotes
} from '../redux/reducers/patient';
class InputNotePopup extends PureComponent {
  state = {
    message: '',
    showLoading:false
  };

  submitNoteRequest = (id) => {
    const {message} = this.state;
    if (!message) {
      Toast.show('Please enter note.');
    } else {
      this.setState({showLoading: true});
      this.getMessageData(id,message);
    }
  };
  getMessageData=(id, note)=>{
    this.props
     .appointmentNote(id,note)
     .then(response => {
      this.setState({showLoading: false});
      if (response.code === 200) {
        this.props.getAppointmentNotes(id);
        Toast.show('Notes added successfully');
      }
      this.props.dismissDialog();
     })
  }

  render() {
    const {isVisible, dismissDialog, title,appointmentid} = this.props;
    const{showLoading}=this.state
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView>
          <View style={CommonStyles.addPopupParent}>
            {title && (
              <View style={CommonStyles.addPopupBadgeLayout}>
                <Badge badgeStyle={CommonStyles.badgeElement} />
                <BoldText
                  numberOfLines={1}
                  style={CommonStyles.addPopupBadgeTitle}>
                  {title}
                </BoldText>
              </View>
            )}
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
              onPress={()=>this.submitNoteRequest(appointmentid)}
              style={CommonStyles.addPopupButtonStyle}>
              Submit
            </ButtonDefault>
          </View>
          <OverlaySpinner
              cancelable
              visible={showLoading}
              color={WHITE}
              textContent="Please wait..."
              textStyle={{ color: WHITE }}
            />
        </ScrollView>
      </BaseDialog>
    );
  }
}

const mapDispatchToProps = {
  appointmentNote,
  getAppointmentNotes
}
export default connect(
  null,
  mapDispatchToProps
)(InputNotePopup);
