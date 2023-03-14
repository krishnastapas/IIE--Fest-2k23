import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DeleteUser, GetUserList, GetUserByMail, PatchUser, PatchUserStime, PostUser } from "./features/user/controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// ==========   User   ========== \\
app.get("/api/user-list", GetUserList);
app.get("/api/user-by-mail/:mail", GetUserByMail);

app.post("/api/user", PostUser);
app.delete("/api/user/:id", DeleteUser);
app.patch("/api/user/:id", PatchUser);
app.patch("/api/user/:id/stime", PatchUserStime);


// // ==========   admin   ========== \\
// app.post("/api/admin/login", PostUser);


// // ==========   User   ========== \\
// app.get("/api/answer-list", GetUserList);
// app.get("/api/answer-list/:mail", GetUserList);
// app.get("/api/score-list", GetUserList);

// app.post("/api/answer", PostUser);
// app.delete("/api/answer/:id", PostUser);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
