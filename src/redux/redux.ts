import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {INews } from '../types/News'

// type INewsDateTime = Omit<INews, 'createdAt'> & { createdAt: string };

interface INewsState {
  news: INews<string>[]
}

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: []
  } as INewsState,
  reducers: {
    setStore: (state, action: PayloadAction<INews<string>[]>) => {
      state.news = action.payload
    },
  }
})

export const { setStore, } = newsSlice.actions

export const store = configureStore({
  reducer: newsSlice.reducer,
})



export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()