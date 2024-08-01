import { Text } from "@medusajs/ui"

import Gls from "../../../common/icons/gls"
import NextJs from "../../../common/icons/nextjs"

const GlsIcons = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center text-stone-400 txt-small">
      Powered by
      <a href="https://greenleafstudio.it" target="_blank" rel="noreferrer">
        <Gls fill="#A0A5A7" className="fill-[#A0A5A7]" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#A0A5A7" />
      </a>
    </Text>
  )
}

export default GlsIcons
