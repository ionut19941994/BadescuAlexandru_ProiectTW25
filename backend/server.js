const app = require("./app");
const { sequelize } = require("./database/server");

const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

