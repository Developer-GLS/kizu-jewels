"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"


import MobSortProducts, {SortOptions} from "../sort-products/mob"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
}

const MobRefinementList = ({ sortBy }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex justify-end gap-12 py-4 mb-8 pl-6">
      <MobSortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
    </div>
  )
}

export default MobRefinementList
