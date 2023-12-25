import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
