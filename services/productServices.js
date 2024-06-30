"use strict";
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
const product_1 = __importDefault(require("../models/product"));
const coffeeShop_1 = __importDefault(require("../models/coffeeShop"));
const errors_1 = require("../utils/errors");
const validate_1 = require("../utils/validate");
const getProductsByCoffeeShopId = (coffeeShopId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(coffeeShopId)) {
        throw new errors_1.BadRequestError("Invalid coffee shop ID");
    }
    return product_1.default.find({ coffeeShopId });
});
exports.getProductsByCoffeeShopId = getProductsByCoffeeShopId;
const createProduct = (coffeeShopId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(coffeeShopId)) {
        throw new errors_1.BadRequestError("Invalid coffee shop ID");
    }
    const coffeeShopExists = yield coffeeShop_1.default.findById(coffeeShopId);
    if (!coffeeShopExists) {
        throw new errors_1.NotFoundError("Coffee shop not found");
    }
    const newProduct = new product_1.default(Object.assign(Object.assign({}, data), { coffeeShopId }));
    return newProduct.save();
});
exports.createProduct = createProduct;
const updateProduct = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(productId)) {
        throw new errors_1.BadRequestError("Invalid product ID");
    }
    const updatedProduct = yield product_1.default.findByIdAndUpdate(productId, data, {
        new: true,
    });
    if (!updatedProduct) {
        throw new errors_1.NotFoundError("Product not found");
    }
    return updatedProduct;
});
exports.updateProduct = updateProduct;
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(productId)) {
        throw new errors_1.BadRequestError("Invalid product ID");
    }
    const deletedProduct = yield product_1.default.findByIdAndDelete(productId);
    if (!deletedProduct) {
        throw new errors_1.NotFoundError("Product not found");
    }
});
exports.deleteProduct = deleteProduct;
