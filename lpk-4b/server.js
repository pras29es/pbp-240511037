require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const itemsRouter = require("./routes/items");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", itemsRouter);

const PORT = process.env.PORT || 3000;

// Koneksi Database & Menjalankan Server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB terhubung");
    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Gagal koneksi MongoDB:", err.message);
    process.exit(1);
  });
