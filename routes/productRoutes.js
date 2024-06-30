"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
router.get("/:id/products", productController_1.getProductsByCoffeeShopId);
router.post("/:id/products", productController_1.createProduct);
router.put("/products/:id", productController_1.updateProduct);
router.delete("/products/:id", productController_1.deleteProduct);
exports.default = router;
