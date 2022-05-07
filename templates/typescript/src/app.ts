import express, { Application, Request, Response } from "express";

const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.all("*", async (req, res) => {
  throw new Error("Route not found");
});

export { app };
