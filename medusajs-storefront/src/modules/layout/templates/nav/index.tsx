import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import DarkMode from "@modules/layout/components/dark-mode"
import { User, ShoppingBag, MagnifyingGlass } from "@medusajs/icons"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto duration-200 bg-white dark:bg-stone-900">
        <nav className="content-container txt-xsmall-plus text-stone-900 dark:text-white flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className=""
            >
              <div className="svg-wrapper py-8 dark:hidden">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 250.000000 250.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
                    fill="#1D1917"
                    stroke="none"
                  >
                    <path
                      d="M406 2348 c-14 -20 -16 -115 -16 -825 0 -790 0 -803 20 -823 20 -20
33 -20 835 -20 802 0 815 0 835 20 20 20 20 33 20 823 0 710 -2 805 -16 825
l-15 22 -824 0 -824 0 -15 -22z m792 -180 l3 -48 -258 0 c-188 0 -262 -3 -271
-12 -17 -17 -17 -1139 0 -1156 17 -17 1129 -17 1146 0 9 9 12 77 12 245 l0
233 50 0 50 0 -2 -292 -3 -293 -680 0 -680 0 -3 675 c-1 371 0 681 3 688 3 10
72 12 317 10 l313 -3 3 -47z m730 -220 l2 -268 -50 0 -50 0 0 208 c0 148 -3
211 -12 220 -16 16 -100 16 -116 0 -7 -7 -12 -36 -12 -65 l0 -53 -50 0 -50 0
0 53 c0 29 -5 58 -12 65 -8 8 -52 12 -130 12 l-118 0 0 43 c0 24 3 47 7 50 4
4 137 6 297 5 l291 -3 3 -267z m-373 -23 l0 -50 -314 -2 c-173 -1 -320 -4
-328 -7 -11 -5 -13 -68 -11 -343 l3 -338 340 0 340 0 3 58 3 57 49 0 50 0 0
-110 0 -110 -450 0 -450 0 0 443 c0 244 3 447 7 450 4 4 176 6 382 5 l376 -3
0 -50z m135 -270 l0 -215 -50 0 -50 0 0 215 0 215 50 0 50 0 0 -215z m-238 78
c2 -5 2 -101 0 -215 l-3 -208 -205 0 -204 0 0 215 0 215 204 0 c113 0 206 -3
208 -7z"
                    />
                    <path
                      d="M1010 610 c-40 -40 -13 -110 42 -110 51 0 78 85 36 114 -30 21 -54
20 -78 -4z"
                    />
                    <path
                      d="M480 340 l0 -250 60 0 60 0 0 213 c0 116 -3 229 -6 250 l-7 37 -53 0
-54 0 0 -250z"
                    />
                    <path
                      d="M748 556 c17 -19 33 -44 37 -55 3 -12 10 -21 14 -21 3 0 31 25 61 55
l54 55 -98 0 -98 0 30 -34z"
                    />
                    <path
                      d="M1032 413 c-49 -28 -62 -39 -56 -52 5 -9 10 -73 12 -143 l4 -128 59
0 59 0 -1 138 c0 75 -4 156 -7 179 l-7 42 -63 -36z"
                    />
                    <path
                      d="M1220 378 l0 -72 38 45 c20 24 47 53 60 65 12 12 22 24 22 28 0 3
-27 6 -60 6 l-60 0 0 -72z"
                    />
                    <path
                      d="M1337 285 c-65 -91 -120 -172 -123 -180 -5 -12 4 -15 53 -15 l60 0
119 167 c65 91 123 172 127 180 6 10 -5 13 -55 13 l-63 0 -118 -165z"
                    />
                    <path
                      d="M1670 350 c0 -133 23 -191 92 -226 l28 -15 0 171 0 170 -60 0 -60 0
0 -100z"
                    />
                    <path
                      d="M1900 321 c0 -70 3 -149 6 -175 l7 -46 53 0 54 0 0 175 0 175 -60 0
-60 0 0 -129z"
                    />
                    <path
                      d="M692 357 c-18 -18 -32 -36 -32 -40 0 -3 36 -56 81 -117 l81 -110 65
0 c51 0 62 3 56 14 -18 31 -208 286 -214 286 -3 0 -19 -15 -37 -33z"
                    />
                    <path d="M1502 160 l-63 -70 61 0 c70 0 72 3 68 83 l-3 57 -63 -70z" />
                  </g>
                </svg>
              </div>
              <div className="svg-wrapper py-8 hidden dark:block">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 250.000000 250.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
                    fill="#ffffff"
                    stroke="none"
                  >
                    <path
                      d="M406 2348 c-14 -20 -16 -115 -16 -825 0 -790 0 -803 20 -823 20 -20
