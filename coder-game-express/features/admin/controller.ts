import { ReadAdminByMail } from "./repository";
import { Response, Request } from "express";
import { AdminModel } from "./model";
interface ResponseInterface {
  code: number;
  message: string;
  data?: any;
}

export async function PostAdminLogin(req: Request, res: Response) {
  let admin: AdminModel = req.body;

  let r = await ReadAdminByMail(admin.mail);

  if (r.code !== 200) {
    return res.json({
      code: r.code,
      message: r.message,
    });
  }

 let adminData = r.data[0] as AdminModel;
  console.log(admin.password);   // Only Dev
  console.log(adminData.password);   // Only Dev

  if (admin.password !== adminData.password) {
    return res.json({
      code: 403,
      message: "unauthorized",
    });
  }

  return res.json({
    code: 200,
    message: "read successfully",
    data: r.data,
  });
}
