import { create } from "zustand";
import { saveTodoList, loadTodoList } from "../utilities/storage";
import uuid from "react-native-uuid";

export const useTodos = create((set, get) => ({
  todos: [],

  async loadTodos() {
    const loaded = await loadTodoList("@todoList");
    if (loaded) set({ todos: loaded });
  },

  setTodos(newTodos) {
    set({ todos: newTodos });
    saveTodoList("@todoList", newTodos);
  },

  addTodo(title) {
    const newTodo = { id: uuid.v4(), title, isDone: false };
    const updated = [...get().todos, newTodo];
    set({ todos: updated });
    saveTodoList("@todoList", updated);
  },

  toggleTodo(id) {
    const updated = get().todos.map((t) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    );
    set({ todos: updated });
    saveTodoList("@todoList", updated);
  },

  removeTodo(id) {
    const updated = get().todos.filter((t) => t.id !== id);
    set({ todos: updated });
    saveTodoList("@todoList", updated);
  },

  filter: "all", // "all" | "done" | "todo"
  setFilter: (f) => set({ filter: f }),

  filteredTodos: () => {
    const { todos, filter } = get();
    if (!todos) return [];
    if (filter === "done") return todos.filter((t) => t.isDone);
    if (filter === "todo") return todos.filter((t) => !t.isDone);
    return todos;
  },
}));
