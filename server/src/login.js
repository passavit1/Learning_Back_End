const pool = require("../db/pool");
const common = require("./common/common");

const exec = async (req, res, next) => {
  let responseData = {};
  let client = await pool.connect();

  try {
    await client.query("BEGIN");
    let data = req.body;

    let sql = `SELECT * FROM public.user where user_name = $1`;
    let param = [data.userName];
    let responseUser = await pool.query(sql, param);

    if (responseUser.rowCount < 1) {
      responseData.success = false;
      responseData.data = "user not found";
    } else if (!responseUser.rowCount < 1) {
      let decryptedPwd = await common.commonService.decrypted(
        responseUser.rows[0].password
      );

      if (decryptedPwd == data.password) {
        let tokenObj = { user_id: responseUser.rows[0].password };
        responseData.success = true;
        responseData.data = responseUser.rows.map((i) => ({
          id: i.user_uuid,
          firstName: i.first_name,
          lastName: i.last_name,
          userName: i.user_name,
        }));

        // Generate token every time the user is logged in
        responseData._token = await common.commonService.generateToken(
          tokenObj
        );
      } else {
        responseData.success = false;
        responseData.data = "wrong password";
      }
    }
  } catch (error) {
    console.log(error);
    responseData.success = false;
  } finally {
    client.release();
  }
  res.status(200).send(responseData);
  return res.end();
};

module.exports = exec;
