
import Hero from "@modules/layout/components/hero"
import bgImage from "../../../../public/imgs/about/img.png"


import ImageParagraphBlock from "@modules/layout/components/par-block";

import parImg from "../../../assets/imgs/home/paragraphs/Par_2/img.webp";
const longPar = `
Our creative process honors both tradition and innovation, resulting in timeless, handcrafted jewelry. Each piece begins as a concept, born from the delicate balance between nature's imperfections and human artistry. ${"\n"}
Hand-forging every element with unparalleled precision and care, we use the finest metals, allowing each piece to develop its own unique character through time-honored techniques.${"\n"} ${"\n"}
We also believe that a piece of jewelry is not just an accessory but a powerful symbol, transcending labels and embracing individuality. Our designs are minimalist and elegant, focusing on clean lines and refined simplicity. Each piece is crafted to resonate with anyone who wears it, regardless of gender, celebrating personal expression and unique experiences.
Kizu oreficians tries to forge a wearable work of art, designed to be lived, worn, and passed down through generations, embodying the essence of ageless beauty and personal meaning.
`

const AboutTemplate = ({}) => {

  return (
      <div className="bg-white dark:bg-stone-900 pb-48">
          <Hero className="mb-12"  title='About us'  titleCss="text-8xl leading-10 text-ui-fg-base" titleSize="h1" backgroundImageUrl={bgImage.src}/>
          <ImageParagraphBlock
              title="Our process"
              titleSize="h3"
              titleCss="text-4xl mb-8 lg:mb-24 text-ui-fg-base"
              imgPath={parImg}
              imgAlt="H ring"
              imgPosition="sx"
              paragraph={longPar}
              paragraphWrapperCss="md:w-2/5 my-12 md:mt-0 md:pe-12"
              paragraphCss="text-lg font-now text-justify md:text-start text-ui-fg-base"
          />

      </div>


)
}

export default AboutTemplate
