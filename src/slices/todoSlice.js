import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
