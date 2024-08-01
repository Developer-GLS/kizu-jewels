import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import DesktopCategories from "./desktopCat"
import MobileCategories from "./mobileCat"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start lg:py-6 content-container bg-white dark:bg-stone-900">
      <div className="flex flex-col hidden lg:block">
        <DesktopCategories />
        <RefinementList sortBy={sortBy || "created_at"} />
      </div>
      <div className="w-full hidden lg:block">
        <div className="mb-8 text-2xl-semi">
          <h1 className="text-ui-fg-base font-tostada">All products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
      <div className="w-full block lg:hidden">
        <MobileCategories />
      </div>
    </div>
  )
}

export default StoreTemplate
