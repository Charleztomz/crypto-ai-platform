const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot("YOUR_TOKEN", { polling: true });

function sendSignal(signal) {
  bot.sendMessage("CHAT_ID", `${signal.symbol} → ${signal.signal}`);
}

module.exports = sendSignal;