import './App.scss';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodo } from '../CreateTodo';
import { TodoContext, TodoProvider } from '../TodoContext';
import { CompletedButton } from '../CompletedButton/CompletedButton';

function App() { 
  return (
    <TodoProvider>
      <CreateTodo/>
      <div className='your-tasks'>
        <h1 className='your-tasks__title'>Your tasks</h1>
        <TodoCounter />
        <TodoSearch />
      
        <TodoContext.Consumer>
          {({
            toggleTodo,
            deleteTodo,
            loading,
            error,
            searchedTodos,
            completedVisible,
          }) => (
              <TodoList>
                {loading && <code>Loading...</code>}
                {error && <code>Error!</code>}
                {(!loading && !searchedTodos.length) && <code>Create your first task on the left panel!</code>}
                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    visible={completedVisible}
                    onComplete={() => toggleTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}/>
                ))}
              </TodoList>
          )}
        </TodoContext.Consumer>
        <CompletedButton />
      </div>
    </TodoProvider>
  );
}

export default App;
