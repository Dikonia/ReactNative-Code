'use strict';

import React, {PureComponent} from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {HEATH_STATUS_EMOJI} from '../constants/Const';
import {
  SMILE_FACE,
  SMILE_ACTIVE_FACE,
  SAD_FACE,
  SAD_ACTIVE_FACE,
  NORMAL_FACE,
  NORMAL_ACTIVE_FACE,
} from '../constants/Images';
import TouchableImage from './TouchableImage';
const IMAGE_SIZE = 64;
class HealthStatusEmojiView extends PureComponent {
  static defaultProps = {
    selectedStatusEmoji: '',
  };

  selectImage = selectedStatus => {
    const {onSelection} = this.props;
    if (onSelection) {
      onSelection(selectedStatus);
    }
  };

  render() {
    const {selectedStatusEmoji, style, imageStyle} = this.props;
    return (
      <View {...this.props} style={[styles.flexRow, style]}>
        {selectedStatusEmoji === HEATH_STATUS_EMOJI.GOOD ? (
          <Image
            source={SMILE_ACTIVE_FACE}
            style={[styles.image, imageStyle]}
          />
        ) : (
          <TouchableImage
            onPress={() => this.selectImage(HEATH_STATUS_EMOJI.GOOD)}
            image={SMILE_FACE}
            imageStyle={[styles.image, imageStyle]}
          />
        )}
        {selectedStatusEmoji === HEATH_STATUS_EMOJI.NORMAL ? (
          <Image
            source={NORMAL_ACTIVE_FACE}
            style={[styles.image, imageStyle]}
          />
        ) : (
          <TouchableImage
            onPress={() => this.selectImage(HEATH_STATUS_EMOJI.NORMAL)}
            image={NORMAL_FACE}
            imageStyle={[styles.image, imageStyle]}
          />
        )}
        {selectedStatusEmoji === HEATH_STATUS_EMOJI.BAD ? (
          <Image source={SAD_ACTIVE_FACE} style={[styles.image, imageStyle]} />
        ) : (
          <TouchableImage
            onPress={() => this.selectImage(HEATH_STATUS_EMOJI.BAD)}
            image={SAD_FACE}
            imageStyle={[styles.image, imageStyle]}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginLeft: 0,
  },
});

export default HealthStatusEmojiView;
