import baseApi from '~/api';
import { ShopProduct } from '~/types/product';

export const coffeeShopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductsByShopId: builder.query<ShopProduct[], string>({
      query: (id) => `/${id}/products`
    }),
    createProduct: builder.mutation<void, ShopProduct>({
      query: (newProductOfShop) => ({
        url: `/${newProductOfShop.coffeShopId}/products`,
        method: 'POST',
        body: newProductOfShop
      })
    }),
    updateProduct: builder.mutation<
      void,
      { id: string; data: Partial<ShopProduct> }
    >({
      query: ({ id, data: { coffeShopId, ...data } }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE'
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetAllProductsByShopIdQuery,
  useLazyGetAllProductsByShopIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = coffeeShopApi;
