import { SortItem } from '@/components/Sorts/SortItem.tsx'
import { sortsInfo } from '@/constants/sort.ts'
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
    <div className="flex flex-col sm:flex-row divide-y sm:divide-x divide-secondary-light-gray border border-secondary-light-gray rounded-base">
      <SortItem
        {...sortsInfo.cheapest}
        onChange={handleCheapestSortClick}
        checked={sort === CHEAPEST}
        className="rounded-l-base"
      />
      <SortItem
        {...sortsInfo.fastest}
        onChange={handleFastestSortClick}
        checked={sort === FASTEST}
      />
      <SortItem
        {...sortsInfo.optimal}
        onChange={handleOptimalSortClick}
        checked={sort === OPTIMAL}
        className="rounded-r-base"
      />
    </div>
  )
}
