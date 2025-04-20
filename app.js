const express = require("express");
const cors = require("cors");

const tempRoutes = require("./routes/temp");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/temp", tempRoutes);

app.listen(PORT, () => {
  console.log(`API Server started at http://localhost:${PORT}`);
});
