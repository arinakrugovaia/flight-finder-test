import type { TransferAmountNumber } from '@/types/types'
import { stringifyTransferAmount } from '@/utils/stringifyTransferAmount.ts'
import type { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'

interface TransferAmountParticularFilterProps {
  transferNumber: TransferAmountNumber
  checked: boolean
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    transferAmountNumber: TransferAmountNumber,
  ) => void
}

export function TransferAmountParticularFilter({
  transferNumber,
  checked,
  onChange,
}: TransferAmountParticularFilterProps) {
  const { eng: transferAmountString, ru: transferAmountDescription } =
    stringifyTransferAmount(transferNumber)
  return (
    <label className={twMerge("transfer-amount-filter", "flex items-center gap-3 cursor-pointer py-1.5 md:py-3 px-4 md:px-5")}>
      <input
        type="checkbox"
        checked={checked}
        name={`filter-transfer-amount-${transferAmountString}`}
        onChange={(event) => onChange(event, transferNumber)}
      />
      <span className="custom-checkbox"></span>
      <span className="text-sm text-primary-dark">
        {transferAmountDescription}
      </span>
    </label>
  )
}
