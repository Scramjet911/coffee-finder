import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/api/coffee-shops`
});

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['ShopListing', 'ShopDetails'],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});

export default baseApi;
