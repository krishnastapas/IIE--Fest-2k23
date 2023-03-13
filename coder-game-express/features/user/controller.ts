import { AddUser, FetchUsers } from "./repository";
import { Response, Request } from "express";
import { UserModel } from "./model";

export async function GetUserList(req: Request, res: Response) {
  let userList = await FetchUsers();
  return res.json({
    code: 200,
    message: "read successfully",
    data: userList,
  });
  // let out = "";

  // let keys = Object.getOwnPropertyNames(userList[0]);
  // let headers = "";
  // keys.forEach((e) => {
  //   headers += "<th>" + e + "</th>";
  // });

  // let rows = "";
  // for (let i = 0; i < userList.length; i++) {
  //   const element = userList[i];

  //   let values = Object.values(element);
  //   let row = "";
  //   values.forEach((e) => {
  //     row += "<th>" + e + "</th>";
  //   });

  //   if (row.length) {
  //     rows += "<tr>" + row + "</tr>";
  //   }
  // }
  // out =
  //   "<table>\
  //           <thead>" +
  //   headers +
  //   "</thead>\
  //   <tbody>" +
  //   rows +
  //   "</tbody>\
  //        </thead>";
  // return res.send(out);
}

export async function PostUserList(req: Request, res: Response) {
  let user: UserModel = req.body;
  let r = await AddUser(user);
  return res.json({
    code: 200,
    message: "created successfully",
    data: req.body,
  });
}

export function GetUser(req: Request, res: Response) {
  return res.json(FetchUsers());
}

export async function PostUser(req: Request, res: Response) {
  let user: UserModel = req.body;
  let r = await AddUser(user);
  return res.json({
    code: r.code,
    message: r.message,
  });
}

export function PatchUser(req: Request, res: Response) {
  return res.json(FetchUsers());
}

export function DeleteUser(req: Request, res: Response) {
  return res.json(FetchUsers());
}
