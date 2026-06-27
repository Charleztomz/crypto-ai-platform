const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 6001 });

wss.on("connection", ws => {
  setInterval(() => {
    ws.send(JSON.stringify({
      symbol: "BTCUSDT",
      price: Math.random() * 50000
    }));
  }, 2000);
});