33 -20 835 -20 802 0 815 0 835 20 20 20 20 33 20 823 0 710 -2 805 -16 825
l-15 22 -824 0 -824 0 -15 -22z m792 -180 l3 -48 -258 0 c-188 0 -262 -3 -271
-12 -17 -17 -17 -1139 0 -1156 17 -17 1129 -17 1146 0 9 9 12 77 12 245 l0
233 50 0 50 0 -2 -292 -3 -293 -680 0 -680 0 -3 675 c-1 371 0 681 3 688 3 10
72 12 317 10 l313 -3 3 -47z m730 -220 l2 -268 -50 0 -50 0 0 208 c0 148 -3
211 -12 220 -16 16 -100 16 -116 0 -7 -7 -12 -36 -12 -65 l0 -53 -50 0 -50 0
0 53 c0 29 -5 58 -12 65 -8 8 -52 12 -130 12 l-118 0 0 43 c0 24 3 47 7 50 4
4 137 6 297 5 l291 -3 3 -267z m-373 -23 l0 -50 -314 -2 c-173 -1 -320 -4
-328 -7 -11 -5 -13 -68 -11 -343 l3 -338 340 0 340 0 3 58 3 57 49 0 50 0 0
-110 0 -110 -450 0 -450 0 0 443 c0 244 3 447 7 450 4 4 176 6 382 5 l376 -3
0 -50z m135 -270 l0 -215 -50 0 -50 0 0 215 0 215 50 0 50 0 0 -215z m-238 78
c2 -5 2 -101 0 -215 l-3 -208 -205 0 -204 0 0 215 0 215 204 0 c113 0 206 -3
208 -7z"
                    />
                    <path
                      d="M1010 610 c-40 -40 -13 -110 42 -110 51 0 78 85 36 114 -30 21 -54
20 -78 -4z"
                    />
                    <path
                      d="M480 340 l0 -250 60 0 60 0 0 213 c0 116 -3 229 -6 250 l-7 37 -53 0
-54 0 0 -250z"
                    />
                    <path
                      d="M748 556 c17 -19 33 -44 37 -55 3 -12 10 -21 14 -21 3 0 31 25 61 55
l54 55 -98 0 -98 0 30 -34z"
                    />
                    <path
                      d="M1032 413 c-49 -28 -62 -39 -56 -52 5 -9 10 -73 12 -143 l4 -128 59
0 59 0 -1 138 c0 75 -4 156 -7 179 l-7 42 -63 -36z"
                    />
                    <path
                      d="M1220 378 l0 -72 38 45 c20 24 47 53 60 65 12 12 22 24 22 28 0 3
-27 6 -60 6 l-60 0 0 -72z"
                    />
                    <path
                      d="M1337 285 c-65 -91 -120 -172 -123 -180 -5 -12 4 -15 53 -15 l60 0
119 167 c65 91 123 172 127 180 6 10 -5 13 -55 13 l-63 0 -118 -165z"
                    />
                    <path
                      d="M1670 350 c0 -133 23 -191 92 -226 l28 -15 0 171 0 170 -60 0 -60 0
0 -100z"
                    />
                    <path
                      d="M1900 321 c0 -70 3 -149 6 -175 l7 -46 53 0 54 0 0 175 0 175 -60 0
-60 0 0 -129z"
                    />
                    <path
                      d="M692 357 c-18 -18 -32 -36 -32 -40 0 -3 36 -56 81 -117 l81 -110 65
0 c51 0 62 3 56 14 -18 31 -208 286 -214 286 -3 0 -19 -15 -37 -33z"
                    />
                    <path d="M1502 160 l-63 -70 61 0 c70 0 72 3 68 83 l-3 57 -63 -70z" />
                  </g>
                </svg>
              </div>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-stone-900 dark:text-white"
                  href="/search"
                  scroll={false}
                >
                  <MagnifyingGlass />
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="text-stone-900 dark:text-white hover:text-ui-fg-base font-bold"
                href="/account"
              >
                <User />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-stone-900 dark:text-white hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  <ShoppingBag />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <DarkMode />
          </div>
        </nav>
      </header>
    </div>
  )
}
