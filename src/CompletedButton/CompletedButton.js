import './CompletedButton.scss';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../TodoContext';

function CompletedButton() {
    const { completedVisible, setCompletedVisible } = useContext(TodoContext);
    return (
        <button className='your-tasks__hide-btn' onClick={() => setCompletedVisible(!completedVisible)}>
          { !completedVisible && <span><FontAwesomeIcon icon={faEyeSlash} /> Hide </span> }
          { completedVisible && <span><FontAwesomeIcon icon={faEye} /> Show </span> }
          completed tasks
        </button>
    );
}

export { CompletedButton };