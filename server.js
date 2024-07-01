"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const coffeeShopRoutes_1 = __importDefault(require("./routes/coffeeShopRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const logger_1 = __importDefault(require("./utils/logger"));
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const corsMiddleware_1 = __importDefault(require("./middleware/corsMiddleware"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(body_parser_1.default.json());
app.use("/api/coffee-shops", coffeeShopRoutes_1.default);
app.use("/api/coffee-shops", productRoutes_1.default);
app.use(loggerMiddleware_1.default);
app.use(corsMiddleware_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger_1.default.info(`Server is running on port ${PORT}`);
});
