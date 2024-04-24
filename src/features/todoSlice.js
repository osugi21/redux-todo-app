import { createSlice } from "@reduxjs/toolkit";

// JSON 文字列を取得し、JavaScriptオブジェクトに変換
const getTodos = JSON.parse(localStorage.getItem("TAKENOKO_TODO"));

//各タスクのIDを採番(それぞれのデータに固有のデータを与える）する関数
const updateId = (arr) => {
    const newObj = newArray();
    // forEach文は、配列データに特化した繰り返し処理を簡単に実行できるメソッド
    // 新しいタスクを加えるときのデータ
    arr.forEach((todo, index) => {
        newObj.push({ id: index, task: todo.task });
    });
    return newObj;
};

// Sliceの中
const todoSlice = createSlice({
    name:"todo",
    initialState: getTodos || [],
    reducers: {
        //新たにTODOを追加する処理
        add: (state, action) => {
            const newTodo = [...state, action.payload.id]
            localStorage.setItem("TAKENOKO_TODO", JSON.stringify(newTodo));
            return newTodo;
        },
        //TODOを削除する処理
        remove: (state, action) => {
            const todos = Object.values(state).map((item) => ({ ...item }));
            let updateTodo = todos.filter((todo) => todo.id !== action.payload.id);
            updateTodo = updateId(updateTodo);
            localStorage.setItem("TAKENOKO_TODO", JSON.stringify(updateTOdo));
            return updateTodo;
        }
    },
});

export const {add, remove} = todoSlice.actions;
export default todoSlice.reducer;