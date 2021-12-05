const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRETKEY;
const authentication = (req, res, next) => {
  try {
      console.log(req.headers);
    if (!req.headers.authorization)
      return res.status(403).json({ message: "forbidden" });

    const token = req.headers.authorization.split(" ")[1];

    const parsedToken = jwt.verify(token, secret);
    req.token = parsedToken;
    console.log(token);
    next();
  } catch (error) {
    res.status(403).json(error);
  }
};

module.exports = {
  authentication,
};
