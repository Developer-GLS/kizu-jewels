import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
const Hero = () => {
  return (
    <div className="hero-container w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-8xl leading-10 dark:text-white text-stone-800 font-tostada"
          >
            Kizu
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
