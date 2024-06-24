import baseApi from '~/api';
import { CoffeeShop } from '~/types/coffeeShop';

export const coffeeShopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoffeeShops: builder.query<CoffeeShop[], void>({
      query: () => '/'
    }),
    getCoffeeShopById: builder.query<CoffeeShop, string>({
      query: (id) => `/${id}`
    }),
    createCoffeeShop: builder.mutation<void, Partial<CoffeeShop>>({
      query: (newCoffeeShop) => ({
        url: '/',
        method: 'POST',
        body: newCoffeeShop
      })
    }),
    updateCoffeeShop: builder.mutation<
      void,
      { id: string; data: Partial<CoffeeShop> }
    >({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteCoffeeShop: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetAllCoffeeShopsQuery,
  useLazyGetAllCoffeeShopsQuery,
  useGetCoffeeShopByIdQuery,
  useCreateCoffeeShopMutation,
  useUpdateCoffeeShopMutation,
  useDeleteCoffeeShopMutation
} = coffeeShopApi;
