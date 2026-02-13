import MessageBubble from "./MessageBubble";
import ChatComposer from "./ChatComposer";

export default function ChatShell({
  title = "Chatbot UI",
  subtitle = "chatbot sederhana",
  messages,
  status,
  error,
  onSend,
  onClear,
}) {
  return (
  <div className="min-h-screen bg-white px-4 py-8">
    <div className="mx-auto flex h-[82vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-5">
        <div className="space-y-3">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>

        {status === "loading" && (
          <div className="mt-4 text-sm text-slate-500 animate-pulse">
            Thinking…
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error || "Terjadi kesalahan."}
          </div>
        )}
      </main>

      <ChatComposer onSend={onSend} disabled={status === "loading"} />
    </div>
  </div>
);

}
