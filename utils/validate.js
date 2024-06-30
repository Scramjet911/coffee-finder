"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidGeoJSON = exports.isValidObjectId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const isValidObjectId = (id) => mongoose_1.default.Types.ObjectId.isValid(id);
exports.isValidObjectId = isValidObjectId;
const isValidGeoJSON = (location) => {
    if (location &&
        location.type === 'Point' &&
        Array.isArray(location.coordinates) &&
        location.coordinates.length === 2 &&
        typeof location.coordinates[0] === 'number' &&
        typeof location.coordinates[1] === 'number') {
        return true;
    }
    return false;
};
exports.isValidGeoJSON = isValidGeoJSON;
