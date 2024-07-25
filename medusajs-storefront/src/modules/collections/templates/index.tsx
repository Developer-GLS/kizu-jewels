import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import MobRefinementList from "@modules/store/components/refinement-list/mob"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import DesktopCategories from "@modules/store/templates/desktopCat"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container bg-white dark:bg-stone-900">
      <div className="flex flex-col hidden lg:block">
        <DesktopCategories />
        <RefinementList sortBy={sortBy || "created_at"} />
      </div>
      <div className="w-full">
        <div className="mb-8 text-2xl-semi font-tostada">
          <h1>{collection.title}</h1>
        </div>
        <div className="block lg:hidden">
        <MobRefinementList sortBy={sortBy || "created_at"} />
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
