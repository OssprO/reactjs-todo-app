import './CreateTodo.scss';
import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodo() {
  const { addTodo } = useContext(TodoContext);
  const [ newTodo, setNewTodo ] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }
  const onChange = (event) => {
    setNewTodo(event.target.value);
  }

  return (
    <div className='create-task'>
      <h2>Create new task</h2>
      <form id="createTaskForm" className='create-task__form' onSubmit={onSubmit}>
        <input 
          className='create-task__form__input' 
          type='text' 
          placeholder='Task...'
          value={newTodo}
          onChange={onChange}/>
        <button className='create-task__form__submit' type='submit'>Create task</button>
      </form>
    </div>
  );
}

export { CreateTodo };