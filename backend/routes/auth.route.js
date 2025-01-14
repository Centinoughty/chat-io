const { registerRoute } = require("../controllers/auth.controller");

const router = require("express").Router();

router.get("/register", registerRoute);

module.exports = router;
