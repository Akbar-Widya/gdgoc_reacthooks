# React Hooks Case Study: Chatbot UI

{% hint style="success" %}
**Hands-On Learning Project**

Proyek pembelajaran React Hooks melalui implementasi Chatbot UI sederhana. Project ini dirancang untuk memahami **kapan**, **kenapa**, dan **bagaimana** menggunakan React Hooks, serta me-refactor kode menjadi lebih clean dengan custom hooks.
{% endhint %}

---

## Apa yang Akan Dipelajari?

{% hint style="info" %}
**4 Fundamental React Hooks**

Learn through step-by-step implementation with real code examples.
{% endhint %}

Project ini mengajarkan **4 konsep fundamental React Hooks** melalui implementasi bertahap:

### 1. **useState** - State Management

{% hint style="tip" %}
**Core Hook for State Management**

Belajar mengelola data dinamis yang memicu re-render UI.
{% endhint %}

**Kenapa penting?**
* Data yang berubah (dari user input, API response) perlu memicu update UI
* Variable biasa tidak akan trigger re-render di React
* State adalah "memory" component yang persist antar render

**Kapan digunakan?**
* Data UI yang bisa berubah (input, list, toggle, counter, dll)
* Nilai yang perlu memicu re-render saat berubah
* Data lokal component yang tidak perlu di-share ke parent

**Code Example:**

```javascript
// Declare multiple states
const [messages, setMessages] = useState(mockMessages);
const [status, setStatus] = useState('idle');
const [error, setError] = useState(null);

// Immutable update with spread operator
setMessages(prev => [...prev, newMessage]);

// Update status
setStatus('loading');
```

### 2. **useEffect** - Side Effects Management

{% hint style="tip" %}
**Handle Side Effects After Render**

Belajar menangani operasi yang terjadi SETELAH render.
{% endhint %}

**Kenapa penting?**
* Render function harus "pure" (no side effects)
* Operasi seperti DOM manipulation, API calls, subscriptions perlu dilakukan setelah render
* React menjamin effect jalan setelah DOM update untuk menghindari bug

**Kapan digunakan?**
* Auto-scroll saat data bertambah
* Fetch data saat component mount
* Subscribe/unsubscribe event listeners
* Sync state ke localStorage

**Code Example:**

```javascript
// Auto-scroll when messages change
useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages.length]);
// Dependencies: effect re-runs when messages.length changes

// Run once on mount
useEffect(() => {
  console.log('Component mounted!');
}, []);
```

### 3. **useRef** - Mutable Values Without Re-render

{% hint style="tip" %}
**Mutable Container Without Re-renders**

Belajar menyimpan nilai yang tidak perlu memicu re-render.
{% endhint %}

**Kenapa penting?**
* Tidak semua data perlu memicu re-render (DOM reference, timer IDs, previous values)
* Performance optimization - hindari unnecessary re-render
* Access DOM elements untuk manipulasi langsung

**Kapan digunakan?**
* DOM reference untuk focus, scroll, measure
* Menyimpan timer/interval IDs
* Menyimpan previous props/state values untuk comparison
* Menyimpan instance values (WebSocket, abort controller)

**Code Example:**

```javascript
// Create ref for DOM element
const bottomRef = useRef(null);

// Use ref in JSX
<div ref={bottomRef} />

// Access DOM element
if (bottomRef.current) {
  bottomRef.current.scrollIntoView({ behavior: 'smooth' });
}

// Ref vs State:
// - useState: triggers re-render when updated
// - useRef: does NOT trigger re-render when .current changes
```

### 4. **Custom Hooks** - Code Reusability & Clean Architecture

{% hint style="success" %}
**Extract and Reuse Logic**

Belajar extract logic ke reusable hooks untuk separation of concerns.
{% endhint %}

**Kenapa penting?**
* Component yang terlalu kompleks sulit di-maintain
* Logic yang terpisah dari UI lebih mudah di-test
* Reusable logic dapat digunakan di multiple components
* Mengikuti Single Responsibility Principle

