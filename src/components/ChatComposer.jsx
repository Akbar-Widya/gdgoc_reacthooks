import { useState } from "react";

export default function ChatComposer({ onSend, disabled }) {
  const [text, setText] = useState("");

  function submit() {
    const value = text.trim();
    if (!value) return;
    onSend(value);
    setText("");
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2">
        <textarea
          className="min-h-[44px] max-h-32 flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 disabled:bg-slate-50"
          placeholder="Ketik pesan…"
          value={text}
          disabled={disabled}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
        />

        <button
          type="button"
          onClick={submit}
          disabled={disabled || !text.trim()}
          className="rounded-xl bg-slate-900 px-4 text-sm font-medium text-white disabled:opacity-50"
        >
          Send
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Enter untuk kirim, Shift+Enter untuk baris baru.
      </p>
    </div>
  );
}