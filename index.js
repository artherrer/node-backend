const express = require("express");
const authMiddleware = require("./middlewares/auth");
const authRoutes = require("./routes/authentication");
const employeesRoutes = require("./routes/employees");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use(authMiddleware);
app.use("/employees", employeesRoutes);

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