**Kapan digunakan?**
* Logic mulai kompleks (>100 baris state/handlers/effects dalam satu component)
* Logic yang perlu di-reuse di multiple components
* Memisahkan business logic dari presentation logic

**Code Example:**

```javascript
// Custom hook: src/hooks/useChat.js
function useChat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  
  function sendMessage(text) {
    // ... all logic here
  }
  
  function clearChat() {
    // ... all logic here
  }
  
  return { messages, status, error, sendMessage, clearChat };
}

// Component: src/components/Chat.jsx
function Chat() {
  const chat = useChat(); // Clean and simple!
  
  return <ChatShell {...chat} />;
}
```

---

## Learning Objectives

{% hint style="info" %}
**What You'll Master**

Setelah menyelesaikan project ini, kamu akan dapat:
{% endhint %}

✅ **Memahami state management dengan useState**
- Mendeklarasikan state dengan sintaks yang tepat
- Melakukan immutable state updates (spread operator, functional updates)
- Mengelola multiple state values dalam satu component

✅ **Menangani async operations dengan state**
- Update state dalam async flow (setTimeout, API calls)
- Implementasi loading states
- Handle error states dengan proper UI feedback

✅ **Menggunakan useEffect dengan benar**
- Menentukan dependencies array yang tepat
- Memahami kapan effect akan re-run
- Menghindari infinite loops dan memory leaks

✅ **Memahami perbedaan state vs ref**
- Kapan menggunakan useState vs useRef
- Menggunakan ref untuk DOM manipulation
- Menyimpan mutable values tanpa trigger re-render

✅ **Refactor ke custom hook**
- Extract business logic dari component
- Membuat reusable hooks
- Memisahkan concerns (UI vs logic)

✅ **Mengikuti Rules of Hooks**
- Hooks harus dipanggil di top-level
- Hooks hanya di function component atau custom hooks
- Consistent hook order antar renders

---

## Setup Instructions

{% hint style="warning" %}
**Prerequisites Required**

Make sure you have the following installed before starting.
{% endhint %}

### Prerequisites

Pastikan kamu sudah memiliki:
- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**
- **Text editor** (VS Code recommended)
- **Basic React knowledge**: JSX, components, props

Pengetahuan yang diasumsikan:
- JavaScript ES6+ (arrow functions, destructuring, spread operator)
- Async JavaScript (Promises, async/await - basic)
- React fundamentals (components, props, event handlers)

### Installation

1. **Clone atau download project ini**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   - Navigate ke `http://localhost:5173`
   - Kamu akan melihat chatbot UI dengan data statis

### Verifikasi Setup

Setelah setup, kamu harus melihat:
- ✅ Chatbot UI dengan 3 messages statis
- ✅ Input box untuk mengetik (belum berfungsi)
- ✅ Button "Clear" (belum berfungsi)
- ✅ No error di console

Jika ada error, pastikan:
- Node.js version minimal v18
- Semua dependencies ter-install (`node_modules` folder ada)
- Port 5173 tidak dipakai aplikasi lain

---

## Learning Path

{% hint style="success" %}
**Step-by-Step Guide**

Follow these steps in order. Each step builds on the previous one.
{% endhint %}

---

### Step 1: Implementasi useState untuk State Management

**File fokus:** `src/components/Chat.jsx`

**Apa yang akan dikerjakan:**
- Declare state untuk `messages` (array of message objects)
- Declare state untuk `status` (idle/loading/error)
- Declare state untuk `error` (null atau string)

**Konsep yang dipelajari:**
- Sintaks useState: `const [value, setValue] = useState(initialValue)`
- Initial value hanya digunakan pada render pertama
- State updates trigger re-render

**Success criteria:**
* Messages menggunakan state, bukan mock data hardcoded
* UI masih menampilkan 3 messages awal dengan benar

**Reference Implementation:**

```javascript
// Step 1 Solution
const [messages, setMessages] = useState(mockMessages);
const [status, setStatus] = useState('idle');
const [error, setError] = useState(null);
```

