import { useState, useEffect } from "react";
import ChatShell from "./ChatShell";

// Mock data - starting point
const mockMessages = [
  { id: "m1", role: "model", content: "Halo! Aku chatbot 🙂" },
  { id: "m2", role: "user", content: "Nanti kita fokus ke hooks ya?" },
  {
    id: "m3",
    role: "model",
    content: "Yes. Mulai dari useState sampai custom hook.",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState(mockMessages);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("message length :", messages.length);
  }, [messages.length]);

  function handleSend(text) {
    // TODO: Implementasi logic untuk mengirim message
    if (!text.trim()) {
      console.log(" empty text, ignore ");
      return;
    }

    if (text.toLowerCase().includes("error")) {
      setStatus("error");
      setError('Simulasi error: kata "error" terdeteksi!');
      return;
    }

    console.log("text valid");

    const userMessage = {
      id: `m${Date.now()}`,
      role: "user",
      content: text,
    };

    setMessages((prev) => {
      console.log("previous message :", prev.length);
      const newMessages = [...prev, userMessage];
      console.log("New messages :", newMessages);
      return newMessages;
    });

    setTimeout(() => {
      const botMessage = {
        id: `m${Date.now()}`,
        role: "model",
        content: `Kamu bilang: "${text}". Ini response otomatis dari chatbot.`,
      };

      console.log("bot message :", botMessage);

      setMessages((prev) => {
        console.log("adding bot message, previous :", prev.length);
        return [...prev, botMessage];
      });

      setStatus("idle");
      console.log("status is reset to :", status);
    }, 2000);
  }

  function handleClear() {
    // TODO: Implementasi logic untuk clear messages
    setMessages([]);
    setStatus("idle");
    setError(null);
    console.log("CLEAR");
  }
  // ===========================================================================
  // STEP 5: useRef - DOM References
  // ===========================================================================
  // TODO: Tambahkan useRef untuk scroll target

  // ===========================================================================
  // STEP 6: Custom Hook - Refactor untuk Clean Code
  // ===========================================================================
  // TODO: Extract semua logic ke custom hook useChat()

  return (
    <ChatShell
      messages={messages}
      status={status}
      error={error}
      onSend={handleSend}
      onClear={handleClear}
    />
  );
}
