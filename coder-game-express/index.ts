import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { GetUserList, PostUser } from "./features/user/controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;
app.use(express.json())
app.use(express.static('public'))

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.post("/api/add-ans", (req: Request, res: Response) => {
  return res.json({
    code: 200,
    message: "created successfully",
    data: req.body,
  });
});

app.get('/api/user-list',GetUserList)
app.post('/api/user',PostUser)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