---

### Step 2: Implementasi Event Handlers untuk User Interaction

**Apa yang akan dikerjakan:**
- Implementasi `handleSend` untuk menambah user message
- Simulasi bot response dengan `setTimeout` (async operation)
- Update status state (idle → loading → idle)
- Implementasi `handleClear` untuk reset semua messages

**Konsep yang dipelajari:**
- Functional state updates: `setState(prev => newValue)`
- Kenapa immutable updates penting (`[...prev, new]` bukan `prev.push(new)`)
- Async operations dengan state management
- State machine pattern sederhana

**Success criteria:**
* User dapat mengirim message → muncul di UI
* Loading indicator muncul saat proses
* Bot reply muncul setelah delay
* Clear button menghapus semua messages

**Reference Implementation:**

```javascript
// Step 2 Solution: handleSend
function handleSend(text) {
  if (!text.trim()) return;
  
  const userMessage = {
    id: `m${Date.now()}`,
    role: 'user',
    content: text
  };
  
  // Functional update - immutable
  setMessages(prev => [...prev, userMessage]);
  setStatus('loading');
  setError(null);
  
  // Simulate async bot response
  setTimeout(() => {
    const botMessage = {
      id: `m${Date.now()}`,
      role: 'model',
      content: `Kamu bilang: "${text}"`
    };
    
    setMessages(prev => [...prev, botMessage]);
    setStatus('idle');
  }, 1500);
}

// handleClear
function handleClear() {
  setMessages([]);
  setStatus('idle');
  setError(null);
}
```

---

### Step 3: Error Handling dengan State

**Apa yang akan dikerjakan:**
- Trigger error state berdasarkan kondisi tertentu
- Tampilkan error message ke user
- Clear error saat user retry

**Konsep yang dipelajari:**
- Error adalah bagian dari UI state, bukan console.log
- User perlu feedback yang jelas saat error
- Error recovery pattern

**Success criteria:**
* Ketik kata "error" → error banner muncul
* Error message informatif
* Error hilang saat kirim message baru

**Reference Implementation:**

```javascript
// Step 3 Solution: Error handling in handleSend
function handleSend(text) {
  if (!text.trim()) return;
  
  // Error trigger
  if (text.toLowerCase().includes('error')) {
    setStatus('error');
    setError('Simulasi error: kata "error" terdeteksi!');
    return; // Stop execution
  }
  
  // ... rest of the code
  setError(null); // Clear previous errors
}
```

---

### Step 4: Implementasi useEffect untuk Auto-Scroll

**Apa yang akan dikerjakan:**
- Import dan gunakan `useEffect`
- Auto-scroll ke bawah saat messages bertambah
- Tentukan dependencies yang tepat

**Konsep yang dipelajari:**
- Side effects terjadi SETELAH render
- Dependencies array mengontrol kapan effect re-run
- Empty deps `[]` vs specific deps `[messages.length]` vs no deps

**Success criteria:**
* Setiap message baru → otomatis scroll ke bawah
* Smooth scrolling animation
* Tidak terjadi infinite loop

**Reference Implementation:**

```javascript
// Step 4 Solution
useEffect(() => {
  // Optional chaining for safety
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages.length]);
// Re-run when messages.length changes

// Why messages.length not messages?
// - .length only changes when items added/removed
// - messages reference changes every update
// - More efficient!
```

---

### Step 5: Implementasi useRef untuk DOM Reference

**Apa yang akan dikerjakan:**
- Import dan gunakan `useRef`
- Buat ref untuk elemen bottom (scroll target)
- Gunakan ref di useEffect untuk scrollIntoView

**Konsep yang dipelajari:**
- Perbedaan state vs ref (re-render trigger)
- DOM reference dengan ref
- Mutable ref.current vs immutable state

**Success criteria:**
* bottomRef menunjuk ke DOM element yang benar
* Scroll behavior bekerja dengan ref
* Memahami kapan pakai ref vs state

**Reference Implementation:**

