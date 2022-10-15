import { createSlice } from "@reduxjs/toolkit";
import { Filter, ITodo } from "../../interfaces/Todo";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filter: "all" as Filter,
    items: [
      {
        id: "sGADjw0m1XbNdpO1EKJXE",
        text: "Go for groceries",
        isCompleted: false,
      },
      { id: "HpCab5JRgtJUyzsalncuq", text: "Go to cinema", isCompleted: false },
      {
        id: "aVNj3ftzeYnD2pEwWPbj7",
        text: "Watch last episode of Better call Saul",
        isCompleted: true,
      },
    ] as ITodo[],
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    addTodo: (state, action) => {
      const item: ITodo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      state.items = [...state.items, item];
    },
    updateTodo: (
      state,
      action: { type: string; payload: { id: string; value: ITodo } }
    ) => {
      const { id, value } = action.payload;
      state.items = state.items.map((x) => (x.id === id ? value : x));
    },
    deleteTodo: (state, action: { type: string; payload: ITodo }) => {
      state.items = state.items.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateFilter, updateTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
