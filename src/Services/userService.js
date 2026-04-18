const User = require("../Models/userModel");

const { sequelize } = require("../../config/db");

// LOGIN
const login = async (email, pin) => {
  return await User.findOne({ where: { email, pin } });
};

// BALANCE
const getBalance = async (userId) => {
  return await User.findByPk(userId);
};

// DEPOSIT (TRANSACTION)
const deposit = async (userId, amount) => {
  const t = await sequelize.transaction();

  try {
    const user = await User.findByPk(userId, { transaction: t });

    if (!user) throw new Error("User not found");

    user.balance = parseFloat(user.balance) + parseFloat(amount);

    await user.save({ transaction: t });

    await t.commit();

    return user;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

module.exports = { login, getBalance, deposit };
