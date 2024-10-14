const { defineDmmfProperty } = require("@prisma/client/runtime/library");

module.exports = {
    apps: [
      {
        name: "inventory-management",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
          ENV_VAR1: "environment-variable",
        },
      },
    ],
  };
