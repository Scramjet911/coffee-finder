import { Request, Response } from "express";
import * as coffeeShopService from "../services/coffeeShopService";
import { HttpError } from "../utils/errors";
import logger from "../utils/logger";

export const getAllCoffeeShops = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const coffeeShops = await coffeeShopService.getAllCoffeeShops();
    res.json(coffeeShops);
  } catch (error) {
    logger.error("Error fetching coffee shops:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCoffeeShopById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const coffeeShop = await coffeeShopService.getCoffeeShopById(id);
    res.json(coffeeShop);
  } catch (error) {
    logger.error(`Error fetching coffee shop ${req.params.id}:`, error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const createCoffeeShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, location, rating } = req.body;

    if (!name || !location || !rating) {
      res.status(400).json({ error: "Name, location, and rating are required" });
      return;
    }
    const newCoffeeShop = await coffeeShopService.createCoffeeShop(req.body);
    res.status(201).json(newCoffeeShop);
  } catch (error) {
    logger.error("Error creating coffee shop:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCoffeeShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedCoffeeShop = await coffeeShopService.updateCoffeeShop(
      id,
      req.body
    );
    res.json(updatedCoffeeShop);
  } catch (error) {
    logger.error(`Error updating coffee shop ${req.params.id}:`, error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const deleteCoffeeShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await coffeeShopService.deleteCoffeeShop(id);
    res.status(204).send();
  } catch (error: unknown) {
    logger.error(`Error deleting coffee shop ${req.params.id}:`, error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
