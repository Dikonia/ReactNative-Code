import React, {PureComponent} from 'react';

import {StyleSheet, View} from 'react-native';
import {APP_MAIN_COLOR} from '../constants/Colors';

class Divider extends PureComponent {
  static defaultProps = {
    dividerColor: APP_MAIN_COLOR,
  };

  render() {
    const {dividerColor, dividerStyle} = this.props;
    return (
      <View
        style={[
          styles.divider,
          {borderBottomColor: dividerColor},
          dividerStyle,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: APP_MAIN_COLOR,
    borderBottomWidth: 0.2,
  },
});

export default Divider;
