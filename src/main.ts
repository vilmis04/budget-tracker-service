import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" with { type: "json" };
import { TransactionController } from "./transaction/controller.ts";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const router = express.Router();

router.get("/health", (_req, res) => {
  res.send("alive");
});

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

new TransactionController(router, express.Router()).use();

app.use("/api", router);

console.log("Listening on port 8000");
app.listen(8000);
