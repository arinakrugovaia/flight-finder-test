import { twMerge } from 'tailwind-merge'

type SortItemProps = {
  sortName: string
  sortText: string
  onChange?: () => void
  checked: boolean
  className?: string
}

export function SortItem({
  sortName,
  sortText,
  checked,
  onChange,
  className,
}: SortItemProps) {
  return (
    <div
      className={twMerge(
        className,
        'sort sm:max-w-1/3 w-full h-full bg-primary-white',
      )}
    >
      <input
        type="radio"
        id={`sort-${sortName}`}
        name="sort"
        value={sortName}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={`sort-${sortName}`}
        className={twMerge(
          className,
          'w-full h-full grid place-items-center text-xs lg:text-base p-3 lg:p-4',
        )}
      >
        {sortText}
      </label>
    </div>
  )
}
