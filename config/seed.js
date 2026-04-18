const User = require("../src/Models/userModel");

const seedUsers = async () => {
  const count = await User.count();

  if (count === 0) {
    await User.bulkCreate([
      {
        name: "Alice",
        email: "alice@example.com",
        pin: 1234,
        balance: 1000,
      },
      {
        name: "Bob",
        email: "bob@example.com",
        pin: 5678,
        balance: 500,
      },
    ]);
    console.log("Seed data inserted");
  }
};

module.exports = seedUsers;
