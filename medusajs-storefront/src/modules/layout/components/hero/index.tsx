import { Heading, clx } from "@medusajs/ui"

type HeroProps = {
  className?: string
  title?: string
  titleSize?: "h1" | "h2" | "h3"
  titleCss?: string
  backgroundImageUrl?: string
}
const Hero = ({
    className,
    title,
    titleSize,
    titleCss,
    backgroundImageUrl
}: HeroProps) => {

  return (
    <div className={clx(
        'hero-container comp w-full relative bg-ui-bg-subtle',
        className
    )}
         style={{ backgroundImage: `url(${ backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level={titleSize}
            className ={clx(
                'font-tostada',
                titleCss
            )}
          >
            {title}
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
