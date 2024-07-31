import type { UnknownAction } from '@reduxjs/toolkit'

import { addCounter, counterReducer, decrement, increment, removeCounter } from './counter'

describe('counter slice', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {} as UnknownAction)).toEqual([])
  })

  it('should add a new counter', () => {
    const initialState: number[] = []
    const newState = counterReducer(initialState, addCounter())

    expect(newState).toEqual([0])
  })

  it('should remove a counter at the specified index', () => {
    const initialState: number[] = [0, 1, 2]
    const newState = counterReducer(initialState, removeCounter(1))

    expect(newState).toEqual([0, 2])
  })

  it('should increment the counter at the specified index', () => {
    const initialState: number[] = [0, 1, 2]
    const newState = counterReducer(initialState, increment(1))

    expect(newState).toEqual([0, 2, 2])
  })

  it('should decrement the counter at the specified index', () => {
    const initialState: number[] = [0, 1, 2]
    const newState = counterReducer(initialState, decrement(1))

    expect(newState).toEqual([0, 0, 2])
  })
})
