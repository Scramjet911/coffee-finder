import { Request, Response } from "express";
import * as productService from "../services/productServices";
import { HttpError } from "../utils/errors";
import logger from "../utils/logger";

export const getProductsByCoffeeShopId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const products = await productService.getProductsByCoffeeShopId(id);
    res.json(products);
  } catch (error: unknown) {
    logger.error(
      `Error fetching products for coffee shop ${req.params.id}:`,
      error
    );
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
      res.status(400).json({ error: "Name, price, and category are required" });
      return;
    }

    const newProduct = await productService.createProduct(id, {
      name,
      price,
      category,
    });
    res.status(201).json(newProduct);
  } catch (error: unknown) {
    logger.error(
      `Error creating product for coffee shop ${req.params.id}:`,
      error
    );
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    if (!name && !price && !category) {
      res.status(400).json({
        error: "At least one of name, price, or category must be provided",
      });
      return;
    }

    const updatedProduct = await productService.updateProduct(id, {
      name,
      price,
      category,
    });
    res.json(updatedProduct);
  } catch (error: unknown) {
    logger.error(`Error updating product ${req.params.id}:`, error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error: unknown) {
    logger.error(`Error deleting product ${req.params.id}:`, error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
