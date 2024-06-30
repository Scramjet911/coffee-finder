"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf, colorize, splat, simple } = winston_1.format;
const devFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: combine(splat(), timestamp(), process.env.NODE_ENV === 'production' ? simple() : combine(colorize(), devFormat)),
    transports: [
        new winston_1.transports.Console({
            format: process.env.NODE_ENV === 'production' ? simple() : combine(colorize(), devFormat),
        }),
    ]
});
exports.default = logger;
