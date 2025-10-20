import { TransferAmountAllFilter } from '@/components/Filters/TransferAmountAllFilter.tsx'
import { TransferAmountParticularFilter } from '@/components/Filters/TransferAmountParticularFilter.tsx'
import { getAllUniqueTransfers, getTransfersAmount } from '@/state/selectors.ts'
import {
  checkAllTransferAmounts,
  checkOnlyNoTransfers,
  checkTransferAmount,
  uncheckAllTransferAmounts,
  uncheckTransferAmount,
} from '@/state/slices/filter-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import type { TransferAmountNumber } from '@/types/types.ts'
import { type ChangeEvent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function FiltersLayout() {
  const dispatch = useDispatch<AppDispatch>()
  const transfersAmountState = useSelector(getTransfersAmount)
  const allUniqueTransfers = useSelector(
    getAllUniqueTransfers,
  ) as TransferAmountNumber[]

  const handleAllTransferAmountsChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(checkAllTransferAmounts())
      } else {
        dispatch(uncheckAllTransferAmounts())
      }
    },
    [dispatch],
  )

  const handleTransferAmountFilterChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      transferAmount: TransferAmountNumber,
    ) => {
      if (event.target.checked) {
        dispatch(checkTransferAmount(transferAmount))
      } else {
        dispatch(uncheckTransferAmount(transferAmount))
      }
    },
    [dispatch],
  )

  const handleNoTransfersChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(checkOnlyNoTransfers())
        dispatch(uncheckAllTransferAmounts())
      } else {
        dispatch(uncheckTransferAmount(0))
      }
    },
    [dispatch],
  )

  const transfersAmountFilters = allUniqueTransfers
    .filter((transferNumber) => transferNumber !== 0)
    .map((transferNumber) => (
      <TransferAmountParticularFilter
        key={transferNumber}
        transferNumber={transferNumber as TransferAmountNumber}
        checked={!!transfersAmountState[transferNumber]}
        onChange={(e) =>
          handleTransferAmountFilterChange(
            e,
            transferNumber as TransferAmountNumber,
          )
        }
      />
    ))

  const allTransfersChecked = Object.values(transfersAmountState).every(
    (value) => value === true,
  )

  return (
    <div className="md:max-w-[260px] w-full bg-primary-white py-4 lg:py-5 rounded-base shadow-base">
      <div className="pl-5 mb-2 md:mb-3 text-sm uppercase text-primary-dark">
        Количество пересадок
      </div>
      <TransferAmountAllFilter
        checked={allTransfersChecked}
        onChange={handleAllTransferAmountsChange}
      />
      <TransferAmountParticularFilter
        transferNumber={0}
        checked={transfersAmountState[0] || false}
        onChange={handleNoTransfersChange}
      />
      {transfersAmountFilters}
    </div>
  )
}
