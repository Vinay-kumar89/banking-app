const userService = require("../Services/userService");

// LOGIN
const login = async (req, res) => {
  try {
    const { email, pin } = req.body;

    if (!email || !pin) {
      return res.status(400).json({ error: "Email and PIN required" });
    }

    const user = await userService.login(email, pin);

    if (!user) {
      return res.status(400).json({ error: "Invalid email or PIN" });
    }

    res.json({ message: "Login successful", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// BALANCE
const getBalance = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userService.getBalance(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ userId: user.id, balance: user.balance });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// DEPOSIT
const deposit = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }

    const user = await userService.deposit(userId, amount);

    res.json({
      message: "Deposit successful",
      balance: user.balance,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login, getBalance, deposit };
