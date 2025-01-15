const {
  registerRoute,
  loginRoute,
  logoutRoute,
  updateProfile,
  checkAuth,
} = require("../controllers/auth.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = require("express").Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/logout", logoutRoute);

router.put("/update-profile", authMiddleware, updateProfile);
router.get("/check", authMiddleware, checkAuth);

module.exports = router;
