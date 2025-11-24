import { create } from "zustand";

export const useTodos = create((set, get) => ({
  todos: [],
  setTodos: (newTodos) => set({ todos: newTodos }),

  addTodo: (id, title) =>
    set((state) => ({
      todos: [...state.todos, { id, title, isDone: false }],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      ),
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),

  filter: "all", // "all" | "done" | "todo"
  setFilter: (f) => set({ filter: f }),
}));
