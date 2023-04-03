const pool = require("../db/pool");
const { uuid } = require("uuidv4");
const common = require("./common/common");

const exec = async (req, res, next) => {
  const client = await pool.connect();
  await client.query("begin");
  let responseData = {};

  try {
    let data = req.body;
    console.log(data, "<<< data");

    let sql_user = `select * from public.user where user_name = $1`;
    let param_user = [data.userName];
    let response_user = await pool.query(sql_user, param_user);

    if (response_user.rowCount > 0) {
      responseData.success = false;
      responseData.data = "user duplicate";
    } else {
      let user_uuid = uuid();
      let encryptPwd = await common.commonService.encrypted(data.password);
      let sql = `insert into public."user" (user_uuid , first_name , last_name , user_name , password , create_date , create_by)values($1,$2,$3,$4,$5,now(),$6)`;
      let param = [
        user_uuid,
        data.firstName,
        data.lastName,
        data.userName,
        encryptPwd,
        user_uuid,
      ];

      let response = await pool.query(sql, param);
      responseData.success = true;
      client.query("commit");
    }
  } catch (error) {
    console.log(error, "<<< ERROR");
    responseData.success = false;
    client.query("rollback");
  } finally {
    client.release();
  }

  res.status(200).send(responseData);
  res.end();
};

module.exports = exec;
