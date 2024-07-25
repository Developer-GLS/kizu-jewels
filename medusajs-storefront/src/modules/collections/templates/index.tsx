import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import MobRefinementList from "@modules/store/components/refinement-list/mob"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import DesktopCategories from "@modules/store/templates/desktopCat"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import InteractiveLink from "@modules/common/components/interactive-link"

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
        <div className="border border-2 border-stone-900 py-12 me-12 mb-12">
          <LocalizedClientLink
            className="hover:text-ui-fg-base txt-small-plus font-tostada block text-center underline"
            href={`/store/`}
          >
            Explore our products
          </LocalizedClientLink>
        </div>
        <RefinementList sortBy={sortBy || "created_at"} />
      </div>
      <div className="w-full">
        <div className="flex justify-end lg:hidden mb-8">
          <InteractiveLink href={`/store/`}>
            Explore our products
          </InteractiveLink>
        </div>
        <div className="mb-2 lg:mb-8 text-2xl-semi font-tostada">
          <h1 className="text-ui-fg-base">{collection.title}</h1>
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
