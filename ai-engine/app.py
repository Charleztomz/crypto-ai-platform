from fastapi import FastAPI
import random

app = FastAPI()

@app.get("/predict")
def predict():
    coins = ["BTCUSDT", "ETHUSDT", "SOLUSDT"]
    signals = []

    for coin in coins:
        signals.append({
            "symbol": coin,
            "signal": random.choice(["BUY", "SELL"])
        })

    return signals