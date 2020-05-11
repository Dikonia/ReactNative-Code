'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import DateAndTimePicker from '../components/DateAndTimePicker';
import {formatAMPM, convertHourMinutes} from '../util/utils';
import styles from './styles';

class TimesheetPopup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentStartTime: '',
      appointmentEndTime: '',
      appointmentTotalTime: '',
      commuteStartTime: '',
      commuteEndTime: '',
      commuteTotalTime: '',
      totalHours: '',
    };
  }
  updateTimeSheetTime = (fieldName, dateVal) => {
    this.setState({[fieldName]: dateVal}, () => {
      this.updateTotalTime();
    });
  };

  updateTotalTime = () => {
    const {
      appointmentStartTime,
      appointmentEndTime,
      commuteStartTime,
      commuteEndTime,
    } = this.state;
    let apptTotalHoursMin = '';
    let totalCommuteHours = '';
    let totalHoursMins = '';
    let totalTime;
    if (appointmentEndTime && appointmentStartTime) {
      let timeDiff = appointmentEndTime - appointmentStartTime;
      if (timeDiff >= 0) {
        apptTotalHoursMin = convertHourMinutes(timeDiff);
        totalTime = timeDiff;
      }
    }
    if (commuteStartTime && commuteEndTime) {
      let timeDiff = commuteEndTime - commuteStartTime;
      if (timeDiff >= 0) {
        totalCommuteHours = convertHourMinutes(timeDiff);
        totalTime += timeDiff;
      }
    }
    if (totalTime >= 0) {
      totalHoursMins = convertHourMinutes(totalTime);
    }
    this.setState({
      appointmentTotalTime: apptTotalHoursMin,
      commuteTotalTime: totalCommuteHours,
      totalHours: totalHoursMins,
    });
  };

  render() {
    const {
      appointmentStartTime,
      appointmentEndTime,
      appointmentTotalTime,
      commuteStartTime,
      commuteEndTime,
      commuteTotalTime,
      totalHours,
    } = this.state;
    const {isVisible, dismissDialog} = this.props;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.timesheetParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText style={CommonStyles.addPopupBadgeTitle}>Timesheet</BoldText>
            </View>
            <BoldText style={styles.timesheetTitle}>
              Please confirm your timesheet:
            </BoldText>
            <View style={styles.timeLayoutTitlesParent}>
              <BoldText style={styles.timesheetOtherText}>
                Appointment Duration
              </BoldText>
              <BoldText style={styles.timesheetOtherText}>Total</BoldText>
            </View>
            <View style={styles.flexRowTimesheet}>
              <DateAndTimePicker
                value={appointmentStartTime ? appointmentStartTime : new Date()}
                time={
                  appointmentStartTime ? formatAMPM(appointmentStartTime) : ''
                }
                dateChanged={date =>
                  this.updateTimeSheetTime('appointmentStartTime', date)
                }
                style={[CommonStyles.startTime, styles.timeLayoutMargin]}
                label="Start Time"
                labelStyle={styles.timeLayoutMargin}
              />
              <DateAndTimePicker
                value={appointmentEndTime ? appointmentEndTime : new Date()}
                time={appointmentEndTime ? formatAMPM(appointmentEndTime) : ''}
                dateChanged={date =>
                  this.updateTimeSheetTime('appointmentEndTime', date)
                }
                style={[CommonStyles.endTime, styles.timeLayoutMargin]}
                labelStyle={styles.timeLayoutMargin}
                label="Finish Time"
              />
              <DateAndTimePicker
                disabled
                time={appointmentTotalTime}
                dateChanged={this.handleEndTime}
                style={CommonStyles.totalTime}
              />
            </View>
            <View style={styles.timeLayoutTitlesParent}>
              <BoldText style={styles.timesheetOtherText}>
                Commute Duration
              </BoldText>
            </View>
            <View style={styles.flexRowTimesheet}>
              <DateAndTimePicker
                value={commuteStartTime ? commuteStartTime : new Date()}
                time={commuteStartTime ? formatAMPM(commuteStartTime) : ''}
                dateChanged={date =>
                  this.updateTimeSheetTime('commuteStartTime', date)
                }
                style={[CommonStyles.startTime, styles.timeLayoutMargin]}
              />
              <DateAndTimePicker
                value={commuteEndTime ? commuteEndTime : new Date()}
                time={commuteEndTime ? formatAMPM(commuteEndTime) : ''}
                dateChanged={date =>
                  this.updateTimeSheetTime('commuteEndTime', date)
                }
                style={[CommonStyles.endTime, styles.timeLayoutMargin]}
              />
              <DateAndTimePicker
                disabled
                time={commuteTotalTime}
                dateChanged={this.handleEndTime}
                style={CommonStyles.totalTime}
              />
            </View>
            <View style={styles.flexRowTimesheet}>
              <DateAndTimePicker
                disabled
                style={[CommonStyles.startTime, styles.dummyTimeLayoutMargin]}
              />
              <BoldText style={styles.totalHours}>Total Hours</BoldText>
              <DateAndTimePicker
                disabled
                time={totalHours}
                dateChanged={this.handleEndTime}
                style={CommonStyles.totalTime}
              />
            </View>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default TimesheetPopup;
