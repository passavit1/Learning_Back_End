const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(403).send("Token is required");
  }

  let key = "westride123";

  try {
    token = token.split(" ");
    console.log(`Token: ${token[1]}`);
    console.log(`Key: ${key}`);
    let decode = jwt.verify(token[1], key);
    console.log(`Decode: ${JSON.stringify(decode)}`);
    req._user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = verifyJwt;
