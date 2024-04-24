import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice";

// reducerの設定
export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
