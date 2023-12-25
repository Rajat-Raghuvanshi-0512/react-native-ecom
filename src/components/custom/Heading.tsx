import {View, StyleSheet} from 'react-native';
import React from 'react';
import Label from './Label';

type HeadingProps = {
  heading: string;
  rightLabel?: string;
  renderRight?: string;
  subLabel?: string;
};

const Heading = ({
  heading,
  rightLabel,
  renderRight,
  subLabel,
}: HeadingProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Label text={heading} style={styles.label1} />
        {subLabel && <Label text={subLabel} style={styles.label2} />}
      </View>
      {!renderRight && rightLabel && <Label text={rightLabel} />}
      {/* {renderRight && renderRight()} */}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  label1: {fontSize: 20, fontWeight: '600'},
  label2: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 10,
  },
});
