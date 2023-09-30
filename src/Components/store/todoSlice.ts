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
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer