import express from "express";
import {
  getProductsByCoffeeShopId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/:id/products", getProductsByCoffeeShopId);
router.post("/:id/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
