import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/authRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});


app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/chat", chatRoutes);


io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
