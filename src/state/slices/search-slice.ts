import { fetchTickets } from '@/api/SearchRequestApi.ts'
import { TICKETS_PER_PAGE } from '@/state/constants/search-constants.ts'
import { INITIAL_STATE } from '@/state/initialState.ts'
import type { Tickets } from '@/types/types.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTicketsThunk = createAsyncThunk<
  Tickets,
  void,
  { rejectValue: string }
>('search/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const data = await fetchTickets()
    return data
  } catch (err) {
    return rejectWithValue((err as Error).message || 'Неизвестная ошибка')
  }
})

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE.search,
  reducers: {
    showMoreTickets(state) {
      state.visibleCount += TICKETS_PER_PAGE
    },
    refreshSearchState() {
      return INITIAL_STATE.search
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTicketsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allTickets.push(...action.payload)
      })
      .addCase(fetchTicketsThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Неизвестная ошибка'
      })
  },
})

export const { showMoreTickets, refreshSearchState } = searchSlice.actions
export default searchSlice.reducer
