import type { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'

interface TransferAmountAllFilterProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

export function TransferAmountAllFilter({
  onChange,
  checked,
}: TransferAmountAllFilterProps) {
  return (
    <label className={twMerge("transfer-amount-filter", "flex items-center gap-3 cursor-pointer py-1.5 md:py-3 px-4 md:px-5")}>
      <input
        type="checkbox"
        name="filter-transfer-amount-all"
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-checkbox"></span>
      <span className="text-sm text-primary-dark">Все</span>
    </label>
  )
}
