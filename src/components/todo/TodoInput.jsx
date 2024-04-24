import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../features/todoSlice";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/base";


function TodoInput() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [task, setTask] = useState("");

    // タスクを加えたのを表示させる
    const addTodo = () => {
        //もしタスクが空ならそのまま返す
        if (task === "") return;
        const newTodo = { id: todos.length + 1, task: task };
        // reducerで行った処理を反映させる
        dispatch(add(newTodo));
        setTask("");
    };
    return (
        <Grid container spacing={5} alignItem="center" justifyContent="center">
            <Grid item>
                <TextField
                  value={task}
                  type="text"
                  margin="dense"
                  sx={{
                    width: 400
                  }}
                  placeholder="タスクを入力しましょう"
                  onChange={(e) => setTask(e.target.value)}/>
            </Grid>
            <Grid item>
                <Button
                  onClick={add}
                  variant="contained"
                  size="large"
                  color="secondary"
                  >
                    追加
                  </Button>
            </Grid>
        </Grid>
    );
}

export default TodoInput;