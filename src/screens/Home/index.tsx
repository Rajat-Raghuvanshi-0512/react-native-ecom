import React from 'react';
import Container from '../../components/Container';
import SearchBox from '../../components/custom/SearchBox';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import Heading from '../../components/custom/Heading';
import {appColors} from '../../utils/appColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import {categories} from '../../utils/contants';
import Loader from '../../components/custom/Loader';
import {scale} from 'react-native-size-matters';
import {useGetAllProductsQuery} from '../../store/slices/productSlice';

const ItemSeparator = () => {
  return <View style={styles.padding10} />;
};

const HomeScreen = () => {
  const {
    isFetching,
    isLoading,
    data: products,
    error,
  } = useGetAllProductsQuery();
  const navigation = useNavigation();
  if (error) console.log(error);
  console.log(isLoading);
  return (
    <Container isScrollable bodyStyle={styles.container}>
      <SearchBox />
      <View style={styles.subcontainer}>
        <Heading heading="Categories" />
        <FlatList
          data={categories}
          renderItem={({item}) => (
            // @ts-ignore
            <Pressable onPress={() => navigation.navigate('Category', {item})}>
              <View style={styles.categoryContainer}>
                <View style={styles.category}>
                  <Icon
                    name={item.icon}
                    size={styles.categoryIcon.width}
                    color={appColors.primary}
                  />
                </View>
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={({icon}) => icon.toString()}
        />
        {/* Products  */}
        <Heading heading="Products" />
        {isFetching || isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ProductCard item={item} />}
            ItemSeparatorComponent={ItemSeparator}
            scrollEnabled={false}
            columnWrapperStyle={styles.row}
            numColumns={2}
          />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {marginTop: 30},
  subcontainer: {marginTop: 20},
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  categoryContainer: {
    alignItems: 'center',
    width: scale(100),
    // height: scale(100),
  },
  category: {
    borderRadius: 200,
    borderColor: appColors.primary,
    borderWidth: 1,
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 4,
    backgroundColor: appColors.white,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  categoryName: {
    fontSize: 14,
    color: appColors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  padding10: {height: 20},
});
