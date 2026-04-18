const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

/**
 * @swagger
 * tags:
 *   name: User
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: alice@example.com
 *               pin:
 *                 type: integer
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", userController.login);

/**
 * @swagger
 * /balance/{userId}:
 *   get:
 *     summary: Get user balance
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User balance fetched
 */
router.get("/balance/:userId", userController.getBalance);

/**
 * @swagger
 * /deposit:
 *   post:
 *     summary: Deposit money
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Deposit successful
 */
router.post("/deposit", userController.deposit);

module.exports = router;
