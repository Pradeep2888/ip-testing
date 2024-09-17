"use client"; // Mark as Client Component

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [ip, setIp] = useState(""); // State to store the IP address

  useEffect(() => {
    console.log("Fetching IP Address...");
    
    // Fetch IP address using Axios
    axios.get('/api/ip')
      .then((response) => {
        console.log(response.data); // Log the response for debugging
        setIp(response.data.ip); // Set the IP address to state
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      {ip && <p>Your IP Address is: {ip}</p>} {/* Conditionally render IP */}
    </div>
  );
}
