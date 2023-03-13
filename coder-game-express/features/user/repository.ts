import { SQL } from "../../utils/sql.db";
import { UserModel } from "./model";
export interface UserRepoModel {
  code: number;
  message: string;
  user?: UserModel;
}
export async function FetchUsers() {
  let sql: string =
    "SELECT `id`, `name`, `mail`, `year`, `department`" + "FROM users";
  let sqlRes = await SQL(sql, []);
  let data: UserModel[] = sqlRes.result;
  console.log("======  data ======"); // Only Dev
  console.log(data[0].department); // Only Dev
  return data;
}
function QueryBuilder(payload: object) {
  let keys = Object.getOwnPropertyNames(payload);
  let values = Object.values(payload);
  let column = "";
  for (let i = 0; i < keys.length; i++) {
    column += "`keys[i];";
  }
}
export async function AddUser(user: UserModel) {
  // "SELECT `id`, `name`, `mail`, `year`, `department`" + "FROM users";
  QueryBuilder(user);
  let sql: string =
    "INSERT INTO `users`(`name`, `mail`, `year`, `department`)" +
    " VALUES ( ?, ?, ?, ? )";
  let sqlRes = await SQL(sql, [
    user.name,
    user.mail,
    user.year,
    user.department,
  ]);
  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };
  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  } // let data: UserModel[] = sqlRes.result;
  // console.log("======  data ======"); // Only Dev
  // console.log(sqlRes); // Only Dev
  data.user = sqlRes.result;
  data.code = 201;
  data.message = "created successfully";
  return data;
}
