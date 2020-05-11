'use strict';

import React from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {BLACK, GRAY} from '../constants/Colors';
import {getChatDate} from '../util/utils';
import BoldText from './BoldText';
import ClickableText from './ClickableText';
import NormalText from './NormalText';

const CommentLayout = ({
  image,
  title,
  message,
  date,
  isShowViewDetails = false,
  isShowReply = false,
  viewDetailsClick = undefined,
  replyClick = undefined,
}) => (
  <View style={styles.parent}>
    <Image source={image} style={styles.image} />
    <View style={styles.column}>
      <View style={styles.flexRow}>
        <BoldText style={styles.title}>{title}</BoldText>
        <NormalText style={styles.dateText}>{getChatDate(date)}</NormalText>
      </View>
      <NormalText style={styles.message}>{message}</NormalText>
      {isShowViewDetails && (
        <ClickableText
          onPress={viewDetailsClick}
          isBoldText={false}
          textStyle={styles.viewDetailsAndReply}>
          View Details
        </ClickableText>
      )}
      {isShowReply && (
        <ClickableText
          onPress={replyClick}
          isBoldText={false}
          textStyle={styles.viewDetailsAndReply}>
          Reply
        </ClickableText>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  column: {
    flex: 1,
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: BLACK,
    marginBottom: 2,
  },
  message: {
    fontSize: 12,
    color: BLACK,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: GRAY,
  },
  image: {
    width: 40,
    height: 40,
  },
  viewDetailsAndReply: {
    fontSize: 12,
    marginLeft: 0,
    textAlign: 'left',
    width: 90,
    color: GRAY,
  },
});

export default CommentLayout;
