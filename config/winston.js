import { Logger, transports } from "winston";

const logger = new Logger({
  transports: [
    new transports.Console({
      level: "DEBUG",
      prettyPrint: true,
      humanReadableUnhandledException: true,
      handleExceptions: true,
      json: false,
      label: "SERVER",
      colorize: true
    })
  ],
  exitOnError: false
});

export default logger;
