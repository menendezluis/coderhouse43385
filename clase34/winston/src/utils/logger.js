import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "http",
    }),
    new winston.transports.File({
      filename: "./erros.log",
      level: "warn",
    }),
  ],
});

const devLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "verbose",
    }),
  ],
});

const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "http",
    }),
    new winston.transports.File({
      filename: "./erros.log",
      level: "warn",
    }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = process.env.ENVIROMENT === "production" ? devLogger : prodLogger;
  console.log(req.logger);
  let { body } = req;
  let bodyData = { ...body };
  console.log(bodyData);

  if (req.method === "POST" || req.method === "PUT") {
    bodyData = JSON.stringify(bodyData);
  } else {
    bodyData = "";
  }

  req.logger.http(
    `ruta:${req.method} ${
      req.url
    } - ${new Date().toLocaleTimeString()} - data:${bodyData}`
  );
  next();
};
