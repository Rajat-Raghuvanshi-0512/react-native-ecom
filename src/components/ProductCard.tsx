import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProductItem} from '../utils/types';
import Ripple from 'react-native-material-ripple';
import {appColors} from '../utils/appColors';

type ProductCardProps = {
  item: ProductItem;
};

export default function ProductCard({item}: ProductCardProps) {
  const {title, description, price, image} = item;
  const navigation = useNavigation();
  return (
    <>
      <Ripple
        style={styles.card}
        onPress={() => navigation.navigate('ProductInfo', {item})}>
        <View style={styles.cardImageContainer}>
          <Image
            resizeMode="contain"
            source={{uri: image}}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.cardDesc} numberOfLines={4}>
            {description}
          </Text>
          <Text style={styles.cardPrice}>
            Rs. {(Number(price) * 80).toFixed(2)}
          </Text>
        </View>
      </Ripple>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
  cardImageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
    height: 150,
    padding: 10,
    backgroundColor: appColors.white,
  },
  cardImage: {width: '100%', height: '100%'},
  cardContent: {},
  cardTitle: {fontSize: 20, color: appColors.black, marginTop: 8},
  cardDesc: {marginTop: 4},
  cardPrice: {marginTop: 4, fontSize: 21, color: appColors.primary},
});
