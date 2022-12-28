import { Socket } from "socket.io";

export function socketConnectionHandler(socket: Socket) {
  console.log(`[SOCKET] Client ${socket.id} connected.`);

  socket.on("disconnect", (reason) => {
    console.log(
      `[SOCKET] Client ${socket.client} disconnected. Reason: ${reason}.`
    );
  });
}
