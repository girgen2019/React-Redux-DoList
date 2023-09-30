import styles from './Todo.module.css';
import { useState } from 'react';
import { Button,  Input, } from 'antd';


interface ITodo {
  todo:string,
  index:number,
  deleteTodo:(index: number) => void,
  editTodo:(index:number, todo:string) => void,
}

const Todo = ({ todo, index, deleteTodo, editTodo}: ITodo) => {

let date:Date = new Date()
  return (
    <>
      <ul className={styles.todo} >
        <li className={styles.todoText}>{todo}</li>
        <Button onClick={() => editTodo(index,todo)}>edit</Button>
        <Button onClick={() => deleteTodo(index)} style={{color:"red"}}>&times;</Button>
      </ul>
      {date.getDate()}.0{date.getMonth()+1}.{date.getFullYear()}
    </>
  );
};

export default Todo;
