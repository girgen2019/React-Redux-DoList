/** @format */

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';
import { RootState } from './Components/store/store';
import { addTodo } from './Components/store/todoSlice';
import { removeTodo } from './Components/store/todoSlice';


function App() {
  const todos = useSelector((state: RootState)=> state);
  
  const dispatch = useDispatch()
  const [, setTodos] = useState<string[]>([]);
  
  const addTodoHandler = (title: string) => {
    dispatch(addTodo(title));
  };

  const deleteTodoHendler = (id: string) => {
    dispatch(removeTodo(id));
  };


  return (
    <div className="App-header">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodoHendler}
      />
      
    </div>
  );
}

export default App;
