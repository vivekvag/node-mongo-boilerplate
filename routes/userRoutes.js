const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers); // GET all users
router.post('/', createUser); // Create a user

module.exports = router;
