const crypto = require("crypto");

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

module.exports = {
  commonService: {
    encrypted,
  },
};
