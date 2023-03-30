const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const encrypted = async (data) => {
  try {
    let algo = "aes256";
    let key = "westride123";
    let cipher = crypto.Cipher(algo, key);
    let encrypted = cipher.update(data, "utf8", "hex") + cipher.final("hex");
    return encrypted;
  } catch (error) {
    console.error(error);
  }
};

const decrypted = async (data) => {
  try {
    let algo = "aes256";
    let key = "westride123";
    let decipher = crypto.Decipher(algo, key);
    let decrypted =
      decipher.update(data, "hex", "utf8") + decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.error(error);
  }
};

const generateToken = async (data) => {
  try {
    let key = "westride123";
    let token = jwt.sign(data, key, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(error);
  }
};

// export anything that
module.exports = {
  commonService: {
    encrypted,
    decrypted,
    generateToken,
  },
};
