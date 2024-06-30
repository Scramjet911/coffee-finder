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
exports.deleteCoffeeShop = exports.updateCoffeeShop = exports.createCoffeeShop = exports.getCoffeeShopById = exports.getAllCoffeeShops = void 0;
const coffeeShopService = __importStar(require("../services/coffeeShopService"));
const errors_1 = require("../utils/errors");
const logger_1 = __importDefault(require("../utils/logger"));
const getAllCoffeeShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coffeeShops = yield coffeeShopService.getAllCoffeeShops(req.query);
        res.json(coffeeShops);
    }
    catch (error) {
        logger_1.default.error("Error fetching coffee shops:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllCoffeeShops = getAllCoffeeShops;
const getCoffeeShopById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const coffeeShop = yield coffeeShopService.getCoffeeShopById(id);
        res.json(coffeeShop);
    }
    catch (error) {
        logger_1.default.error(`Error fetching coffee shop ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.getCoffeeShopById = getCoffeeShopById;
const createCoffeeShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, location, rating } = req.body;
        if (!name || !location || !rating) {
            res.status(400).json({ error: "Name, location, and rating are required" });
            return;
        }
        const newCoffeeShop = yield coffeeShopService.createCoffeeShop(req.body);
        res.status(201).json(newCoffeeShop);
    }
    catch (error) {
        logger_1.default.error("Error creating coffee shop:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.createCoffeeShop = createCoffeeShop;
const updateCoffeeShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedCoffeeShop = yield coffeeShopService.updateCoffeeShop(id, req.body);
        res.json(updatedCoffeeShop);
    }
    catch (error) {
        logger_1.default.error(`Error updating coffee shop ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.updateCoffeeShop = updateCoffeeShop;
const deleteCoffeeShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield coffeeShopService.deleteCoffeeShop(id);
        res.status(204).send();
    }
    catch (error) {
        logger_1.default.error(`Error deleting coffee shop ${req.params.id}:`, error);
        if (error instanceof errors_1.HttpError) {
            res.status(error.statusCode).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});
exports.deleteCoffeeShop = deleteCoffeeShop;
