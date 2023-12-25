import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {appColors} from '../../utils/appColors';
import Label from '../../components/custom/Label';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/custom/CustomButton';
import CustomInput from '../../components/custom/CustomInput';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Container bodyStyle={styles.container}>
      <View style={styles.welcome}>
        <Label text="Welcome," style={styles.welcomeText} />
        <Pressable onPress={() => navigation.navigate('SignUp' as never)}>
          <Label text="Sign Up" style={styles.signinLabel} />
        </Pressable>
      </View>
      <View>
        <Label text="Sign in to Continue" style={styles.continue} />
      </View>
      <View style={styles.padding10}>
        <CustomInput
          // onChangeText={text => onChangeText('email', text)}
          keyboardType="email-address"
          label="Email"
          placeholder="john@doe.com"
        />
      </View>
      <View style={styles.padding10}>
        <CustomInput
          // onChangeText={text => onChangeText('password', text)}
          secureTextEntry
          label="Password"
          placeholder="Password"
          // value="*******"
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Verification' as never)}
        style={styles.forgotPass}>
        <Label text="Forgot password" style={styles.forgotPassLabel} />
      </Pressable>
      <CustomButton onPress={() => {}} label="Sign in" />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 60,
  },
  welcomeText: {fontSize: 30, fontWeight: '700', marginTop: 14},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  signinLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: appColors.primary,
  },
  continue: {
    fontSize: 16,
    fontWeight: '500',
    color: appColors.darkGray,
    marginBottom: 30,
  },
  forgotPass: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  forgotPassLabel: {
    fontSize: 14,
    // fontWeight: '500',
  },
  padding10: {
    paddingVertical: 10,
  },
});
