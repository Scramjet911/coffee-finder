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
exports.deleteCoffeeShop = exports.updateCoffeeShop = exports.createCoffeeShop = exports.getCoffeeShopById = exports.getAllCoffeeShops = void 0;
const coffeeShop_1 = __importDefault(require("../models/coffeeShop"));
const errors_1 = require("../utils/errors");
const validate_1 = require("../utils/validate");
const getAllCoffeeShops = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, location, maxRating, minRating }) {
    try {
        let query = {};
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
            query.rating = Object.assign(Object.assign({}, query.rating), { $lte: parseFloat(maxRating) });
        }
        let coffeeShops;
        if (name)
            coffeeShops = yield coffeeShop_1.default.find(query).collation({ locale: "en", strength: 1 });
        else
            coffeeShops = yield coffeeShop_1.default.find(query);
        return coffeeShops;
    }
    catch (error) {
        throw new Error('Internal Server Error');
    }
});
exports.getAllCoffeeShops = getAllCoffeeShops;
const getCoffeeShopById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(id)) {
        throw new errors_1.BadRequestError("Invalid coffee shop ID");
    }
    const coffeeShop = yield coffeeShop_1.default.findById(id);
    if (!coffeeShop) {
        throw new errors_1.NotFoundError("Coffee shop not found");
    }
    return coffeeShop;
});
exports.getCoffeeShopById = getCoffeeShopById;
const createCoffeeShop = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newCoffeeShop = new coffeeShop_1.default(data);
    return newCoffeeShop.save();
});
exports.createCoffeeShop = createCoffeeShop;
const updateCoffeeShop = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(id)) {
        throw new errors_1.BadRequestError("Invalid coffee shop ID");
    }
    const updatedCoffeeShop = yield coffeeShop_1.default.findByIdAndUpdate(id, data, {
        new: true,
    });
    if (!updatedCoffeeShop) {
        throw new errors_1.NotFoundError("Coffee shop not found");
    }
    return updatedCoffeeShop;
});
exports.updateCoffeeShop = updateCoffeeShop;
const deleteCoffeeShop = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validate_1.isValidObjectId)(id)) {
        throw new errors_1.BadRequestError("Invalid coffee shop ID");
    }
    const deletedCoffeeShop = yield coffeeShop_1.default.findByIdAndDelete(id);
    if (!deletedCoffeeShop) {
        throw new errors_1.NotFoundError("Coffee shop not found");
    }
});
exports.deleteCoffeeShop = deleteCoffeeShop;
