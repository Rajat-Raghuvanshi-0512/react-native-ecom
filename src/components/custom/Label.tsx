import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {appColors} from '../../utils/appColors';

type LabelProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export default function Label({text, style}: LabelProps) {
  return <Text style={[styles.label, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: appColors.black,
  },
});
