import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import ImageParagraphBlock from "@modules/layout/components/par-block"
import TypoParagraphBlock from "@modules/layout/components/typo-par-block"
import firstParImg from "../../../assets/imgs/home/paragraphs/Par_1/img.webp"
import secondParImg from "../../../assets/imgs/home/paragraphs/Par_2/img.webp"

const fatTextValue = `What "Kizu" means?`

const longFirstPat = `
In Japanese, Kizu means a scratch, a subtle mark that tells a story of time, use, and cherished memories. Our creations, forged by hand, embrace this philosophy, 
celebrating the beauty in imperfection. Each piece is a testament to the skilled craftsmanship that intertwines modern design with traditional artistry. 
As the metal of our jewelry may bear the delicate traces of life's journey, the significance and emotions they hold will forever remain untarnished. 
We create more than jewelry; we craft enduring symbols of your unique experiences and timeless elegance. Every scratch adds character, every moment adds meaning, and together they form the narrative of a life well-lived.`

const longSecondPar = `
Our creative process honors both tradition and innovation, resulting in timeless, handcrafted jewelry. Each piece begins as a concept, born from the delicate balance between nature's imperfections and human artistry. ${"\n"}
Hand-forging every element with unparalleled precision and care, we use the finest metals, allowing each piece to develop its own unique character through time-honored techniques.${"\n"} ${"\n"}
We also believe that a piece of jewelry is not just an accessory but a powerful symbol, transcending labels and embracing individuality. Our designs are minimalist and elegant, focusing on clean lines and refined simplicity. Each piece is crafted to resonate with anyone who wears it, regardless of gender, celebrating personal expression and unique experiences.
Kizu oreficians tries to forge a wearable work of art, designed to be lived, worn, and passed down through generations, embodying the essence of ageless beauty and personal meaning.
`

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
    <div className="dark:bg-black bg-white">
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      <TypoParagraphBlock
        className="mb-64"
        fatText={fatTextValue}
        fatTextPosition="sx"
        fatTextCss="leading-relaxed fat-text dark:text-white"
        paragraph={longFirstPat}
        paragraphWrapperCss="lg:w-2/5 mb-12"
        paragraphCss="text-lg font-now text-justify md:text-start dark:text-white"
      ></TypoParagraphBlock>


      <ImageParagraphBlock
        title="Our process"
        titleSize="h3"
        titleCss="text-4xl mb-24 dark:text-white"
        imgPath={secondParImg}
        imgAlt="H ring"
        imgPosition="sx"
        paragraph={longSecondPar}
        paragraphWrapperCss="md:w-2/5 my-12 md:mt-0 md:pe-12"
        paragraphCss="text-lg font-now text-justify md:text-start dark:text-white"
      />
    </div>
  )
}
