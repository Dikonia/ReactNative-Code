'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import InputBox from '../components/InputBox';
import TextArea from '../components/TextArea';
import BaseDialog from '../components/BaseDialog';
import styles from './styles';

class KinContactPopup extends PureComponent {
  static defaultProps = {
    isKinOne: true,
  };

  render() {
    const {isVisible, isKinOne, handleDismissDialog} = this.props;
    return (
      <BaseDialog onClose={handleDismissDialog} visible={isVisible}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText style={CommonStyles.addPopupBadgeTitle}>
                {isKinOne ? 'Kin1' : 'Kin2'} Contact Information
              </BoldText>
            </View>
            <View style={styles.kinParentView}>
              <BoldText style={styles.kinName}>Dr. Chen</BoldText>
              <BoldText style={styles.kinAddressText}>
                26 Goodman Close, Basingstoke, Hampshire, RG21 8AU
              </BoldText>
              <BoldText style={styles.kinOtherText}>07788992211</BoldText>
              <BoldText style={styles.kinOtherText}>chen@gmail.com</BoldText>
            </View>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default KinContactPopup;
