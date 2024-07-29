import Hero from "@modules/layout/components/hero"
import bgImage from "../../../../public/imgs/about/bg.png"

import ImageParagraphBlock from "@modules/layout/components/par-block"
import TypoParagraphBlock from "@modules/layout/components/typo-par-block"
import CTABlock from "@modules/layout/components/cta-block"

import processImg from "../../../../public/imgs/about/paragraphs/par-1/img.webp"
import ctaImg from "../../../../public/imgs/about/cta.png"

const visionPar = `At Kizu, our vision is to create jewelry that celebrates the beauty of diversity and the power of individuality. 
We believe that every piece should tell a unique story, reflecting the distinct personality and style of the wearer. 
Our designs are inspired by the intricate patterns and forms found in nature and the cosmos, symbolizing the endless possibilities of self-expression. 
We are committed to crafting high-quality, timeless pieces that not only enhance personal style but also resonate with the values of inclusivity and uniqueness. 
At Kizu, we aspire to be more than just a jewelry brand; we strive to be a beacon of inspiration, encouraging everyone to embrace their true selves and shine brightly in their own unique way.
`

const inclusionPar = `At Kizu, inclusivity and style go hand in hand. Our jewelry is designed to transcend traditional boundaries, offering pieces that are as diverse and unique as the individuals who wear them. 
We believe that everyone should have the opportunity to express their personal style, regardless of gender, background, or preferences. 
Our collections feature a wide range of designs, from bold and avant-garde to subtle and minimalistic, ensuring that there is something for everyone. 
By incorporating various materials, gemstones, and design elements, we create pieces that resonate with a broad spectrum of tastes and identities. 
At Kizu, we are dedicated to fostering a sense of belonging and celebrating the beauty of individuality through our thoughtfully crafted jewelry.
`

const processPar = `Our creative process honors both tradition and innovation, resulting in timeless, handcrafted jewelry. Each piece begins as a concept, born from the delicate balance between nature's imperfections and human artistry. ${"\n"}
Hand-forging every element with unparalleled precision and care, we use the finest metals, allowing each piece to develop its own unique character through time-honored techniques.${"\n"} ${"\n"}
We also believe that a piece of jewelry is not just an accessory but a powerful symbol, transcending labels and embracing individuality. Our designs are minimalist and elegant, focusing on clean lines and refined simplicity. Each piece is crafted to resonate with anyone who wears it, regardless of gender, celebrating personal expression and unique experiences.
Kizu oreficians tries to forge a wearable work of art, designed to be lived, worn, and passed down through generations, embodying the essence of ageless beauty and personal meaning.
`

const sustainibilityPar = `At Kizu, our commitment to sustainability is at the core of everything we do. We believe in creating beautiful jewelry that not only celebrates individuality but also respects our planet. 
Our sourcing practices prioritize ethically obtained materials and gemstones, ensuring that our pieces are not only exquisite but also responsibly made. 
We strive to minimize our environmental footprint through sustainable production methods, recyclable packaging, and energy-efficient operations. 
By choosing Kizu, you are not only embracing unique and inclusive designs but also supporting a brand dedicated to making a positive impact on the world. 
Together, we can create a more sustainable future, one stunning piece of jewelry at a time.
`

const ctaPar = "Whether you're drawn to bold, avant-garde designs or subtle, minimalistic elegance, Kizu has something special just for you. Embrace the beauty of diversity and express your individuality with our thoughtfully crafted jewelry. Click now to explore and elevate your personal style with Kizu!"

const AboutTemplate = ({}) => {
  return (
    <div className="bg-white dark:bg-stone-900 pb-48">
      <Hero
        className="mb-12"
        title="About us"
        titleCss="text-8xl leading-10 text-ui-fg-base"
        titleSize="h1"
        backgroundImageUrl={bgImage.src}
      />

      <TypoParagraphBlock
        className="lg:mb-48 mx-12 py-12"
        fatText="Our vision"
        fatTextPosition="sx"
        fatTextCss="leading-relaxed fat-text text-ui-fg-base"
        paragraph={visionPar}
        paragraphWrapperCss="lg:w-2/5 mb-12"
        paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
      ></TypoParagraphBlock>

      <TypoParagraphBlock
        className="lg:mb-48 mx-12 py-12"
        fatText="Inclusive Jewlery"
        fatTextPosition="dx"
        fatTextCss="leading-relaxed fat-text text-ui-fg-base"
        paragraph={inclusionPar}
        paragraphWrapperCss="lg:w-2/5 mb-12"
        paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
      ></TypoParagraphBlock>

      <ImageParagraphBlock
        className="lg:mb-48"
        title="Our process"
        titleSize="h3"
        titleCss="text-4xl mb-8 lg:mb-24 text-ui-fg-base"
        imgPath={processImg}
        imgAlt="H ring"
        imgPosition="sx"
        paragraph={processPar}
        paragraphWrapperCss="md:w-2/5 my-12 md:mt-0 md:pe-12"
        paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
      />

      <TypoParagraphBlock
        className="lg:mb-48 mx-12 py-12"
        fatText="Respect our planet"
        fatTextPosition="sx"
        fatTextCss="leading-relaxed fat-text text-ui-fg-base"
        paragraph={sustainibilityPar}
        paragraphWrapperCss="lg:w-2/5 mb-12"
        paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
      ></TypoParagraphBlock>

      <CTABlock
        className="min-h-[800px] lg:mx-12 my-8 bg-bottom"
        direction="dx"
        title="Explore our products"
        titleSize="h3"
        titleCss="text-6xl text-stone-100 mb-16 lg:mg-0"
        paragraph={ctaPar}
        parCss="text-justify text-stone-100 px-4"
        backgroundImgUrl={ctaImg.src}
        haveCta={true}
        ctaLink="/store"
        ctaText="Explore now"
        ctaCss="block text-center mt-8"
      />
    </div>
  )
}

export default AboutTemplate
