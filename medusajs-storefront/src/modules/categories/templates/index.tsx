import { notFound } from "next/navigation"
import { Suspense } from "react"

import { ProductCategoryWithChildren } from "types/global"
import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import MobRefinementList from "@modules/store/components/refinement-list/mob"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Categories from "@modules/store/templates/categories"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
}: {
  categories: ProductCategoryWithChildren[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container bg-white dark:bg-stone-900">
      <div className="flex flex-col">
        <Categories />
        <div className="hidden lg:block">
          <RefinementList sortBy={sortBy || "created_at"} />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row mb-8 text-2xl-semi gap-4 font-tostada text-ui-fg-base justify-center lg:justify-start border-b-4 border-palette-1">
          {parents &&
            parents.map((parent) => (
              <span key={parent.id} className="text-ui-fg-subtle">
                <LocalizedClientLink
                  className="mr-4 hover:text-black"
                  href={`/categories/${parent.handle}`}
                >
                  {parent.name}
                </LocalizedClientLink>
                /
              </span>
            ))}
          <h1>{category.name}</h1>
        </div>
        {category.description && (
          <div className="mb-8 text-ui-fg-base font-now">
            <p>{category.description}</p>
          </div>
        )}

        <div className="block lg:hidden">
        <MobRefinementList sortBy={sortBy || "created_at"} />
        </div>
        {category.category_children && (
          <div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {category.category_children?.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
