const router = require ("express").Router();
const { register,login, profile } = require ("./controllers/authController");
const restrict = require ("./middleware/restrict");

router.post("/register", register);
router.post("/login", login);
router.get("/home", restrict, profile);

module.exports = router;