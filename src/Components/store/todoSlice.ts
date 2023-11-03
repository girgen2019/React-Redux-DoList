import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Todo} from '../type/Todo'


const initialState: Todo[] = [];


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: new Date().toString(),
        title: action.payload,
        completed: false,
      }

      return [newTodo, ...state]
    },
    removeTodo: (state, action: PayloadAction<Todo['id']>) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      const {id, value} =  action.payload
      
      return state.map((todo) => 
        todo.id === id ? {...todo, title:value} : todo)
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer