import filterReducer from '@/state/slices/filter-slice.ts'
import searchReducer from '@/state/slices/search-slice.ts'
import sortReducer from '@/state/slices/sort-slice.ts'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
    filters: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
