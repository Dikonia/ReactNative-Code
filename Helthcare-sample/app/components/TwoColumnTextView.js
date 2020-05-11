'use strict';

import React from 'react';

import {StyleSheet, View} from 'react-native';
import {DARK_GRAY} from '../constants/Colors';
import BoldText from './BoldText';

const TwoColumnTextView = ({firstText, secondText, textStyle}) => (
  <View style={styles.flexRowWithSpace}>
    <BoldText style={[styles.appointmentDetailsText, textStyle]}>
      {firstText}
    </BoldText>
    <BoldText
      style={[styles.appointmentDetailsText, {marginRight: 30}, textStyle]}>
      {secondText}
    </BoldText>
  </View>
);
const styles = StyleSheet.create({
  flexRowWithSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  appointmentDetailsText: {
    color: DARK_GRAY,
    fontSize: 12,
  },
});

export default TwoColumnTextView;
