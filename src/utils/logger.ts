import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, splat, simple } = format;

const devFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: combine(
    splat(),
    timestamp(),
    process.env.NODE_ENV === 'production' ? simple() : combine(colorize(), devFormat)
  ),
  transports: [
    new transports.Console({
      format: process.env.NODE_ENV === 'production' ? simple() : combine(colorize(), devFormat),
    }),
  ]
});

export default logger;
