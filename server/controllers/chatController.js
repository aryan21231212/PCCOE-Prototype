import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;
    const message = await Message.create({ sender, receiver, content });
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { sender, receiver } = req.query;
    const messages = await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