```javascript
// Step 5 Solution
const bottomRef = useRef(null);

// In JSX
<ChatShell
  messages={messages}
  status={status}
  error={error}
  onSend={handleSend}
  onClear={handleClear}
>
  <div ref={bottomRef} />
</ChatShell>
```

---

### Step 6: Refactor ke Custom Hook (Clean Code)

**Apa yang akan dikerjakan:**
- Buat file `src/hooks/useChat.js`
- Pindahkan semua state, handlers, effects ke `useChat()`
- Update `Chat.jsx` untuk menggunakan custom hook
- Component hanya fokus ke UI rendering

**Konsep yang dipelajari:**
- Custom hook naming convention (`use` prefix)
- Separation of concerns (UI vs logic)
- Reusable hooks
- Testability benefits

**Success criteria:**
* `Chat.jsx` hanya 10-15 baris (clean!)
* Semua logic ada di `useChat.js`
* Functionality tetap sama (tidak ada breaking changes)
* Memahami benefit refactoring ini

**Reference Implementation:**

{% hint style="tip" %}
**Complete Custom Hook Example**

Here's how to extract all logic into a reusable hook:
{% endhint %}

```javascript
// src/hooks/useChat.js
import { useState, useEffect, useRef } from 'react';

const mockMessages = [
  { id: 'm1', role: 'model', content: 'Halo! Aku chatbot 🙂' },
  { id: 'm2', role: 'user', content: 'Nanti kita fokus ke hooks ya?' },
  { id: 'm3', role: 'model', content: 'Yes. Mulai dari useState sampai custom hook.' }
];

export function useChat() {
  // All state
  const [messages, setMessages] = useState(mockMessages);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  
  // All effects
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);
  
  // All handlers
  function sendMessage(text) {
    if (!text.trim()) return;
    
    if (text.toLowerCase().includes('error')) {
      setStatus('error');
      setError('Simulasi error!');
      return;
    }
    
    const userMessage = {
      id: `m${Date.now()}`,
      role: 'user',
      content: text
    };
    
    setMessages(prev => [...prev, userMessage]);
    setStatus('loading');
    setError(null);
    
    setTimeout(() => {
      const botMessage = {
        id: `m${Date.now()}`,
        role: 'model',
        content: `Kamu bilang: "${text}"`
      };
      
      setMessages(prev => [...prev, botMessage]);
      setStatus('idle');
    }, 1500);
  }
  
  function clearChat() {
    setMessages([]);
    setStatus('idle');
    setError(null);
  }
  
  // Return API
  return {
    messages,
    status,
    error,
    sendMessage,
    clearChat,
    bottomRef
  };
}
```

```javascript
// src/components/Chat.jsx (After refactoring)
import { useChat } from '../hooks/useChat';
import ChatShell from './ChatShell';

export default function Chat() {
  const chat = useChat();
  
  return (
    <ChatShell
      messages={chat.messages}
      status={chat.status}
      error={chat.error}
      onSend={chat.sendMessage}
      onClear={chat.clearChat}
    >
      <div ref={chat.bottomRef} />
    </ChatShell>
  );
}

// Component went from ~150 lines to ~15 lines! 🎉
```

---

## Project Structure

```
src/
├── components/
│   ├── Chat.jsx           ← Main learning file (TODO: implement hooks)
│   ├── ChatShell.jsx      ← UI container (sudah jadi)
│   ├── ChatComposer.jsx   ← Input component (sudah jadi)
│   └── MessageBubble.jsx  ← Message display (sudah jadi)
├── hooks/
│   └── useChat.js         ← Step 6: custom hook (belum ada)
├── App.jsx                ← Root component (minimal)
└── main.jsx               ← Entry point
```

**Fokus pembelajaran:**
- 90% waktu di `Chat.jsx` (Step 1-5)
- 10% waktu buat `useChat.js` (Step 6)

**UI components sudah selesai:**
- Kamu tidak perlu edit `ChatShell`, `ChatComposer`, atau `MessageBubble`
- Focus hanya ke hooks implementation di `Chat.jsx`

