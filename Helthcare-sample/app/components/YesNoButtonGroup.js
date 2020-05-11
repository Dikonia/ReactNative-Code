'use strict';

import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {
  APP_MAIN_COLOR,
  WHITE,
  BLACK,
  APP_MAIN_BLUE_COLOR,
} from '../constants/Colors';

const BUTTON_GROUP_CONTAINER_HEIGHT = 50;
const BUTTON_WIDTH = '85%';
const BUTTON_HEIGHT = 50;

class YesNoButtonGroup extends PureComponent {
  static defaultProps = {
    buttons: ['NO', 'YES'],
  };

  render() {
    const {buttons} = this.props;
    return (
      <ButtonGroup
        raised
        {...this.props}
        buttonStyle={styles.buttonGroupDefault}
        selectedButtonStyle={styles.buttonGroupSelected}
        buttons={buttons}
        innerBorderStyle={styles.buttonGroupInnerBorderStyle}
        containerBorderRadius={0}
        textStyle={styles.buttonGroupTextApptDetails}
        containerStyle={styles.buttonGroupContainer}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonGroupDefault: {
    backgroundColor: APP_MAIN_BLUE_COLOR,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignSelf: 'center',
    borderRadius: BUTTON_GROUP_CONTAINER_HEIGHT / 2,
  },
  buttonGroupSelected: {
    backgroundColor: APP_MAIN_COLOR,
    shadowColor: BLACK,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignSelf: 'center',
    borderRadius: BUTTON_GROUP_CONTAINER_HEIGHT / 2,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonGroupInnerBorderStyle: {
    width: 0,
  },
  buttonGroupTextApptDetails: {
    color: WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonGroupContainer: {
    flex: 1,
    height: BUTTON_GROUP_CONTAINER_HEIGHT,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0,
  },
});

export default YesNoButtonGroup;
