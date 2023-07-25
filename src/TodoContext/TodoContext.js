import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {
    const [searchValue, setSearchValue] = useState('');
    const [completedVisible, setCompletedVisible] = useState(false);

    const {
        item: todos, 
        saveItem: setTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    const searchedTodos = todos.filter(
        todo => 
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        setTodos(newTodos);
    }

    const toggleTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( todo => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            addTodo,
            toggleTodo,
            deleteTodo,
            loading,
            error,
            totalTodos,
            completedTodos,
            searchedTodos,
            searchValue,
            setSearchValue,
            completedVisible,
            setCompletedVisible}}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };