import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import companyRoutes from "./routes/companyRoutes.js";
import connectDB from "./configs/db.js";

dotenv.config();

try {
    connectDB();
} catch (error) {
    console.log("Error while connecting to the database");
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("All systems active");
});

app.use("/api/companies", companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));