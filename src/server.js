const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();  // load .env

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log("Swagger docs available at http://localhost:5000/api-docs");

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
