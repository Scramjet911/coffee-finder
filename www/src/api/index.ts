import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `/api/coffee-shops`
});

// Creating API instance using createApi
const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['ShopListing', 'ShopDetails'],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});

export default baseApi;
