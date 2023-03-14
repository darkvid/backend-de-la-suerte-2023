"use client";
import { useState, useEffect } from "react";
import pb from "@/lib/pocketbase";

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

const mockCommand = {
  text: "",
  timestamp: ""
};

const ShowCommand = () => {
  const [lastCommand, setLastCommand] = useState(mockCommand);

  useEffect(() => {
    const fetchLastCommand = async () => {
      const result = await pb.collection("commands").getList(1, 1, {
        sort: "-created"
      });
      if (result && result.items.length > 0) {
        setLastCommand({text: result.items[0].command, timestamp: result.items[0].timestamp});
      }
    };
    fetchLastCommand();
  }, []);

  return (
    <div>
      <h2>Last command:</h2>
      {/* <p>{lastCommand.text}</p> */}
      <p>{formatDate(lastCommand.timestamp)}</p>
    </div>
  );
};

export default ShowCommand;
