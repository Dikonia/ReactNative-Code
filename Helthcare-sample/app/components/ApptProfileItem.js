'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View} from 'react-native';
import {
  APP_MAIN_COLOR,
  APP_MAIN_BLUE_COLOR,
  WHITE,
  GRAY,
} from '../constants/Colors';
import {APP_COMMON_BORDER_RADIUS} from '../constants/Const';
import {TASK, CIRCLE} from '../constants/Images';
import MedicalIssuePopup from '../popups/MedicalIssuePopup';
import BoldText from './BoldText';
import ClickableText from './ClickableText';
import TaskRow from './TaskRow';

const EDIT_BUTTON_HEIGHT = 24;
const TASK_ITEM_PADDING_TOP_BOTTOM = 10;

class ApptProfileItem extends PureComponent {
  static defaultProps = {
    isShowEdit: false,
    parentStyles: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      isShowEditDialog: false,
    };
  }

  handleEditPress = () => {
    this.setState({isShowEditDialog: true});
  };

  dismissEditDialog = () => {
    this.setState({isShowEditDialog: false});
  };

  render() {
    const {
      title,
      subTitle,
      isShowEdit,
      items,
      titleStyle,
      parentStyles,
      isShowIcon,
    } = this.props;
    const {isShowEditDialog} = this.state;
    return (
      <View style={parentStyles}>
        <BoldText style={[styles.title, titleStyle]}>{title}</BoldText>
        <View style={styles.subviewParent}>
          {subTitle && (
            <View style={styles.flexRowSpaceBtw}>
              <BoldText style={styles.subTitle}>{subTitle}</BoldText>
              {isShowEdit && (
                <ClickableText
                  onPress={this.handleEditPress}
                  style={styles.editButtonStyle}
                  textStyle={styles.editButtonText}>
                  Edit
                </ClickableText>
              )}
            </View>
          )}
          <View style={styles.taskItemParent}>
            {items.map((item, index) => {
              let checkIcon = TASK;
              if (!item.isDone) {
                checkIcon = CIRCLE;
              }
              return (
                <TaskRow
                  style={styles.taskRow}
                  isShowIcon={isShowIcon}
                  taskIcon={checkIcon}
                  key={'' + index}>
                  {item.name}
                </TaskRow>
              );
            })}
          </View>
          <MedicalIssuePopup
            dismissDialog={this.dismissEditDialog}
            title={subTitle}
            items={items}
            isVisible={isShowEditDialog}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRowSpaceBtw: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    fontSize: 13,
    color: APP_MAIN_COLOR,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 16,
    color: APP_MAIN_BLUE_COLOR,
  },
  subviewParent: {
    borderRadius: APP_COMMON_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: GRAY,
    paddingLeft: 20,
    paddingRight: 20,
  },
  editButtonStyle: {
    backgroundColor: APP_MAIN_COLOR,
    height: EDIT_BUTTON_HEIGHT,
    minWidth: 55,
    borderRadius: EDIT_BUTTON_HEIGHT / 2,
    justifyContent: 'center',
  },
  editButtonText: {
    fontSize: 10,
    marginTop: -2,
  },
  taskItemParent: {
    paddingTop: TASK_ITEM_PADDING_TOP_BOTTOM,
    paddingBottom: TASK_ITEM_PADDING_TOP_BOTTOM,
    backgroundColor: WHITE,
    paddingRight: 20,
  },
  taskRow: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default ApptProfileItem;
