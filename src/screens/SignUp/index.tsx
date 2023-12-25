import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Label from '../../components/custom/Label';
import CustomInput from '../../components/custom/CustomInput';
import CustomButton from '../../components/custom/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {appColors} from '../../utils/appColors';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <Container isScrollable>
      <Pressable onPress={() => navigation.goBack()} style={styles.leftIcon}>
        <Icon name={'chevron-left'} size={25} />
      </Pressable>
      <View style={styles.mainView}>
        <View style={styles.heading}>
          <Label text="Sign Up" style={styles.headingLabel} />
        </View>
        <View style={styles.paddingVertical10}>
          <Label text="Sign in to Continue" style={styles.signIn} />
        </View>
        <View style={styles.paddingVertical10}>
          <CustomInput
            // onChangeText={text => onChnage('name', text)}
            label="Name"
            placeholder="Rajat"
          />
        </View>
        <View style={styles.paddingVertical10}>
          <CustomInput
            // onChangeText={text => onChnage('email', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={styles.paddingVertical10}>
          <CustomInput
            // onChangeText={text => onChnage('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </View>
        <CustomButton onPress={() => {}} label="Sign up" />
      </View>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  leftIcon: {marginTop: 30},
  paddingVertical10: {paddingVertical: 10},
  mainView: {
    marginTop: 70,
    backgroundColor: appColors.white,
    padding: 15,
    borderRadius: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headingLabel: {fontSize: 30, fontWeight: '700'},
  signIn: {
    fontSize: 16,
    color: appColors.darkGray,
  },
});
