import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
const Hero = () => {
  return (
    <div className="hero-container home w-full relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-8xl leading-10 text-ui-fg-base font-tostada"
          >
            Kizu
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
