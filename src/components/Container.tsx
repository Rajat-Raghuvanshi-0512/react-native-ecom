import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';
type ContainerProps = {
  children: React.ReactNode;
  isScrollable?: boolean;
  bodyStyle?: StyleProp<ViewStyle>;
};

export default function Container({
  children,
  isScrollable,
  bodyStyle,
}: ContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      {isScrollable ? (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <View style={[styles.innerView, bodyStyle]}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.innerView, bodyStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
