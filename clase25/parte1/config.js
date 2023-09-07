import dotenv from "dotenv";

function getEnvironment(mode) {
  const isProduction = mode === "PRODUCTION";
  dotenv.config({
    path: isProduction ? "./.env.production" : "./.env.development",
  });

  return {
    PORT: process.env.PORT || 8080,
    ENVIRONMENT: isProduction ? "PRODUCTION" : "DEVELOPMENT",
  };
}
export default getEnvironment;
