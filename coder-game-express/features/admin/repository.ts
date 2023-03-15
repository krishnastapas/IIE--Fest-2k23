import { SQL } from "../../utils/sql.db";
import { AdminModel } from "./model";
export interface UserRepoModel {
  code: number;
  message: string;
  data?: any;
}
export async function ReadAdminByMail(mail: string) {
  let sql: string =
    "SELECT `id`, `name`, `mail`, `password` FROM admins WHERE `mail` = ?";
  let sqlRes = await SQL(sql, [mail]);
  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };

  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  }

  data.data = sqlRes.result;
  data.code = 200;
  data.message = "read successfully";
  return data;
}
