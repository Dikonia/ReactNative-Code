'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, Platform} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {DRAWER_MENU, BACK, DEFAULT_PROFILE} from '../constants/Images';
import SafeArea from './SafeArea';
import SubHeader from './SubHeader';
import TouchableImage from './TouchableImage';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {withOrientation} from 'react-navigation';
import {HEADER_ITEMS_MARGIN_LEFT_RIGHT} from '../constants/Const';

const HEADER_IMAGE_WIDTH_HEIGHT = 25;
const HEADER_HEIGHT = 45;
const PROFILE_IMAGE_SIZE = 20;

class Header extends PureComponent {
  static defaultProps = {
    isShowDrawer: true,
    isShowBack: false,
    isShowSubHeader: true,
    title: '',
  };

  getStatusBarHeight() {
    const {isLandscape} = this.props;

    if (isLandscape && isIphoneX()) {
      return 0;
    }

    return getStatusBarHeight();
  }

  handleDrawerMenuClick = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  handleGoBack = () => {
    const {backPressed} = this.props;
    if (backPressed) {
      backPressed();
    }

    this.props.navigation.goBack();
  };

  render() {
    const {
      isShowDrawer,
      isShowBack,
      title,
      isShowAdd,
      isShowSubHeader,
      addAction,
      isShowSecondLine,
      secondLine,
      onPress,
      isDisableClickText,
      subHeaderTitleStyle,
      isShowButton,
      buttonText,
      buttonPress,
    } = this.props;
    const statusBarHeight = this.getStatusBarHeight();
    const paddingTop =
      Platform.OS === 'android' ? {paddingTop: statusBarHeight} : {};
    return (
      <SafeArea style={[styles.container, paddingTop]}>
        <View>
          <View style={styles.header}>
            <View style={styles.leftView}>
              {isShowDrawer && (
                <TouchableImage
                  onPress={this.handleDrawerMenuClick}
                  image={DRAWER_MENU}
                  imageStyle={styles.image}
                />
              )}
              {isShowBack && (
                <TouchableImage
                  onPress={this.handleGoBack}
                  image={BACK}
                  imageStyle={styles.image}
                />
              )}
            </View>
            <View style={styles.lastView}>
              <TouchableImage
                disabled
                image={DEFAULT_PROFILE}
                imageStyle={styles.profile}
              />
            </View>
          </View>
          {isShowSubHeader && (
            <SubHeader
              title={title}
              isShowAdd={isShowAdd}
              addAction={addAction}
              isShowSecondLine={isShowSecondLine}
              secondLine={secondLine}
              onPress={onPress}
              isDisableClickText={isDisableClickText}
              subHeaderTitleStyle={subHeaderTitleStyle}
              isShowButton={isShowButton}
              buttonText={buttonText}
              buttonPress={buttonPress}
            />
          )}
        </View>
      </SafeArea>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  leftView: {
    flex: 1,
  },
  image: {
    width: HEADER_IMAGE_WIDTH_HEIGHT,
    height: HEADER_IMAGE_WIDTH_HEIGHT,
  },
  lastView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profile: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    marginRight: HEADER_ITEMS_MARGIN_LEFT_RIGHT,
  },
});

export default withOrientation(Header);
