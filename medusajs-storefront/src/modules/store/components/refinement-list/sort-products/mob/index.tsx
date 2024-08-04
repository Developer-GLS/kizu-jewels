import { ArrowUpDown } from "@medusajs/icons"
import { DropdownMenu, IconButton } from "@medusajs/ui"
import React from "react"


export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
}

const MobSortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const [sort, setSort] = React.useState<SortOptions>("created_at")

  const handleChange = (e: SortOptions) => {
    setSort(e)
    const newSortBy = e as SortOptions
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <div className="flex flex-col items-center gap-y-2">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <IconButton size="base" className="rounded-none focus:shadow-palette-1">
            <ArrowUpDown />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-[300px]">
          <DropdownMenu.RadioGroup
            value={sort}
            onValueChange={(v) => handleChange(v as SortOptions)}
          >
            <p className="text-center uppercase text-medium-semi">Sort</p>
            <DropdownMenu.Separator />
            <DropdownMenu.RadioItem value="price_desc">
             Highter price first
              <DropdownMenu.Hint>$$$-$</DropdownMenu.Hint>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="price_asc">
            Lower price first
              <DropdownMenu.Hint>$-$$$</DropdownMenu.Hint>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="created_at">
              Created At - Descending
              <DropdownMenu.Hint>30 - 1</DropdownMenu.Hint>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
export default MobSortProducts