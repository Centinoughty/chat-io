const { registerUser, loginUser } = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", registerUser);

// curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json"  -d '{"email": "test@example.com", "password": "test@123"}'
router.post("/login", loginUser);

module.exports = router;
