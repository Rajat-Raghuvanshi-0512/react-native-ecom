import {
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {appColors} from '../../utils/appColors';
import Icon from 'react-native-vector-icons/AntDesign';

type BtnProps = {
  icon?: string;
  unFilled?: StyleProp<ViewStyle>;
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
  labelStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
};

const CustomButton = ({
  icon,
  unFilled,
  label,
  style,
  onPress,
  labelStyle,
  isLoading,
}: BtnProps) => {
  return (
    <Ripple
      rippleColor={appColors.primary}
      onPress={onPress}
      rippleDuration={600}
      style={[styles.container, unFilled ? styles.unFilled : {}, style]}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={unFilled ? appColors.black : appColors.white}
        />
      )}
      {!isLoading ? (
        <Text
          style={[
            styles.label,
            unFilled ? styles.unFilledLabel : {},
            labelStyle,
          ]}>
          {`${label}`.toUpperCase()}
        </Text>
      ) : (
        <ActivityIndicator size={'large'} color={appColors.white} />
      )}
    </Ripple>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: appColors.primary,
    borderRadius: 5,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 10,
    paddingHorizontal: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: '300',
    color: appColors.white,
    letterSpacing: 2,
  },
  unFilled: {
    backgroundColor: 'transparent',
    borderWidth: 0.7,
    borderColor: appColors.primary,
  },
  unFilledLabel: {
    color: appColors.black,
  },
});
