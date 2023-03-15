import mysql from "mysql";

// chat_auth DataBase Connection
const chat_auth = mysql.createConnection({
  host: "ec2-3-110-167-11.ap-south-1.compute.amazonaws.com",
  user: "root",
  password: "hFs5ehD7sjdV5te",
  database: "iie_fest",
});

var mysql_pool = mysql.createPool({
  connectionLimit: 100,
  host: "ec2-3-110-167-11.ap-south-1.compute.amazonaws.com",
  user: "root",
  password: "hFs5ehD7sjdV5te",
  database: "iie_fest",
});
// // Check If E-mail Already Used By Any Account
// export const emailCheckSQL = async (email) => {
//     // Return
//     // '0' = email not found
//     // '1' = email found
//     // '2' = sql error
//     let rout = 0;
//     var error;
//     chat_auth.connect((err) => {
//         error = err;
//     });
//     const db = async () => {
//         return new Promise((resolve) => {
//             chat_auth.query("SELECT * FROM userauth WHERE email = ?", [email],
//                 (err, result) => {
//                     // rout = 45;
//                     if (err == null) {
//                         if (result[0] != undefined) {
//                             console.log('Email Check SQL');  // only dev
//                             console.log(result[0].email);  // only dev
//                             rout = 1;
//                         } else { rout = 0; }
//                     } else { rout = 2; console.log('E2' + err); }
//                     // console.log('empty array');  // only dev
//                     // console.log(result);  // only dev
//                     resolve({ result: !err });
//                 });

//         });
//     }
//     if (error == null) {
//         const ans = await db();
//     } else { rout = 2; console.log('E1' + err); }

//     // chat_auth.end();
//     // or
//     // And done with the connection.
//     // connection.release();
//     // chat_auth.destroy();
//     return rout;
// }

// // Create New Account
// export const createAccountSQL = async (fbName, email) => {
//     let rout = 0;
//     var error;
//     chat_auth.connect((err) => {
//         error = err;
//     });
//     const db = async () => {
//         return new Promise((resolve) => {
//             var sql = "INSERT INTO `userauth` (`fbname`, `email`) \
//              VALUES ( ? , ? )";
//             chat_auth.query(sql, [fbName, email],
//                 (err, result) => {
//                     if (err == null) {
//                         console.log("insertId = " + result.insertId);
//                         rout = result.insertId;
//                     } else { rout = 2; console.log('C E 2 ' + err); }
//                     resolve({ result: !err });
//                 });
//         });
//     }

//     if (error == null) {
//         const ans = await db();
//     } else { rout = 2; console.log('C E 1 ' + err); }

//     // chat_auth.destroy();
//     return rout;
// }
// // Update Chat_auth => userauth
// export const updateUserAuth = async (data) => {
//     let rout = 0;
//     var error;
//     chat_auth.connect((err) => {
//         error = err;
//     });
//     const db = async () => {
//         return new Promise((resolve) => {
//             var sql = "UPDATE `userauth` SET `username` = ? WHERE `id` = ? AND `email` = ? ";
//             // var sql = "INSERT INTO `userauth` (`fbname`, `email`) \
//             //  VALUES ( ? , ? )";
//             chat_auth.query(sql, [data.userName, data.id, data.email],
//                 (err, result) => {
//                     if (err == null) {
//                         // console.log("insertId = " + result.insertId);
//                         rout = result.insertId;
//                     } else { rout = 2; console.log('C E 2 ' + err); }
//                     resolve({ result: !err });
//                 });
//         });
//     }

//     if (error == null) {
//         const ans = await db();
//     } else { rout = 2; console.log('C E 1 ' + err); }

//     // chat_auth.destroy();
//     return rout;
// }
// export interface SQLResponseInterface {
//   err?: {
//     code?: string;
//     message?: string;
//   };
//   result?: any;
// }
export interface SQLResponseInterface {
  err?: {
    code: string;
    message: string;
  };
  result: any;
}
//parameter
export async function SQL1(
  sql: string,
  data: any[]
): Promise<SQLResponseInterface> {
  let rout = { result: 0 };
  var error;

  chat_auth.connect((err) => {
    error = err;
  });

  const db = async () => {
    return new Promise((resolve) => {
      chat_auth.query(sql, data, (err, result) => {
        if (err == null) {
          let data: SQLResponseInterface = {
            result: result,
          };
          chat_auth.destroy();
          resolve(data);
        } else {
          let data: SQLResponseInterface = {
            result: 0,
            err: {
              code: err.code,
              message: err.message,
            },
          };
          chat_auth.destroy();
          resolve(data);
        }
      });
    });
  };

  if (error == null) {
    rout = (await db()) as SQLResponseInterface;
  }

  // Its has a problem
  // chat_auth.destroy();
  return rout;
}

export async function SQL(
  sql: string,
  data: any[]
): Promise<SQLResponseInterface> {
  let rout: SQLResponseInterface = { result: 0 };
  var error;

  const db = async () => {
    return new Promise((resolve) => {
      mysql_pool.getConnection(function (err, connection) {
        if (err) {
          connection.release();
          resolve({
            result: 0,
            err: {
              code: "500",
              message: err.message,
            },
          });
        }
        connection.query(sql, data, function (err2, rows, fields) {
          if (err2) {
            resolve({
              result: 0,
              err: {
                code: "500",
                message: err2.message,
              },
            });
          } else {
            if (rows.length == 0) {
              resolve({
                result: 0,
                err: {
                  code: "404",
                  message: "Not Found",
                },
              });
            } else {
              resolve({ result: rows });
            }
          }
          // console.log(rout); // Only Dev
          // console.log(" mysql_pool.release()");
          connection.release();
        });
      });
    });
  };

  if (error == null) {
    rout = (await db()) as SQLResponseInterface;
  }
  // Its has a problem
  // chat_auth.destroy();
  return rout;
}
// ############## SQL ERROR

// Okay Query
// {
//   result: OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 27,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
// }
// code: 'ER_NO_SUCH_TABLE',
// errno: 1146,
