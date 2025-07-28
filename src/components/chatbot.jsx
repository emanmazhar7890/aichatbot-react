import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const Chatbot = () => {
  const { userDetail, logout } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const sendQuery = () => {
    if (!query) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);

    axios
      .post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBlczh9XtCoH5XgnNdxdjMnYSc86ORzTVA",
        {
          contents: [
            {
              parts: [
                {
                  text: "you are programmer and answer user query never answer anything outside programming and excuse for it ",
                },
                { text: query },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const aiReply = response.data.candidates[0].content.parts[0].text;
        const botMessage = { sender: "bot", text: aiReply };
        setMessages((prev) => [...prev, botMessage]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setQuery("");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Hello {userDetail.name}, ask your programming questions!</h2>
      <div
        className="response"
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        id="query"
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "70%", padding: "0.4rem" }}
      />
      <button onClick={sendQuery} style={{ padding: "0.5rem" }}>
        Send
      </button>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Chatbot;
