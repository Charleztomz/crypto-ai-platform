const Binance = require("node-binance-api");

const binance = new Binance().options({
  APIKEY: process.env.API_KEY,
  APISECRET: process.env.API_SECRET
});

async function executeTrade(symbol, signal) {
  if (signal === "BUY") {
    await binance.marketBuy(symbol, 0.01);
  } else {
    await binance.marketSell(symbol, 0.01);
  }
}

module.exports = executeTrade;