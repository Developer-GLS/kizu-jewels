import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import TypoParagraphBlock from "@modules/layout/components/typo-par-block"

import ctaImg from "../../../../public/imgs/home/cta/img.png"
import CtaBlock from "@modules/layout/components/cta-block";

const ctaPar = 'Discover the artistry behind every piece at Kizu. Handcrafted with passion and precision, our unique creations are more than just accessories – they are timeless expressions of beauty. Learn about our journey, our commitment to quality, and the talented artisans who bring our designs to life. Explore our story and see why our jewelry is cherished by connoisseurs around the world.'

const fatTextValue = `What "Kizu" means?`
const longFirstPat = `
In Japanese, Kizu means a scratch, a subtle mark that tells a story of time, use, and cherished memories. Our creations, forged by hand, embrace this philosophy, 
celebrating the beauty in imperfection. Each piece is a testament to the skilled craftsmanship that intertwines modern design with traditional artistry. 
As the metal of our jewelry may bear the delicate traces of life's journey, the significance and emotions they hold will forever remain untarnished. 
We create more than jewelry; we craft enduring symbols of your unique experiences and timeless elegance. Every scratch adds character, every moment adds meaning, and together they form the narrative of a life well-lived.`



export const metadata: Metadata = {
  title: "GreenLeafStudio Jewlery Template",
  description: "A frontend ecommerce template developed by GreenLeafStudio",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="bg-white dark:bg-stone-900 pb:12 lg:pb-24">
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      <TypoParagraphBlock
        className="lg:mb-48 mx-12"
        fatText={fatTextValue}
        fatTextPosition="sx"
        fatTextCss="leading-relaxed fat-text text-ui-fg-base"
        paragraph={longFirstPat}
        paragraphWrapperCss="lg:w-2/5 mb-12"
        paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
      ></TypoParagraphBlock>

        <CtaBlock className="min-h-[800px] lg:mx-12" title="About us" titleSize="h3" titleCss="text-6xl text-stone-100" paragraph={ctaPar} parCss="text-justify text-stone-100 px-4"  backgroundImgUrl={ctaImg.src} haveCta={true} ctaLink='/about-us' ctaText='Discover more' ctaCss="block text-center mt-8"/>
    </div>
  )
}
