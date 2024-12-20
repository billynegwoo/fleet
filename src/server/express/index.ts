import express from "express";
import cors from "cors";
import { employeeRouter } from "./routes/employees";
import { deviceRouter } from "./routes/devices";

const app = express();
const port = process.env.EXPRESS_PORT ?? 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/employees", employeeRouter);
app.use("/api/devices", deviceRouter);

// Error handling middleware
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something broke!" });
  },
);

export const startServer = () => {
  app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
  });
};
