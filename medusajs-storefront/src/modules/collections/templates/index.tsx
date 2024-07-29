import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import MobRefinementList from "@modules/store/components/refinement-list/mob"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import CTABlock from "@modules/layout/components/cta-block"
import InteractiveLink from "@modules/common/components/interactive-link"
import ctaImg from "../../../../public/imgs/collections/cta/img.png"

const ctaPar = "Explore our categories and products now and find the perfect match for your style and needs."

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
    <div>
      <div className="flex flex-col small:flex-row small:items-start py-6 content-container bg-white dark:bg-stone-900">
        <div className="flex flex-col hidden lg:block">
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
      <div className="w-full content-container p-0 pt-8">
        <CTABlock
          className="min-h-[200px] lg:mx-12 mt-8 mb-16"
          direction="dx"
          title="Explore our products"
          titleSize="h3"
          titleCss="text-6xl text-stone-100"
          paragraph={ctaPar}
          parCss="text-justify text-stone-100 px-4"
          backgroundImgUrl={ctaImg.src}
          haveCta={true}
          ctaLink="/store"
          ctaText="Explore now"
          ctaCss="block text-center mt-8"
        />
      </div>
    </div>
  )
}
