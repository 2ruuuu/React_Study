import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState = {
  todos: [],
};

const useTodosStore = create(
  immer(
    combine(initialState, (set) => ({
      actions: {
        createTodo: (content: string) => {
          set((state) => {});
        },
        deleteTodo: () => {},
      },
    })),
  ),
);
