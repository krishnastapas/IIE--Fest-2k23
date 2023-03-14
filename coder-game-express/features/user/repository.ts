import { SQL } from "../../utils/sql.db";
import { UserModel } from "./model";
export interface UserRepoModel {
  code: number;
  message: string;
  data?: any;
}
export async function FetchUsers() {
  let sql: string =
    "SELECT `id`, `name`, `mail`, `year`, `department`" + "FROM users";
  let sqlRes = await SQL(sql, []);

  if (sqlRes.result == 0) {
    return [];
  }
  let data: UserModel[] = sqlRes.result;
  return data;
}

export async function ReadUserByMail(mail: string) {
  let sql: string =
    "SELECT `id`, `name`, `mail`, `compelete`, `active`, `stime`" +
    "FROM users WHERE `mail` = ?";
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

function QueryBuilder(payload: object) {
  let keys = Object.getOwnPropertyNames(payload);
  let values = Object.values(payload);
  let column = "";
  for (let i = 0; i < keys.length; i++) {
    column += "`keys[i];";
  }
}
export async function AddUser(user: UserModel) {
  let sql: string =
    "INSERT INTO `users`(`name`, `mail`, `compelete`, `active`)" +
    " VALUES ( ?, ?, ?, ? )";
  let sqlRes = await SQL(sql, [
    user.name,
    user.mail,
    user.compelete,
    user.active,
  ]);
  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };

  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  }

  data = sqlRes.result;
  data.code = 201;
  data.message = "created successfully";
  return data;
}

export async function UpdateUser(id: number, user: UserModel) {
  let sql: string =
    "UPDATE `users` SET `name` = ?, `mail` = ?, `compelete` =?, `active` =? WHERE `id` = ?";
  let sqlRes = await SQL(sql, [
    user.name,
    user.mail,
    user.compelete,
    user.active,
    id,
  ]);

  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };

  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  }

  data.code = 200;
  data.message = "updated successfully";
  return data;
}

export async function UpdateUserStime(id: number, user: UserModel) {
  let sql: string = "UPDATE `users` SET `stime` = ? WHERE `id` = ?";
  let sqlRes = await SQL(sql, [user.stime, id]);

  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };

  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  }

  data.code = 200;
  data.message = "updated successfully";
  return data;
}

export async function RemoveUser(id: number) {
  let sql: string = "DELETE FROM `users` WHERE `id` = ?";
  let sqlRes = await SQL(sql, [id]);

  let data: UserRepoModel = {
    code: 500,
    message: "internal server error",
  };

  if (sqlRes.result == 0) {
    data.message = sqlRes.err?.message!;
    return data;
  }

  data.code = 200;
  data.message = "deleted successfully";
  return data;
}
