const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_URL.replaceAll("<password>", process.env.DATABASE_PASSWRD);

mongoose.connect(DB).then(() => {
  console.log("Mongodb is connecteed");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
