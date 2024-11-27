const router = require("express").Router();
const { getUserDetails } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/get-user", auth, getUserDetails);

module.exports = router;
