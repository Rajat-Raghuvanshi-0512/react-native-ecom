import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {appColors} from '../../utils/appColors';
import Label from './Label';

type CustomInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  InputStyle?: StyleProp<TextStyle>;
  IconRight?: React.FC;
  IconLeft?: React.FC;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
};
export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  InputStyle,
  IconRight,
  IconLeft,
  label,
  containerStyle,
}: CustomInputProps) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(!focused);
  };
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        focused ? styles.activeBorder : styles.blurBorder,
      ]}>
      {label && (
        <View style={styles.padding10}>
          <Label style={{color: appColors.black}} text={label} />
        </View>
      )}
      <View style={styles.icon}>
        {IconLeft && <IconLeft />}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={[styles.input, InputStyle]}
          onBlur={onFocus}
          onFocus={onFocus}
        />
        {IconRight && <IconRight />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.4,
  },
  input: {
    paddingVertical: 10,
    fontSize: 14,
  },
  blurBorder: {
    borderColor: appColors.darkGray,
  },
  activeBorder: {
    borderColor: appColors.primary,
    borderBottomWidth: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColors.white,
    borderRadius: 10,
  },
  padding10: {
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
});
