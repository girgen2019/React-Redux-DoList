/** @format */

import { useState } from 'react';
import styles from './TodoList.module.css';
import styless from './Todo.module.css';
import Todo from './Todo';
import { Button, Input } from 'antd';

interface ITodoList {
  todos: string[];
  setTodos: any;
  deleteTodo: (index: number) => void;
}

const TodoList = ({ todos, deleteTodo, setTodos }: ITodoList) => {
  const [editText, setEditText] = useState<number | null | string>(null);
  const [value, setValue] = useState<string>('');
  const todoId = new Date().getTime();

  const editTodo = (index: number, todo: string) => {
    setEditText(index);
    setValue(todo);
  };

  const saveTodo = (index: number) => {
    let newTodo = todos.map((item, idx) => {
      if (idx === index) {
        item = value;
      }
      setValue(item);
    });
    setTodos(newTodo);
    setEditText(null);
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
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
