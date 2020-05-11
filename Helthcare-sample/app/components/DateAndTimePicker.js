'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {WHITE, APP_MAIN_BLUE_COLOR} from '../constants/Colors';
import {CALENDAR} from '../constants/Images';
import BoldText from './BoldText';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BOX_HEIGHT = 50;

class DateAndTimePicker extends PureComponent {
  static defaultProps = {
    mode: 'time',
    showCalImage: false,
    hideLabel: false,
  };

  state = {
    isShow: false,
  };

  handleButtonPress = () => {
    this.setState({isShow: !this.state.isShow});
  };

  handleDateChange = date => {
    this.setState({isShow: false});
    this.props.dateChanged(date);
  };

  cancelDatePicker = () => {
    this.setState({isShow: false});
  };

  render() {
    const {
      time,
      label,
      style,
      timeStyle,
      labelStyle,
      mode,
      showCalImage,
      showCalImageStyle,
      value,
      hideLabel,
      pickertitle,
    } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        onPress={this.handleButtonPress}
        style={styles.parent}>
        <View style={[styles.box, style]}>
          <BoldText style={[styles.timeText, timeStyle]}>{time}</BoldText>
          {showCalImage && (
            <Image
              source={CALENDAR}
              style={[styles.calendarImage, showCalImageStyle]}
            />
          )}
        </View>
        {!hideLabel && (
          <BoldText style={[styles.labelText, labelStyle]}>{label}</BoldText>
        )}
        <DateTimePickerModal
          date={value}
          isVisible={this.state.isShow}
          mode={mode}
          is24Hour={false}
          display="default"
          onConfirm={this.handleDateChange}
          onCancel={this.cancelDatePicker}
          headerTextIOS={pickertitle}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  timeText: {
    fontSize: 13,
    color: APP_MAIN_BLUE_COLOR,
    textAlign: 'center',
    flex: 1,
  },
  labelText: {
    fontSize: 13,
    color: WHITE,
    marginTop: 3,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: BOX_HEIGHT,
    backgroundColor: WHITE,
    borderRadius: BOX_HEIGHT / 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  calendarImage: {
    width: 18,
    height: 18,
    marginLeft: 2,
  },
});

export default DateAndTimePicker;
