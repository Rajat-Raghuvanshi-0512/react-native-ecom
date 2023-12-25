import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProductItem} from '../../utils/types';
import Container from '../../components/Container';
import {appColors} from '../../utils/appColors';
import CustomButton from '../../components/custom/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ProductInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductInfo'
>;

const ProductInfo = ({route}: ProductInfoProps) => {
  const item: ProductItem = route?.params?.item!;
  return (
    <Container isScrollable>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.image}} style={styles.img} />
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>
          Rs. {(Number(item.price) * 80).toFixed(2)}
        </Text>
      </View>
      <CustomButton label="Add to Cart" onPress={() => {}} />
    </Container>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    marginTop: 30,
  },
  img: {
    width: '100%',
    height: 450,
    objectFit: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
    color: appColors.black,
  },
  description: {marginTop: 10, marginBottom: 20},
  price: {
    fontSize: 25,
    fontWeight: '600',
    color: appColors.primary,
    marginBottom: 10,
  },
});
