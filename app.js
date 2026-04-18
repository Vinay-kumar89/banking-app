const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const { connectDB } = require("./config/db");
const seedUsers = require("./config/seed");

const userRoutes = require("./src/Routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const startServer = async () => {
  await connectDB();
  await seedUsers();

  app.listen(3000, () => {
    console.log(" Server running on port 3000");
  });
};

startServer();
