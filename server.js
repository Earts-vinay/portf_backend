
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Connection error:", error));

   
    app.use('/api/users', userRoutes);
    

const PORT = process.env.PORT || 8000;
app.listen(PORT,"192.168.1.6", () => console.log(`Server running on port ${PORT}`));

