import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "@modules/account/components/account-nav"
import { Customer } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12 h-[90dvh]">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white dark:bg-stone-900 flex flex-col">
        <div
             className={clx("grid py-12 lg:justify-center h-full", {
               "lg:grid-cols-2": customer,
               "grid-cols-1": !customer,
             })}
        >
          <div  className={clx("h-full", {
            "block": customer,
            "hidden": !customer,
          })}

          >{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
