'use strict';

import React from 'react';

import {StyleSheet} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {WHITE, APP_MAIN_BLUE_COLOR} from '../constants/Colors';
import {CALENDAR_WEEK_DAYS} from '../constants/Const';

const CalendarView = ({onDateChange}) => (
  <CalendarPicker
    textStyle={styles.calendarTextStyle}
    weekdays={CALENDAR_WEEK_DAYS}
    allowRangeSelection
    previousTitle="<"
    previousTitleStyle={{color: WHITE}}
    nextTitle=">"
    nextTitleStyle={{color: APP_MAIN_BLUE_COLOR}}
    dayLabelsWrapper={{
      borderBottomWidth: 0,
      borderTopWidth: 0,
    }}
    dayOfWeekStyles={{
      0: {
        color: APP_MAIN_BLUE_COLOR,
      },
    }}
    selectedRangeStyle={styles.calendarRangeColor}
    selectedDayTextColor={WHITE}
    todayBackgroundColor="transparent"
    onDateChange={onDateChange}
  />
);

const styles = StyleSheet.create({
  calendarRangeColor: {
    backgroundColor: APP_MAIN_BLUE_COLOR,
  },
  calendarTextStyle: {
    color: WHITE,
    fontSize: 17,
  },
});

export default CalendarView;
