// backend/server.js (or existing file)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

import Message from "./models/Message.js"; // existing
// ensure Transaction model is imported somewhere if needed: import Transaction from "./models/Transaction.js";

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/analytics", analyticsRoutes);

// SOCKET.IO
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("joinRoom", ({ userId }) => {
    if (!userId) return;
    socket.join(userId);
    console.log(`User ${userId} joined room`);
  });

  socket.on("privateMessage", async (payload) => {
    // payload: { sender, receiver, content, timestamp }
    try {
      // Save message to DB
      const saved = await Message.create({
        sender: payload.sender,
        receiver: payload.receiver,
        content: payload.content,
        timestamp: payload.timestamp || Date.now()
      });

      // If receiver is a specific user id -> emit to that room
      if (payload.receiver && payload.receiver !== "broadcast") {
        io.to(payload.receiver).emit("receiveMessage", saved);
      } else {
        // broadcast to everyone
        io.emit("receiveMessage", saved);
      }
    } catch (err) {
      console.error("Socket message save failed", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server listening on ${PORT}`));
