import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialValue:{todos: string[]} = {
    todos: []
  }

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return {todos: state.todos.filter((todo, i) => i !== action.payload)}
    },
    editTodo: (state, action) => {
      const {index, value} =  action.payload
      return {todos: state.todos.map((item, idx) => 
        idx === index ? value : item)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer