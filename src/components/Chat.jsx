import ChatShell from "./ChatShell";

// Mock data - starting point
const mockMessages = [
  { id: "m1", role: "model", content: "Halo! Aku chatbot 🙂" },
  { id: "m2", role: "user", content: "Nanti kita fokus ke hooks ya?" },
  { id: "m3", role: "model", content: "Yes. Mulai dari useState sampai custom hook." },
];

export default function Chat() {
  // ===========================================================================
  // STEP 1: State Management dengan useState
  // ===========================================================================

  // TODO: Tambahkan useState untuk messages

  // TODO: Tambahkan useState untuk status

  // TODO: Tambahkan useState untuk error

  const status = "idle";
  const error = null;

  // ===========================================================================
  // STEP 2: Event Handlers - State Updates & Async Flow
  // ===========================================================================

  function handleSend(text) {
    // TODO: Implementasi logic untuk mengirim message
    console.log("SEND:", text);
  }

  function handleClear() {
    // TODO: Implementasi logic untuk clear messages
    console.log("CLEAR");
  }

  // ===========================================================================
  // STEP 3: Error Handling
  // ===========================================================================
  // TODO: Implementasi error handling di dalam handleSend

  // ===========================================================================
  // STEP 4: useEffect - Side Effects
  // ===========================================================================
  // TODO: Tambahkan useEffect untuk auto-scroll

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
      messages={mockMessages}
      status={status}
      error={error}
      onSend={handleSend}
      onClear={handleClear}
    />
  );
}
