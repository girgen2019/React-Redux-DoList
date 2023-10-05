/** @format */

import styles from './Todo.module.css';
import { useState } from 'react';
import { Button, Input } from 'antd';

interface ITodo {
  todo: string;
  index: number;
  deleteTodo: (index: any) => void;
  editTodo: (index: number, todo: string) => void;
  value: any;
}

const Todo = ({ todo, index, deleteTodo, editTodo, value }: ITodo) => {



  let date: Date = new Date();
  return (
    <>
      <ul className={styles.todo}>
        <li className={styles.todoText}>{todo}</li>
        <Button onClick={() => editTodo(index, todo)} size="small">
          edit
        </Button>
        <Button
          onClick={() => deleteTodo(index)}
          style={{ color: 'red' }}
          size="small"
        >
          &times;
        </Button>
        <div style={{ fontSize: '10px' }}>
          {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.
          {date.getMonth() + 1}.{date.getFullYear()}
        </div>
      </ul>
    </>
  );
};

export default Todo;
