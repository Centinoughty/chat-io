const router = require("express").Router();
const {
  getUserDetails,
  getAllUsers,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/get-user", auth, getUserDetails);
router.get("/get-all-users", auth, getAllUsers);

module.exports = router;
