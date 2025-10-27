import { SortItem } from '@/components/Sorts/SortItem.tsx'
import { SORTS_INFO } from '@/constants/sort.ts'
import { CHEAPEST, FASTEST, OPTIMAL } from '@/state/constants/sort-constants.ts'
import { getSort } from '@/state/selectors.ts'
import {
  sortByCheapest,
  sortByFastest,
  sortByOptimal,
} from '@/state/slices/sort-slice.ts'
import type { AppDispatch } from '@/state/store.ts'
import { useDispatch, useSelector } from 'react-redux'

export function Sorts() {
  const dispatch = useDispatch<AppDispatch>()
  const sort = useSelector(getSort)

  const handleCheapestSortClick = () => {
    dispatch(sortByCheapest())
  }

  const handleFastestSortClick = () => {
    dispatch(sortByFastest())
  }

  const handleOptimalSortClick = () => {
    dispatch(sortByOptimal())
  }

  return (
    <div
      className="
      flex flex-col divide-y sm:flex-row sm:divide-y-0 sm:divide-x
      divide-secondary-light-gray border border-secondary-light-gray
      rounded-base
    "
    >
      <SortItem
        {...SORTS_INFO.cheapest}
        onChange={handleCheapestSortClick}
        checked={sort === CHEAPEST}
        className="rounded-l-base"
      />
      <SortItem
        {...SORTS_INFO.fastest}
        onChange={handleFastestSortClick}
        checked={sort === FASTEST}
      />
      <SortItem
        {...SORTS_INFO.optimal}
        onChange={handleOptimalSortClick}
        checked={sort === OPTIMAL}
        className="rounded-r-base"
      />
    </div>
  )
}