---

## How to Follow Along

{% hint style="success" %}
**Learning Strategy**

Best practices for completing this project.
{% endhint %}

### Recommended Approach

1. **Baca file `Chat.jsx` dari atas ke bawah**
   - Setiap step ada penjelasan lengkap dengan komentar
   - Ada TODO markers yang clear
   - Hints disediakan tanpa memberikan full solution

2. **Implement satu step sekaligus**
   - Jangan skip! Setiap step build on previous step
   - Test di browser setelah setiap step
   - Pastikan paham WHY sebelum lanjut ke step berikutnya

3. **Gunakan console.log untuk debugging**
   - Log state values untuk memahami flow
   - Log di dalam handlers untuk tracking execution
   - Check React DevTools untuk inspect state

4. **Jika stuck:**
   - Baca komentar penjelasan di `Chat.jsx` lebih teliti
   - Check THEORY.md untuk deep dive concepts
   - Lihat hints yang sudah disediakan
   - Last resort: peek at `Chat.solution.jsx` (tapi coba sendiri dulu!)

5. **Setelah selesai Step 1-5:**
   - Take a break, review apa yang sudah dipelajari
   - Pahami flow keseluruhan (user action → state update → re-render)
   - Lanjut ke Step 6 (refactoring) dengan fresh mind

---

## Key Concepts Explained

{% hint style="info" %}
**Core React Concepts**

Understand the fundamental differences.
{% endhint %}

### State vs Props vs Ref

| Aspek | State | Props | Ref |
|-------|-------|-------|-----|
| **Ownership** | Component sendiri | Dari parent | Component sendiri |
| **Mutability** | Immutable (update via setter) | Read-only | Mutable (ref.current = x) |
| **Trigger render?** | ✅ Ya | ✅ Ya (jika props berubah) | ❌ Tidak |
| **Use case** | UI data yang berubah | Data dari parent | Non-UI persistent values |

### Immutable Updates

{% hint style="danger" %}
**Common Mistake: Direct Mutation**

Never mutate state directly!
{% endhint %}

**❌ SALAH:**
```javascript
messages.push(newMessage);  // Mutasi langsung
setMessages(messages);      // React tidak detect perubahan!
```

**✅ BENAR:**
```javascript
setMessages(prev => [...prev, newMessage]);  // Create new array
```

**Kenapa?**
* React compare state by reference (===)
* Mutasi tidak create new reference
* React tidak tahu state berubah = no re-render

### Functional State Updates

**❌ KURANG BAIK:**
```javascript
setMessages([...messages, newMessage]);  // Bisa dapat stale value
```

**✅ LEBIH BAIK:**
```javascript
setMessages(prev => [...prev, newMessage]);  // Guaranteed latest value
```

**Kenapa?**
- setState adalah async (batched)
- Akses langsung `messages` bisa dapat nilai lama (stale closure)
- Functional update dapat `prev` yang selalu up-to-date

### Dependencies Array in useEffect

```javascript
useEffect(() => {
  // Effect code
}, [dependencies]);
```

**3 Pola Dependencies:**

1. **No array** → Run every render (avoid!)
   ```javascript
   useEffect(() => {
     console.log("Every render!");
   }); // Bahaya: bisa infinite loop
   ```

2. **Empty array `[]`** → Run once on mount
   ```javascript
   useEffect(() => {
     console.log("Once on mount!");
   }, []); // Component lifecycle
   ```

3. **Specific deps** → Run when deps change
   ```javascript
   useEffect(() => {
     console.log("When messages change!");
   }, [messages.length]); // Re-run saat messages.length berubah
   ```

---

## Best Practices

{% hint style="warning" %}
**Rules You Must Follow**

These rules are enforced by ESLint and breaking them causes bugs.
{% endhint %}

### Rules of Hooks

**✅ DO:**
```javascript
function Chat() {
  const [state, setState] = useState(0);  // Top-level
  useEffect(() => {...}, []);             // Top-level
  
  if (condition) {
    // Use state here - OK!
  }
}
```

