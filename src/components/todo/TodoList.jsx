import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../features/todoSlice";
import { Box, Button, Stack } from "@mui/material";

// タスクを消したのを反映させる
function TodoList() {
    // 状態を見てる(参照してる)
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const deleteTodo = (e, todo) => {
        dispatch(remove(todo));
    };
    return (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{
            margin: 2,
          }}
        >
          {todos.map((todo) => {
            return(
                <Box
                  key={todo.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                    m: 1,
                    background:
                      "liner-gradient(167deg, rgba(255, 167, 247, 1), rgba(255, 137, 179, 1) 19%rgba(224, 216, 239, 1) 31%, rgba(216, 237, 255, 1) 61%)",
                    borderRadius: 1,
                    width: 500,
                    boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.35)",
                  }}
                  >
                    <Box>{todo.task}</Box>
                    <Button
                      onClick={(e) => deleteTodo(e, todo)}
                      sx={{
                        color: "red",
                        background: "pink",
                        "&:hover": {
                            background: "rgba(8, 33, 0, 0.26)",
                        },
                      }}
                      >
                        削除
                      </Button>
                  </Box>
            )
          })}
          </Stack>
    );
}
export default TodoList;