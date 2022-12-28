import "reflect-metadata";
import "express-async-errors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { socketConnectionHandler } from "./socket";

const app = express();

export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socketConnectionHandler);

app.use(handleErrorMiddleware);

export default server;
