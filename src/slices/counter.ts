import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState: number[] = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state) => {
      state.push(0)
    },
    removeCounter: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    increment: (state, action: PayloadAction<number>) => {
      state[action.payload] += 1
    },
    decrement: (state, action: PayloadAction<number>) => {
      state[action.payload] -= 1
    },
  },
})

export const { addCounter, removeCounter, increment, decrement } = counterSlice.actions

export const counterReducer = counterSlice.reducer