**❌ DON'T:**
```javascript
function Chat() {
  if (condition) {
    const [state, setState] = useState(0);  // ❌ Conditional hook!
  }
  
  for (let i = 0; i < 10; i++) {
    useEffect(() => {...});  // ❌ Hook in loop!
  }
}
```

**Kenapa?**
- React relies on hook call order untuk track state
- Conditional/loop breaks order consistency
- Akan menyebabkan bugs yang sulit di-debug

### State Organization

**Multiple useState vs Object State:**

```javascript
// ✅ Separate states - easier to update independently
const [messages, setMessages] = useState([]);
const [status, setStatus] = useState('idle');
const [error, setError] = useState(null);

// vs

// ⚠️ Object state - lebih ribet update
const [state, setState] = useState({
  messages: [],
  status: 'idle',
  error: null
});
```

**Kapan pakai object state?**
- State values yang selalu update bersamaan
- Complex related state (gunakan useReducer lebih baik)

---

## Troubleshooting

{% hint style="info" %}
**Common Issues and Solutions**

Quick fixes for frequent problems.
{% endhint %}

### "Component tidak re-render setelah setState"
- **Penyebab:** Direct mutation (`messages.push()`)
- **Solusi:** Create new reference (`[...messages, new]`)

### "useEffect jalan terus-menerus (infinite loop)"
- **Penyebab:** Dependencies array salah atau missing
- **Solusi:** Check dependencies, pastikan tidak create new object/array setiap render

### "Cannot read property 'current' of undefined"
- **Penyebab:** Ref belum initialized atau ref.current masih null
- **Solusi:** Optional chaining `ref.current?.method()` atau check `if (ref.current)`

### "State tidak update immediately setelah setState"
- **Penyebab:** setState async (batched)
- **Solusi:** Ini normal behavior! Gunakan useEffect untuk react to state changes

---

## Additional Resources

{% hint style="tip" %}
**Further Learning**

Extend your knowledge with these resources.
{% endhint %}

**Official React Documentation:**
- [Hooks Overview](https://react.dev/reference/react)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef)

**Deep Dive Materials:**
- Read `THEORY.md` untuk penjelasan konsep lebih mendalam
- Check `Chat.solution.jsx` untuk reference implementation (after completing your own!)

---

## Success Checklist

{% hint style="success" %}
**Verify Your Understanding**

Setelah menyelesaikan project, cek pemahaman kamu:
{% endhint %}

- [ ] Bisa explain kapan pakai useState vs useRef
- [ ] Bisa implement useEffect dengan dependencies yang tepat
- [ ] Paham perbedaan functional update vs direct state access
- [ ] Bisa handle async operations dengan state
- [ ] Bisa implement error handling dengan state
- [ ] Bisa refactor complex component ke custom hook
- [ ] Understand Rules of Hooks dan kenapa penting
- [ ] Bisa explain immutable state updates

---

## Next Steps (Bonus Challenges)

{% hint style="info" %}
**Advanced Challenges**

Setelah menyelesaikan Step 1-6, coba challenge ini:
{% endhint %}

1. **localStorage Persistence**
   - Save messages ke localStorage
   - Load messages saat page reload

2. **useCallback/useMemo Optimization**
   - Optimize sendMessage function dengan useCallback
   - Prevent unnecessary re-renders

3. **Real API Integration**
   - Ganti setTimeout dengan real fetch/axios
   - Integrate dengan Gemini AI API (butuh backend proxy)

4. **Testing**
   - Write tests untuk useChat hook
   - Test async behavior dan error states

5. **TypeScript Migration**
   - Add type annotations
   - Type-safe custom hooks

---

## 📄 License

This project is for educational purposes only.

---

{% hint style="success" %}
**Happy Learning!**

Remember: Focus bukan di "menghafal syntax", tapi **memahami KENAPA dan KAPAN** menggunakan setiap hook. Understanding > Memorization.

**Full solution code available in:** `src/components/Chat.solution.jsx`
{% endhint %}
