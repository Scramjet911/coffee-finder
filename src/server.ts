import express from "express";
import bodyParser from "body-parser";
import connect from "./config/db";
import coffeeShopRoutes from "./routes/coffeeShopRoutes";
import productRoutes from "./routes/productRoutes";
import logger from "./utils/logger";
import morganMiddleware from "./middleware/loggerMiddleware";
import corsMiddleware from "./middleware/corsMiddleware";

const app = express();

connect();

app.use(bodyParser.json());

app.use("/api/coffee-shops", coffeeShopRoutes);
app.use("/api/coffee-shops", productRoutes);
app.use(morganMiddleware);
app.use(corsMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
