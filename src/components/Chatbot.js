import React, { useState } from "react";
import "../stylesheet.css"; // Import the new stylesheet

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { type: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8000/api/chatbot/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      const botMessage = { type: "bot", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { type: "bot", text: "Sorry, an error occurred." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h1>AI Chatbot</h1>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-avatar">{message.type === "user" ? "U" : "B"}</div>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">Just now</span>
            </div>
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your question"
        />
        <button type="submit" className="send-button">Submit</button>
      </form>
    </div>
  );
}

export default Chatbot;