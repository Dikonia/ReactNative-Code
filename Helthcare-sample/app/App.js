import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './redux/store';
import NavigationService from './services/NavigationService';

import AppContainer from './routes';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.app}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
