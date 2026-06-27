import { useEffect, useState } from "react";

export default function Home() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/signals")
      .then(res => res.json())
      .then(data => setSignals(data));
  }, []);

  return (
    <div>
      <h1>🚀 Crypto Signals Dashboard</h1>
      {signals.map((s, i) => (
        <div key={i}>
          {s.symbol} → {s.signal}
        </div>
      ))}
    </div>
  );
}