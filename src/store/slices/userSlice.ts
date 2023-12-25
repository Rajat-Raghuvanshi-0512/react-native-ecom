import {api} from '../api';

export const userSlice = api.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUpUser: builder.query({
      query: data => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useLoginUserMutation, useSignUpUserQuery} = userSlice;
