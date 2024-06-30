"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coffeeShopController_1 = require("../controllers/coffeeShopController");
const router = express_1.default.Router();
router.get("/", coffeeShopController_1.getAllCoffeeShops);
router.get("/:id", coffeeShopController_1.getCoffeeShopById);
router.post("/", coffeeShopController_1.createCoffeeShop);
router.put("/:id", coffeeShopController_1.updateCoffeeShop);
router.delete("/:id", coffeeShopController_1.deleteCoffeeShop);
exports.default = router;
