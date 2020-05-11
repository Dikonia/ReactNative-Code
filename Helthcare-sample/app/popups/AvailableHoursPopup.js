'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import DateAndTimePicker from '../components/DateAndTimePicker';
import TextArea from '../components/TextArea';
import {formatDate, formatAMPM} from '../util/utils';
import styles from './styles';

class AvailableHoursPopup extends PureComponent {
  state = {
    date: '',
    startTime: '',
    endTime: '',
    note: '',
  };

  handleDate = selectedDate => {
    this.setState({date: selectedDate});
  };

  handleStartTime = startTimeObj => {
    this.setState({startTime: startTimeObj});
  };

  handleEndTime = endTimeObj => {
    this.setState({endTime: endTimeObj});
  };

  render() {
    const {isVisible, dismissDialog} = this.props;
    const {date, startTime, endTime} = this.state;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <BoldText
                numberOfLines={1}
                style={CommonStyles.addPopupBadgeTitle}>
                AVAILABLE HOURS
              </BoldText>
            </View>
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={styles.planHolidayPopupInputLabel}>
                Date
              </BoldText>
              <DateAndTimePicker
                mode="date"
                hideLabel
                showCalImage
                time={date ? formatDate(date, 'MM/DD/YY') : ''}
                dateChanged={this.handleDate}
                style={styles.availableHoursPopupDateStyle}
                showCalImageStyle={styles.availableHoursCalImg}
                timeStyle={styles.availableHoursSelectedDay}
              />
            </View>
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={styles.planHolidayPopupInputLabel}>
                Time
              </BoldText>
              <DateAndTimePicker
                mode="time"
                hideLabel
                time={startTime ? formatAMPM(startTime) : ''}
                dateChanged={this.handleStartTime}
                style={[CommonStyles.startTime, styles.holidayDateView]}
                timeStyle={styles.availableHoursSelectedDay}
              />
              <BoldText style={styles.availableHoursDiffView}>To</BoldText>
              <DateAndTimePicker
                mode="time"
                hideLabel
                time={endTime ? formatAMPM(endTime) : ''}
                dateChanged={this.handleEndTime}
                style={[CommonStyles.endTime, styles.holidayDateView]}
                timeStyle={styles.availableHoursSelectedDay}
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
              Submit
            </ButtonDefault>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default AvailableHoursPopup;
