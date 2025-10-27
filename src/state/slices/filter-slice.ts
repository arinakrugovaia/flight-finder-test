import { INITIAL_STATE } from '@/state/initialState.ts'
import type {
  TotalTransferAmounts,
  TransferAmountNumber,
} from '@/types/types.ts'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  transfersAmount: TotalTransferAmounts
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filters as FilterState,
  reducers: {
    checkTransferAmount(state, action: PayloadAction<TransferAmountNumber>) {
      state.transfersAmount[action.payload as keyof TotalTransferAmounts] = true
    },
    uncheckTransferAmount(state, action: PayloadAction<TransferAmountNumber>) {
      state.transfersAmount[action.payload as keyof TotalTransferAmounts] =
        false
    },
    checkAllTransferAmounts(state) {
      for (let i = 0 as TransferAmountNumber; i <= 6; i++) {
        state.transfersAmount[i as keyof TotalTransferAmounts] = true
      }
    },
    uncheckAllTransferAmounts(state) {
      for (let i = 1 as TransferAmountNumber; i <= 6; i++) {
        state.transfersAmount[i as keyof TotalTransferAmounts] = false
      }
    },
    checkOnlyNoTransfers(state) {
      for (let i = 1; i <= 6; i++) {
        state.transfersAmount[i as TransferAmountNumber] = false
      }
      state.transfersAmount[0] = true
    },
    setTotalTransferAmounts(
      state,
      action: PayloadAction<TransferAmountNumber[]>,
    ) {
      const newTransfersObj: TotalTransferAmounts = Object.fromEntries(
        action.payload.map((transfer) => [transfer, true]),
      )
      state.transfersAmount = { ...state.transfersAmount, ...newTransfersObj }
    },
    refreshTransfersState() {
      return INITIAL_STATE.filters
    },
  },
})

export const {
  checkTransferAmount,
  uncheckTransferAmount,
  checkAllTransferAmounts,
  uncheckAllTransferAmounts,
  checkOnlyNoTransfers,
  setTotalTransferAmounts,
  refreshTransfersState,
} = filterSlice.actions

export default filterSlice.reducer
