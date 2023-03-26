const pool = require("../db/pool");
const common = require("../src/common/common");

const exec = async (req, res, next) => {
  let client = await pool.connect();
  let responseData = {};
  let tokenObj = { user_id: req._user.user_id };

  try {
    let sql = `SELECT pokemon_id, count(pokemon_id) as score FROM public.vote group by pokemon_id order by count(pokemon_id) desc;`;

    let response = await pool.query(sql);
    console.log(response);

    if (response.rows.length) {
      console.log("inner");
      responseData.success = true;
      responseData.data = response.rows;
    } else {
      responseData.success = false;
    }
  } catch (error) {
    console.error(error);
    responseData.success = false;
  } finally {
    client.release();
  }
  responseData._token = await common.commonService.generateToken(tokenObj);
  res.status(200).send(responseData);
  return res.end();
};

module.exports = exec;
