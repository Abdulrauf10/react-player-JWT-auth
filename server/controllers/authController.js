const { User } = require ("../models");

function format(user) {
  const { id, email } = user;
  return {
    id,
    email,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.json({ message: "successfully registered" });
      })
      .catch((err) => {
        res.status(500).json({
          result: "FAILED",
          message: err.message || "can not register",
        });
      });
    },
    
  login: (req, res) => {
    User.authenticate(req.body)
      .then((user) => {
        res.json(format(user));
      })
      .catch((err) => {
        res.status(500).json({
          result: "FAILED",
          message: err || "error to login",
        });
      });
  },

  profile: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser)
  }
};