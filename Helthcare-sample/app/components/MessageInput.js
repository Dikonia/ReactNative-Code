import React from 'react';
import { View, TextInput, Dimensions, Platform, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import ClickableText from './ClickableText';
const { width } = Dimensions.get('window');

const MessageInput = props => {
  return (
    <View style={styles.containerStyle}>
      {/* <Icon
        containerStyle={{ marginLeft: 10 }}
        iconStyle={{ margin: 0, padding: 0 }}
        name={props.editing ? 'times' : 'plus'}
        type="font-awesome"
        color={'#494e57'}
        size={20}
        onPress={props.onLeftPress}
      /> */}
      <View style={styles.inputViewStyle}>
        <TextInput
          style={{
            color: '#212529',
            ...Platform.select({
              android: {
                minHeight: 36,
                width: width - 76
              },
              ios: {
                minHeight: 36,
                width: width - 76
              }
            })
          }}
          placeholder={'Your message'}
          autoCapitalize="none"
          autoCorrect={false}
          selectionColor={'#212529'}
          underlineColorAndroid="transparent"
          value={props.textMessage}
          onChangeText={props.onChangeText}
        />
      </View>
      {/* <Icon
        containerStyle={{ marginLeft: 0 }}
        // iconStyle={{ margin: 0, padding: 0 }}
        name={props.editing ? 'check' : 'envelope'}
        type="font-awesome"
        color={props.textMessage.length > 0 ? '#7d62d9' : '#494e57'}
        size={20}
        onPress={props.onRightPress}
      /> */}
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={props.onRightPress}>
          <Text style={{fontSize: 14,
          color: "#6ebd84",
          top: 7,
          textAlign: 'center',}}>
            send
          </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  inputViewStyle: {
    paddingLeft: 8,
    paddingRight: 8
  },
  inputStyle: {
    fontSize: 13,
    backgroundColor: '#fff'
  }
};

export { MessageInput };
