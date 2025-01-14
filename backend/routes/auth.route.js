const { registerRoute } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/register", registerRoute);

module.exports = router;
