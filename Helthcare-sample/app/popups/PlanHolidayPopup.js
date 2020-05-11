'use strict';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import DateAndTimePicker from '../components/DateAndTimePicker';
import InputBox from '../components/InputBox';
import TextArea from '../components/TextArea';
import Toast from 'react-native-simple-toast';
import {BLACK} from '../constants/Colors';
import SimpleDropdown from '../components/SimpleDropdown';
import {requestLeave} from '../redux/reducers/patient';
import {formatDate} from '../util/utils';
import styles from './styles';
const arrdata = ['Annual Leave','Maternity Leave','Paternity Leave','General Leave'];
class PlanHolidayPopup extends PureComponent {
  state = {
    startTime: '',
    endTime: '',
    reason: '',
    note: '',
    showLoading:false,
  };

  handleStartTime = date => {
    this.setState({startTime: date});
  };

  handleEndTime = date => {
    this.setState({endTime: date});
  };
  selectLeavetype = (reason) => {
    this.setState({reason:arrdata[reason]});
  }

  sendHolidayRequest = () => {
    const {startTime, endTime, reason, note} = this.state;
    console.log('Reason data is the '+reason)
    console.log('Reason data is the '+startTime)
    console.log('Reason data is the '+endTime)
    console.log('Reason data is the '+note);
    if (!reason) {
      Toast.show('Please select Holiday Reason');
    } else if (!startTime) {
      Toast.show('Please select Start time');
    } else if (!endTime) {
      Toast.show('Please select End time');
    } else if (!note) {
      Toast.show('Please select Note');
    } else if (endTime.getTime() <= startTime.getTime()) {
      Toast.show('End time should be greater than Start time.');
    } else {
      this.setState({startTime: '', endTime: '', reason: '', note: ''});
      console.log('details data is the'+ reason + startTime + endTime + note);
     
      this.props
        .requestLeave(startTime, endTime, note, reason)
        .then(response => {
          if (response.code === 200) {
            Toast.show('Request added successfully');
          } else {
            Toast.show(response.message);
          }
         
        })
        
      
    }
  };

  render() {
    const {isVisible, dismissDialog} = this.props;
    const {startTime, endTime} = this.state;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText
                numberOfLines={1}
                style={CommonStyles.addPopupBadgeTitle}>
                Plan holiday time
              </BoldText>
            </View>
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={styles.planHolidayPopupInputLabel}>
                Holiday Reason
              </BoldText>
              <View style={styles.PopupDropdownstyle}>
              <SimpleDropdown
                  onSelect={this.selectLeavetype}
                  placeHolder="Please select reason"
                  drowdownArray={arrdata}
                  isIconVisible={false}
                />
              </View>
            </View>
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={styles.planHolidayPopupInputLabel}>
                Date
              </BoldText>
              <DateAndTimePicker
                mode="date"
                showCalImage
                time={startTime ? formatDate(startTime, 'MM/DD/YY') : ''}
                dateChanged={this.handleStartTime}
                style={[CommonStyles.startTime, styles.holidayDateView]}
                timeStyle={styles.planHolidaySelectedDay}
                label="Start Time"
              />
              <BoldText style={styles.holidayDiffView}>To</BoldText>
              <DateAndTimePicker
                mode="date"
                showCalImage
                time={endTime ? formatDate(endTime, 'MM/DD/YY') : ''}
                dateChanged={this.handleEndTime}
                style={[CommonStyles.endTime, styles.holidayDateView]}
                label="Finish Time"
                timeStyle={styles.planHolidaySelectedDay}
              />
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
              onChangeText={text => this.setState({note: text})}
              placeHolder=""
            />
            <ButtonDefault
              textStyle={CommonStyles.greenButtonText}
              onPress={this.sendHolidayRequest}
              style={CommonStyles.addPopupButtonStyle}>
              Request Leave Time
            </ButtonDefault>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

const mapDispatchToProps = { requestLeave, };

export default connect(
  null,
  mapDispatchToProps,
)(PlanHolidayPopup)

