const express = require('express');
const router = express.Router();

const users = [];

function validateName(req, res, next) {
  const { username, password, email } = req.body;
  const emailFormat = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
  if (!username || username === '' || username.length <= 3 && password.length >= 4 ||  password.length <= 8 && emailFormat.test(email)) return res.status(400).json({ "message": "invalid data" });
  next();
};

router.post('/user/register', validateName, function (req, res) {
    const { username , email, password } = req.body;
    users.push({ username , email, password });
    res.status(201).json({ "message": "user created" });
});

module.exports = router;