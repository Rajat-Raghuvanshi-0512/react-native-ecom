import {ProductItem} from '../../utils/types';
import {api} from '../api';

export const productSlice = api.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<ProductItem[], void>({
      query: () => 'products',
    }),
    getProductsByCategory: builder.query<ProductItem[], string>({
      query: name => `/products/category/${name}`,
    }),
    getProductDetails: builder.query<ProductItem[], string>({
      query: id => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useGetProductsByCategoryQuery,
} = productSlice;
