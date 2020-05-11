'use strict';

import React, {PureComponent} from 'react';

import {View, StyleSheet} from 'react-native';
import BaseScreen from '../components/BaseScreen';
import Loading from '../components/Loading';
import {WHITE} from '../constants/Colors';
import {getUserInfo} from '../redux/reducers/session';
import StoreDB from '../storage/StoreDB';
import {logoutWithAlert} from '../util/utils';
import Api from '../services/api';
import {connect} from 'react-redux';

class Landing extends PureComponent {
  componentDidMount() {
    this.init();
  }
  async init() {
    const introDone = await StoreDB.appIntroStatus();

    if (!introDone) {
      return this._navigateToScreen('HelpSteps');
    } else {
      const userData = await StoreDB.loggedInUserData();
      if (!userData.auth_token) {
        return this._navigateToScreen('LoginDashboard');
      } else {
        Api.setAuthToken(userData.auth_token);
        let nextScreen = userData.type;
        this.props.navigation.navigate('TabViewHandler', {
          Screen: nextScreen,
        });
        this.props.getUserInfo().then(response => {
          if (response.code === 401) {
            logoutWithAlert(true);
          }
        });
      }
    }
  }

  _navigateToScreen(customScreen, params) {
    const {navigate} = this.props.navigation;

    navigate(customScreen, params);
  }

  render() {
    return (
      <BaseScreen blackElements header hamburger={false}>
        <View style={styles.parent}>
          <Loading size="large" indicatorColor={WHITE} />
        </View>
      </BaseScreen>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapDispatchToProps = {
  getUserInfo,
};

export default connect(
  null,
  mapDispatchToProps,
)(Landing);
