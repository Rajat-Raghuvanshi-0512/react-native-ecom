import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard';
import Label from '../../components/custom/Label';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../components/custom/Loader';
import {useGetProductsByCategoryQuery} from '../../store/slices/productSlice';

type CategoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Category'
>;

const CategoryScreen = ({route}: CategoryScreenProps) => {
  const categoryName = route?.params?.item?.name || null;
  const {isLoading, data} = useGetProductsByCategoryQuery(
    categoryName!.toLowerCase(),
    undefined,
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <Label text={categoryName!} style={styles.heading} />
        <View>
          <FlatList
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={({item, index}) => (
              <ProductCard key={index} item={item} />
            )}
          />
        </View>
      </Container>
      {/* <BottomButtons
        onPress={() => navigation.navigate('Filters')}
        priceLabel={'No Filter Applied'}
        buttonLabel="Filter"
      /> */}
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  heading: {fontSize: 24, fontWeight: '600', marginVertical: 20},
  padding10: {padding: 10},
});
