/** @format */

import { lazy, useState } from 'react';
import styles from './TodoList.module.css';
import styless from './Todo.module.css';
import Todo from './Todo';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { editTodo } from './store/todoSlice';
import { title } from 'process';
import { useRef } from 'react';


interface ITodoList {
  todos: any ;
  setTodos: any;
  deleteTodo: (index: string) => void;
}

const TodoList = ({ todos, deleteTodo, setTodos }: ITodoList) => {
  const dispatch = useDispatch()
  const [editText, setEditText] = useState<number | null | string>(null);
  const [value, setValue] = useState<string>('');
  const valueRef = useRef<string>()
  

  const editTodoValue = (id: number, todo: string) => {
    setEditText(id);
    setValue(todo);

  };

  const saveTodo = (id: string, value:string) => {
   dispatch(editTodo({id, value}))
   setValue(value)
   setEditText(null);
  };

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo:any, index:any) =>
        editText == todo.id ? (
          <div className={styless.todo}>
            <div>
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div>
              <Button onClick={() => saveTodo(todo.id, value)}>save</Button>
            </div>
          </div>
        ) : (
          <Todo
          key={todo.id}
          todo={todo.title}
          index={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodoValue}
          value={value}
          />
          )
          )}
    </div>
  );
};

export default TodoList;
