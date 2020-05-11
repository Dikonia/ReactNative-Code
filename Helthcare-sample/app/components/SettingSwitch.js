'use strict';

import React from 'react';

import {StyleSheet, View} from 'react-native';
import Switch from 'react-native-switch-pro';
import {
  GRAY,
  WHITE,
  MID_DARK_GRAY,
  SWITCH_SELECTED_TRACK_COLOR,
} from '../constants/Colors';
import {NOTIFICATION_SETTING_TEXT_SIZE} from '../constants/Const';
import BoldText from './BoldText';
import NormalText from './NormalText';

const SettingSwitch = ({
  setting,
  isBoldText = true,
  onSwitchPress = undefined,
  style,
  textStyle,
}) => (
  <View style={[styles.settingElement, style]}>
    {isBoldText ? (
      <BoldText style={[styles.text, textStyle]}>{setting.title}</BoldText>
    ) : (
      <NormalText style={[styles.text, textStyle]}>{setting.title}</NormalText>
    )}
    <Switch
      width={47}
      height={19}
      value={setting.value}
      circleColorActive={WHITE}
      circleColorInactive={WHITE}
      backgroundActive={SWITCH_SELECTED_TRACK_COLOR}
      backgroundInactive={GRAY}
      onSyncPress={onSwitchPress && onSwitchPress(setting.key)}
    />
  </View>
);

const styles = StyleSheet.create({
  settingElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: NOTIFICATION_SETTING_TEXT_SIZE,
    color: MID_DARK_GRAY,
  },
});

export default SettingSwitch;
