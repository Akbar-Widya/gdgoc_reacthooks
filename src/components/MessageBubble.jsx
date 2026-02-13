export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-relaxed",
          isUser ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900",
        ].join(" ")}
      >
        {message.content}
      </div>
    </div>
  );
}