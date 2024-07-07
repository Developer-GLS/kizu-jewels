import { Spinner, Trash } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useState } from "react"

import { deleteLineItem } from "@modules/cart/actions"

const DeleteButton = ({
  id,
  children,
  className,
    cartPage = false
}: {
  id: string
  children?: React.ReactNode
  className?: string
  cartPage?: boolean
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    await deleteLineItem(id).catch((err) => {
      setIsDeleting(false)
    })
  }

  return (
    <div
      className={clx(
        "flex items-center justify-end text-small-regular",
        className
      )}
    >

      <button
          className={clx(
              "flex gap-x-1 text-stone-900 hover:text-stone-400 cursor-pointer",
              {
                'text-ui-fg-base': cartPage
              }
          )}
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? <Spinner className="animate-spin" /> : <Trash />}
        <span>{children}</span>
      </button>
    </div>
  )
}

export default DeleteButton
