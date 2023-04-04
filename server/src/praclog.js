const pool = require("../db/pool");
const common = require("./common/common");

const exec = async (req, res) => {
  const client = await pool.connect();
  await client.query("begin");
  let responseData = {};

  try {
    let data = req.body;

    let dupuser = `select * from public.prac where user_name = $1`;
    let paramcheckdup = [data.username];
    let responsecheckdup = await pool.query(dupuser, paramcheckdup);

    console.log(responsecheckdup, "<<< check duplicate");

    if (responsecheckdup.rowCount < 1) {
      responseData.success = false;
      responseData.data = "user not found";
    } else {
      let decryptedPwd = await common.commonService.decrypted(
        responsecheckdup.rows[0].user_password
      );

      if (decryptedPwd === data.password) {
        responseData.success = true;
        responseData.data = "login successful";
      } else {
        responseData.success = false;
        responseData.data = "password wrong";
      }
    }
  } catch (error) {
    console.log(error, "<<< error");
    responseData.success = false;
    client.query("rollback");
  } finally {
    client.release();
  }

  res.status(200).send(responseData);
  res.end();
};

module.exports = exec;
