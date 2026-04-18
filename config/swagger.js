const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Banking System API",
      version: "1.0.0",
      description: "Simple Banking APIs with Login, Balance, Deposit",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        LoginRequest: {
          type: "object",
          required: ["email", "pin"],
          properties: {
            email: {
              type: "string",
              example: "alice@example.com",
            },
            pin: {
              type: "integer",
              example: 1234,
            },
          },
        },
        DepositRequest: {
          type: "object",
          required: ["userId", "amount"],
          properties: {
            userId: {
              type: "integer",
              example: 1,
            },
            amount: {
              type: "number",
              example: 500,
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
