import { CHEAPEST, FASTEST, OPTIMAL } from '@/state/constants/sort-constants.ts'
import { initialState } from '@/state/initialState.ts'
import { createSlice } from '@reduxjs/toolkit'

const sortSlice = createSlice({
  name: 'sort',
  initialState: initialState.sort,
  reducers: {
    sortByCheapest() {
      return CHEAPEST
    },
    sortByFastest() {
      return FASTEST
    },
    sortByOptimal() {
      return OPTIMAL
    },
    refreshSortState() {
      return initialState.sort
    },
  },
})

export const {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
  refreshSortState,
} = sortSlice.actions
export default sortSlice.reducer
