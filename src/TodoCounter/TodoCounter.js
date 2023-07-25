import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    return (
        <h4>You have completed {completedTodos} of {totalTodos} tasks</h4>
    )
}

export { TodoCounter };