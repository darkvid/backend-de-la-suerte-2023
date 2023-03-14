"use client";
import { useState } from "react";

const SaveCommand = () => {
  const [command, setCommand] = useState("");
  const [timestamp, setTimestamp] = useState(calculateCurrentTimestamp());

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimestamp(calculateCurrentTimestamp());
    save(command, timestamp);
    setCommand("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="command">Command</label>
        <textarea
          id="command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
        />
      </div> */}
      <div>
        <label htmlFor="timestamp">Date and time</label>
        <input
          id="timestamp"
          type="datetime-local"
          value={timestamp}
          onChange={(event) => setTimestamp(event.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const calculateCurrentTimestamp = () => {
  const now = new Date();
  return `${now.getFullYear()}-${padNumber(now.getMonth() + 1)}-${padNumber(
    now.getDate()
  )}T${padNumber(now.getHours())}:${padNumber(now.getMinutes())}`;
};

const padNumber = (number) => {
  return number.toString().padStart(2, "0");
};

const save = (command, timestamp) => {
  // Aquí iría la lógica para guardar la comanda con el timestamp
  console.log(`Comanda: ${command}, Fecha y Hora: ${timestamp}`);
};

export default SaveCommand;
