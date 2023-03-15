import {
  AddUser,
  FetchUsers,
  RemoveUser,
  UpdateUser,
  UpdateUserStime,
  ReadUserByMail,
} from "./repository";
import { Response, Request } from "express";
import { UserModel } from "./model";
interface ResponseInterface {
  code: number;
  message: string;
  data?: any;
}
export async function GetUserList(req: Request, res: Response) {
  let r = await FetchUsers();

  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "read successfully",
    data: r.data,
  });
}

export async function GetUserByMail(req: Request, res: Response) {
  let mail: string = req.params.mail;
  let r = await ReadUserByMail(mail);
console.log(r);   // Only Dev
  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "read successfully",
    data: r.data,
  });
}

export async function PostUserList(req: Request, res: Response) {
  let user: UserModel = req.body;
  console.log(req.body); // Only Dev
  let r = await AddUser(user);
  if (!(r.code != 201))
    return res.json({
      code: r.code,
      message: r.message,
      data: req.body,
    });

  return res.json({
    code: 201,
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
  if (r.code !== 201) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "created successfully",
  });
}

export async function PatchUser(req: Request, res: Response) {
  let mail: number = parseInt(req.params.mail);
  let user: UserModel = req.body;

  let r = await UpdateUser(mail, user);
  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "updated successfully",
  });
}

export async function PatchUserStime(req: Request, res: Response) {
  let id: number = parseInt(req.params.id);
  let user: UserModel = req.body;

  let r = await UpdateUserStime(id, user);
  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "updated successfully",
  });
}
export async function DeleteUser(req: Request, res: Response) {
  let id: number = parseInt(req.params.id);

  let r = await RemoveUser(id);
  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

  return res.json({
    code: 200,
    message: "deleted successfully",
  });
}
