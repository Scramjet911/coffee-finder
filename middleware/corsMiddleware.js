"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: ["https://coffee.zephix.org", "localhost:5173" ? process.env.NODE_ENV === 'development' : '']
};
const corsMiddleware = (0, cors_1.default)(corsOptions);
exports.default = corsMiddleware;
