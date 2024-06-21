import CoffeeShop, { ICoffeeShop } from "../models/coffeeShop";
import { BadRequestError, NotFoundError } from "../utils/errors";
import { isValidObjectId } from "../utils/validate";

export const getAllCoffeeShops = async (): Promise<ICoffeeShop[]> => {
  return CoffeeShop.find();
};

export const getCoffeeShopById = async (
  id: string
): Promise<ICoffeeShop | null> => {
  if (!isValidObjectId(id)) {
    throw new BadRequestError("Invalid coffee shop ID");
  }
  const coffeeShop = await CoffeeShop.findById(id);
  if (!coffeeShop) {
    throw new NotFoundError("Coffee shop not found");
  }
  return coffeeShop;
};

export const createCoffeeShop = async (
  data: Partial<ICoffeeShop>
): Promise<ICoffeeShop> => {
  const newCoffeeShop = new CoffeeShop(data);
  return newCoffeeShop.save();
};

export const updateCoffeeShop = async (
  id: string,
  data: Partial<ICoffeeShop>
): Promise<ICoffeeShop | null> => {
  if (!isValidObjectId(id)) {
    throw new BadRequestError("Invalid coffee shop ID");
  }
  const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedCoffeeShop) {
    throw new NotFoundError("Coffee shop not found");
  }
  return updatedCoffeeShop;
};

export const deleteCoffeeShop = async (id: string): Promise<void> => {
  if (!isValidObjectId(id)) {
    throw new BadRequestError("Invalid coffee shop ID");
  }
  const deletedCoffeeShop = await CoffeeShop.findByIdAndDelete(id);
  if (!deletedCoffeeShop) {
    throw new NotFoundError("Coffee shop not found");
  }
};
