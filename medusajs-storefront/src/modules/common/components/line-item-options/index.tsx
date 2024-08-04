import { ProductVariant } from "@medusajs/medusa"
import { Text, clx } from "@medusajs/ui"

type LineItemOptionsProps = { variant: ProductVariant, darkModeOverride?: boolean }

const LineItemOptions = ({ variant, darkModeOverride }: LineItemOptionsProps) => {
  return (

    <Text className={clx(
      "inline-block text-medium text-xs w-full overflow-hidden text-ellipsis",
      {
        "text-ui-fg-base": !darkModeOverride,
        "text-stone-900": darkModeOverride,
      
      })}>
      Variant: {variant.title}
      
    </Text>
  )
}

export default LineItemOptions
