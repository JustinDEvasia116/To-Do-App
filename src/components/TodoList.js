import React,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos,setTodos] = useState([])

    const addtodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos]
        setTodos(newTodos)
        console.log(todo,...todos)

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
    };

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            console.log(todo)
            return todo
        })
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1> What's The Plan For Today?</h1>
        <TodoForm onSubmit={addtodo}/>
        <Todo todos={todos} completeTodo ={completeTodo} updateTodo={updateTodo} removeTodo ={removeTodo}/>
    </div>
  )
}

export default TodoList