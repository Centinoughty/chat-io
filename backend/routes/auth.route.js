const { registerRoute, loginRoute, logoutRoute } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/logout", logoutRoute);

module.exports = router;
