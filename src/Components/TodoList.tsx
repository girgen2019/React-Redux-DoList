/** @format */

import { useState } from 'react';
import styles from './TodoList.module.css';
import styless from './Todo.module.css';
import Todo from './Todo';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { editTodo } from './store/todoSlice';

interface ITodoList {
  todos: string[];
  setTodos: any;
  deleteTodo: (index: number) => void;
}

const TodoList = ({ todos, deleteTodo, setTodos }: ITodoList) => {
  const dispatch = useDispatch()
  const [editText, setEditText] = useState<number | null | string>(null);
  const [value, setValue] = useState<string>('');
  const todoId = new Date().getTime();

  const editTodoValue = (index: number, todo: string) => {
    setEditText(index);
    setValue(todo);
  };

  const saveTodo = (index: number) => {
   dispatch(editTodo({index, value}))
    setEditText(null);
    // setValue("")        
  };

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) =>
        editText == index ? (
          <div className={styless.todo}>
            <div>
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>
              <Button onClick={() => saveTodo(index)}>save</Button>
            </div>
          </div>
        ) : (
          <Todo
            key={todoId + index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodoValue}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
