import React from 'react';
import {View, Pressable, TextInput, StyleSheet} from 'react-native';
import {appColors} from '../../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';

type SearchBoxProps = {
  autoFocus?: boolean;
  onFocus?: () => void;
  hideCamra?: boolean;
  onRightIconPress?: () => void;
  rightIcon?: string;
};
export default function SearchBox({
  autoFocus,
  onFocus,
  hideCamra,
  onRightIconPress,
  rightIcon,
}: SearchBoxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Feather name="search" size={20} color={appColors.black} />
        <TextInput
          autoFocus={autoFocus}
          onFocus={onFocus}
          style={styles.txtInput}
          placeholder="Search for products"
        />
      </View>
      {!hideCamra && (
        <Pressable
          onPress={onRightIconPress && onRightIconPress}
          style={styles.iconBtn}>
          <Feather
            name={rightIcon ? rightIcon : 'camera'}
            size={18}
            color={appColors.white}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subcontainer: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: appColors.lightGray,
    flexDirection: 'row',
    height: 40,
  },
  txtInput: {flex: 1, paddingLeft: 10},
  iconBtn: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
