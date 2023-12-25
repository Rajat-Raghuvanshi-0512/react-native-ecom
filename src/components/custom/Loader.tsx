import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.loader}
        source={require('../../assets/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {width: 200, height: 200},
});
