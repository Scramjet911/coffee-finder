"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductsByCoffeeShopId = void 0;
const productService = __importStar(require("../services/productServices"));
const errors_1 = require("../utils/errors");
const logger_1 = __importDefault(require("../utils/logger"));
const getProductsByCoffeeShopId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const products = yield productService.getProductsByCoffeeShopId(id);
        res.json(products);
    }
    catch (error) {
        logger_1.default.error(`Error fetching products for coffee shop ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.getProductsByCoffeeShopId = getProductsByCoffeeShopId;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        if (!name || !price || !category) {
            res.status(400).json({ error: "Name, price, and category are required" });
            return;
        }
        const newProduct = yield productService.createProduct(id, {
            name,
            price,
            category,
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        logger_1.default.error(`Error creating product for coffee shop ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        if (!name && !price && !category) {
            res.status(400).json({
                error: "At least one of name, price, or category must be provided",
            });
            return;
        }
        const updatedProduct = yield productService.updateProduct(id, {
            name,
            price,
            category,
        });
        res.json(updatedProduct);
    }
    catch (error) {
        logger_1.default.error(`Error updating product ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield productService.deleteProduct(id);
        res.status(204).send();
    }
    catch (error) {
        logger_1.default.error(`Error deleting product ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.deleteProduct = deleteProduct;
