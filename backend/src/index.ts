import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import bookRoutes from "./routes/book"
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

app.use("/api/book", bookRoutes)

app.get("/api/test", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const connect = (next: () => void) => {
    mongoose.connect(process.env.MONGO as string)
    .then(() => {
        console.log("Mongodb connected");
        next()
    })
    .catch((err: any) => {
        throw err;
    });
};

connect(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})

