const pool = require("../db/pool");
const { uuid } = require("uuidv4");
const common = require("./common/common");

const exec = async (req, res) => {
  const client = await pool.connect();
  await client.query("begin");
  let responseData = {};

  try {
    let data = await req.body;

    let checkuser = `select * from public.prac where user_name = $1`;
    let paramcheck = [data.username];
    let responsecheck = await pool.query(checkuser, paramcheck);

    if (responsecheck.rowCount > 0) {
      responseData.success = false;
      responseData.data = "user duplicate";
    } else {
      let user_id = uuid();
      let encryptedPwd = await common.commonService.encrypted(data.password);

      let writedata = `insert into public.prac (user_id, user_name , user_password , create_date ) values($1 , $2, $3 , now())`;
      let paramwritedata = [user_id, data.username, encryptedPwd];
      let responsewrite = await pool.query(writedata, paramwritedata);

      responseData.success = true;
      client.query("commit");
    }
  } catch (error) {
    console.log(error);
    responseData.success = false;
    client.query("rollback");
  } finally {
    client.release();
  }

  res.status(200).send(responseData);
  res.end();
};

module.exports = exec;
