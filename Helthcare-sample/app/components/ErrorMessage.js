import React from 'react';

import {StyleSheet, View} from 'react-native';
import {WHITE, BLACK} from '../constants/Colors';
import BoldText from './BoldText';

const ErrorMessage = ({message, textStyle}) => (
  <View style={styles.errorContainer}>
    <BoldText style={[styles.errorMessage, textStyle]}>{message}</BoldText>
  </View>
);

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  errorMessage: {
    fontSize: 18,
    color: BLACK,
    textAlign: 'center',
  },
});

export default ErrorMessage;
