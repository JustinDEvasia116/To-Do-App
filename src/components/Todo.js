import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
  };
  if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        
        <div key={todo.id}   onClick={() => completeTodo(todo.id)  } className='hide-selection'>
          {todo.text}
        </div>
        
        <div className='icons'> 
          <AiOutlineCloseSquare
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />
          <BiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>
      </div>
    ));

}


export default Todo