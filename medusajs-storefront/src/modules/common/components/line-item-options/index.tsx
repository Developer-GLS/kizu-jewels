import { ProductVariant } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = { variant: ProductVariant }

const LineItemOptions = ({ variant }: LineItemOptionsProps) => {
  return (
    <Text className="inline-block text-medium text-sm text-stone-900 w-full overflow-hidden text-ellipsis">
      Variant: {variant.title}
    </Text>
  )
}

export default LineItemOptions
