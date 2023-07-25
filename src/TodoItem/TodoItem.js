import './TodoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function TodoItem({text, completed, visible, onComplete, onDelete}) {
    return (
      <li className={`todo-item ${completed && 'completed'} ${visible && completed ? 'hidden' : ''}`}>
        <p className='todo-item__text' onClick={onComplete}>{text}</p>
        <button className='todo-item__delete-btn' onClick={onDelete}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
      </li>
    );
}

export { TodoItem };