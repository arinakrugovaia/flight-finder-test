import { CHEAPEST, FASTEST, OPTIMAL } from '@/state/constants/sort-constants.ts'
import { INITIAL_STATE } from '@/state/initialState.ts'
import { createSlice } from '@reduxjs/toolkit'

const sortSlice = createSlice({
  name: 'sort',
  initialState: INITIAL_STATE.sort,
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
      return INITIAL_STATE.sort
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
