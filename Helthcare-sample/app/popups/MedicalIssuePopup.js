'use strict';

import React, {PureComponent} from 'react';

import {View, ScrollView} from 'react-native';
import {Badge} from 'react-native-elements';
import CommonStyles from '../common/CommonStyles';
import BaseDialog from '../components/BaseDialog';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import InputBox from '../components/InputBox';
import styles from './styles';

class MedicalIssuePopup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputItems: JSON.parse(JSON.stringify(this.props.items)),
      isReload: false,
    };
  }

  handleInputFieldValueChange = (value, index) => {
    let tempArr = this.state.inputItems;
    let currentItem = tempArr[index];
    currentItem.itemTitle = value;
    tempArr[index] = currentItem;
    this.setState({inputItems: tempArr, isReload: !this.state.isReload});
  };

  render() {
    const {inputItems} = this.state;
    const {dismissDialog, isVisible, title} = this.props;
    return (
      <BaseDialog onClose={dismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText
                numberOfLines={1}
                style={CommonStyles.addPopupBadgeTitle}>
                {title}
              </BoldText>
            </View>
            {inputItems.map((item, index) => {
              return (
                <InputBox
                  onChangeText={value =>
                    this.handleInputFieldValueChange(value, index)
                  }
                  boxStyle={styles.editInputBoxStyle}
                  key={'' + index}
                  value={item.itemTitle}
                  inputStyle={styles.editInputTextStyle}
                />
              );
            })}
            <ButtonDefault
              textStyle={CommonStyles.greenButtonText}
              onPress={this.submitNoteRequest}
              style={[
                CommonStyles.addPopupButtonStyle,
                styles.submitForReviewBtn,
              ]}>
              Submit For Review
            </ButtonDefault>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

export default MedicalIssuePopup;
