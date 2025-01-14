const router = require("express").Router();
const auth = require("../middlewares/auth");

router.post("/new-message", auth);

module.exports = router;
