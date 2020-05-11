'use strict';

import React from 'react';

import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {DOWN_ARROW} from '../constants/Images';
import BoldText from './BoldText';

const ITEM_MARGIN = 15;
const DOWN_ARROW_SIZE = 15;

const ClickableTextWithRightImage = ({title, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[CommonStyles.shadowLayout, styles.spaceBetween, style]}>
    <BoldText style={CommonStyles.nurseAppotNotesAndOtherText}>
      {title}
    </BoldText>
    <Image style={styles.downArrow} source={DOWN_ARROW} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  spaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ITEM_MARGIN,
  },
  downArrow: {
    width: DOWN_ARROW_SIZE,
    height: DOWN_ARROW_SIZE,
    marginRight: 20,
  },
});

export default ClickableTextWithRightImage;
