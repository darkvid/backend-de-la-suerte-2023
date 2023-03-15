"use client";
import { useState } from "react";
import pb from "@/lib/pocketbase";

const SaveCommand = () => {
  const [timestamp, setTimestamp] = useState(calculateCurrentTimestamp());
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    save(timestamp, setLoading);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="timestamp">Date and time</label>
        <input
          id="timestamp"
          type="datetime-local"
          value={timestamp}
          onChange={(event) => setTimestamp(event.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button type="submit" disabled={loading}>
          Save
        </button>
      )}
    </form>
  );
};

const calculateCurrentTimestamp = () => {
  const now = new Date();
  return `${now.getFullYear()}-${padNumber(now.getMonth() + 1)}-${padNumber(
    now.getDate()
  )}T${padNumber(now.getHours())}:${padNumber(now.getMinutes())}`;
};

const padNumber = (number: Number) => {
  return number.toString().padStart(2, "0");
};

const save = async (timestamp: string, setLoading: (value: boolean) => void) => {
  setLoading(true);
  // logica para guardar la comanda
  // ahora mismo sin comanda, solo fecha y hora
  const data = {
    "command": "vacio",
    "timestamp": new Date(timestamp)
  };

  const record = await pb.collection('commands').create(data).then((result) => {
    setLoading(false);
  });
};


export default SaveCommand;
