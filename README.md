# React Hooks Case Study: Chatbot UI

> 🎯 **Hands-On Learning Project** - Pelajari React Hooks dengan membangun Chatbot UI sederhana

Proyek pembelajaran React Hooks yang fokus pada pemahaman **kapan**, **kenapa**, dan **bagaimana** menggunakan React Hooks dalam aplikasi nyata.

![React Hooks](https://img.shields.io/badge/React-Hooks-61DAFB?style=flat-square&logo=react)
![Learning Path](https://img.shields.io/badge/Learning-Step--by--Step-success?style=flat-square)
![Beginner Friendly](https://img.shields.io/badge/Level-Beginner-green?style=flat-square)

---

## 📚 Apa yang Dipelajari?

Melalui project ini, kamu akan mempelajari **4 fundamental React Hooks**:

1. **useState** - State management untuk data dinamis
2. **useEffect** - Menangani side effects setelah render
3. **useRef** - Mutable values tanpa trigger re-render
4. **Custom Hooks** - Extract dan reuse logic untuk clean architecture

## 🎯 Learning Objectives

Setelah menyelesaikan project ini, kamu akan dapat:

✅ Mengelola state dengan useState (immutable updates, functional updates)  
✅ Menangani async operations (loading states, error handling)  
✅ Menggunakan useEffect dengan dependencies yang tepat  
✅ Memahami perbedaan useState vs useRef  
✅ Merefactor kode kompleks ke custom hooks  
✅ Menulis React code yang clean dan maintainable

---

## 🚀 Quick Start

### Prerequisites

* Node.js >= 16.x
* npm atau yarn
* Text editor (VS Code recommended)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd case-study-chatbot-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Buka browser di `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Chat.jsx              # Main component (TODO: implement hooks)
│   ├── ChatShell.jsx         # UI wrapper component
│   ├── ChatComposer.jsx      # Message input component
│   └── MessageBubble.jsx     # Message display component
├── App.jsx                   # Root application
└── main.jsx                  # Entry point
```

**Starter Files:**
* `Chat.jsx` - Template dengan TODO comments untuk implementasi
* `ChatShell.jsx`, `ChatComposer.jsx`, `MessageBubble.jsx` - Ready-to-use UI components

---

## 📝 Learning Path Overview

Project ini menggunakan **incremental learning approach** dengan 6 steps:

| Step | Topic | Focus |
|------|-------|-------|
| 1 | useState Basics | Declare dan initialize state |
| 2 | Event Handlers | Update state dari user interaction |
| 3 | Error Handling | Manage error state dengan proper UI feedback |
| 4 | useEffect | Auto-scroll dengan side effects |
| 5 | useRef | DOM reference untuk scroll target |
| 6 | Custom Hooks | Refactor ke clean architecture |

**Estimated Time:** 2-3 hours untuk complete semua steps

📘 **[Lihat detailed guide di handbook →](https://personal-space-4.gitbook.io/google-developer-group-on-campus)**

---

## 🎓 Features yang Akan Dibangun

* ✅ Display chat messages (user & bot)
* ✅ Send new messages dengan input field
* ✅ Loading indicator saat bot processing
* ✅ Error handling dengan error banner
* ✅ Auto-scroll ke message terbaru
* ✅ Clear chat functionality
* ✅ Clean code architecture dengan custom hooks

---

## 🛠️ Tech Stack

* **React 18** - UI framework
* **Vite** - Build tool dan dev server
* **Tailwind CSS** - Styling (pre-configured)

---

## 📚 Additional Resources

**Official Documentation:**
* [React Hooks Documentation](https://react.dev/reference/react)
* [useState](https://react.dev/reference/react/useState)
* [useEffect](https://react.dev/reference/react/useEffect)
* [useRef](https://react.dev/reference/react/useRef)
* [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

**Recommended Reading:**
* [Thinking in React](https://react.dev/learn/thinking-in-react)
* [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

---

## 🤝 Contributing

Contributions are welcome! Jika menemukan bug atau punya saran improvement:

1. Fork repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for learning and teaching purposes.

---

**Happy Learning! 🚀**

*Focus bukan di "menghafal syntax", tapi **memahami KENAPA dan KAPAN** menggunakan setiap hook.*
