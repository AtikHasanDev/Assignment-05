
# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a single-page React application that lets you browse frontend, backend,
database, language, styling, and DevOps technologies side by side, and assemble your own
personal "stack" by adding the ones you'd pick for your next project.

## 🛠️ Technologies Used

- **React 19** + **TypeScript** — component-driven UI with static typing
- **Vite** — fast dev server and production bundler
- **Tailwind CSS v4** + **daisyUI** — utility-first styling and UI primitives
- **React-Toastify** — toast notifications for stack actions
- **JSON** — local data file powering the technology catalog

## ✨ Features

1. **Build-your-own stack:** Browse 15 technologies as responsive cards (3 columns on
   desktop, 2 on tablet, 1 on mobile) and add any of them to a live "Your Stack" sidebar
   with one click — duplicates are blocked with a warning toast, and each added card is
   disabled and marked "✓ Added to Stack".
2. **Instant feedback with toasts:** Every stack action — add, duplicate attempt, remove,
   and remove all — triggers a react-toastify notification, so the UI never leaves you
   guessing whether an action worked.
3. **Data-driven and responsive by design:** The entire technology catalog is loaded at
   runtime from a local JSON file (with a real loading state while it fetches) rather than
   hardcoded in a component, and the whole layout — navbar, hero, cards, and sidebar —
   adapts cleanly from mobile to desktop, with a single shared gradient theme (orange →
   pink → violet) driving the brand name, hero heading, and primary buttons.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

- Live Site Link: https://graceful-caramel-de7caa.netlify.app

---

## 🧠 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside
JavaScript/TypeScript files. React uses it because it makes describing what the UI should
look like much more readable than calling `createElement` by hand — you can see the
structure of a component at a glance, with regular JS expressions mixed in using `{}`.

**2. What is the difference between props and state?**
Props are values passed *into* a component from its parent — they're read-only from the
component's own point of view (e.g. `technology`, `onAdd` passed to `TechnologyCard`).
State is data a component owns and manages itself with `useState`, and it can change over
time in response to user actions (e.g. the `stack` array in `App`). Props flow down; state
lives locally and triggers a re-render when updated.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold a piece of state that persists between renders
and re-renders the component when it's updated. In this project it's used in `App.tsx` to
track `technologies`, the user's `stack`, `isLoading`, and `error`, and in `Navbar.tsx` to
track whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside of rendering, like network
requests — after a component renders. Fetching data isn't something that should happen
during render itself, so `App.tsx` uses `useEffect` with an empty dependency array to fetch
`technologies.json` exactly once when the component first mounts, then stores the result in
state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between renders, so it knows which items were
added, removed, or reordered instead of re-rendering the whole list from scratch. Without a
stable, unique key (we use each technology's `id`), React can mismatch items and cause
subtle bugs or lose component state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack
message).**
Conditional rendering means showing different UI depending on some condition, instead of
always rendering the same markup. In `YourStack.tsx`, when `stack.length === 0` the
component renders a "Your stack is empty." placeholder; otherwise it maps over the stack
and renders the real list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a
child send something back to the parent?**
A parent passes data down to a child as props — for example `App` passes `technologies`,
`stackIds`, and the `onAdd` callback down to `TechnologyGrid`. To send something back up, the
parent passes a function down as a prop, and the child calls that function with whatever
data it wants to share; `TechnologyCard` calls the `onAdd(technology)` prop when its button
is clicked, which runs `handleAdd` back in `App`.