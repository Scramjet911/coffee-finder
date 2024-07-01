import Product, { IProduct } from "../models/product";
import CoffeeShop from "../models/coffeeShop";
import { BadRequestError, NotFoundError } from "../utils/errors";
import { isValidObjectId } from "../utils/validate";

export const getProductsByCoffeeShopId = async (
  coffeeShopId: string
): Promise<IProduct[]> => {
  if (!isValidObjectId(coffeeShopId)) {
    throw new BadRequestError("Invalid coffee shop ID");
  }
  return Product.find({ coffeeShopId });
};

export const createProduct = async (
  coffeeShopId: string,
  data: Partial<IProduct>
): Promise<IProduct> => {
  if (!isValidObjectId(coffeeShopId)) {
    throw new BadRequestError("Invalid coffee shop ID");
  }

  const coffeeShopExists = await CoffeeShop.findById(coffeeShopId);
  if (!coffeeShopExists) {
    throw new NotFoundError("Coffee shop not found");
  }

  const newProduct = new Product({
    ...data,
    coffeeShopId,
  });
  return newProduct.save();
};

export const updateProduct = async (
  productId: string,
  data: Partial<IProduct>
): Promise<IProduct | null> => {
  if (!isValidObjectId(productId)) {
    throw new BadRequestError("Invalid product ID");
  }

  const updatedProduct = await Product.findByIdAndUpdate(productId, data, {
    new: true,
  });
  if (!updatedProduct) {
    throw new NotFoundError("Product not found");
  }
  return updatedProduct;
};

export const deleteProduct = async (productId: string): Promise<void> => {
  if (!isValidObjectId(productId)) {
    throw new BadRequestError("Invalid product ID");
  }

  const deletedProduct = await Product.findByIdAndDelete(productId);
  if (!deletedProduct) {
    throw new NotFoundError("Product not found");
  }
};
