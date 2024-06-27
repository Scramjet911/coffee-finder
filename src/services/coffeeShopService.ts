import { FilterQuery } from "mongoose";
import CoffeeShop, { ICoffeeShop } from "../models/coffeeShop";
import { CoffeeShopFilters } from "../types/coffeeShop";
import { BadRequestError, NotFoundError } from "../utils/errors";
import { isValidObjectId } from "../utils/validate";
import logger from "../utils/logger";

export const getAllCoffeeShops = async ({ name, location, maxRating, minRating }: CoffeeShopFilters): Promise<ICoffeeShop[]> => {
  try {
    let query: FilterQuery<ICoffeeShop> = {};

    if (name) {
      query.name = { $regex: new RegExp(`^${name}`), $options: 'i' };
    }

    if (location) {
      query.location = { $nearSphere: { $geometry: { type: "Point", coordinates: location.point }, distance: location.radius * 1000 } };
    }

    if (minRating) {
      query.rating = { $gte: parseFloat(minRating) };
    }

    if (maxRating) {
      query.rating = { ...query.rating, $lte: parseFloat(maxRating) };
    }
    let coffeeShops;
    if (name)
      coffeeShops = await CoffeeShop.find(query).collation({ locale: "en", strength: 1 });
    else
      coffeeShops = await CoffeeShop.find(query)

    return coffeeShops;
  } catch (error) {
    throw new Error('Internal Server Error');
  }
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
