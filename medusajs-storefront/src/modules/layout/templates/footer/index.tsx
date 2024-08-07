import { Text, clx } from "@medusajs/ui"

import { getCategoriesList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import GlsIcons from "@modules/layout/components/gls-icons"

export default async function Footer() {
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-stone-200 dark:bg-stone-700">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-24 flex-wrap">
          <div className="w-full md:w-1/3">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <div className="svg-wrapper py-8 dark:hidden">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 250.000000 250.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="mx-auto md:ms-8"
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
              <div className="dark-svg-wrapper py-8 hidden dark:block">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 250.000000 250.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="mx-auto md:ms-8"
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
          <div className="w-full md:w-2/3 text-small-regular gap-10 md:gap-x-16 grid grid-cols-1 sm:grid-cols-2">

          <div className="flex flex-col gap-y-2">
              <span className="text-ui-fg-base uppercase font-bold font-now">
                Store
              </span>
              <ul className="grid grid-cols-1 gap-2">
                <li className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base txt-small-plus")}
                    href={`/about-us/`}
                  >
                    About us
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base txt-small-plus")}
                    href={`/search/`}
                  >
                    Search
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base txt-small-plus")}
                    href={`/store/`}
                  >
                    Shop
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base txt-small-plus")}
                    href={`/cart/`}
                  >
                    Cart
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base txt-small-plus")}
                    href={`/account/`}
                  >
                    Account
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-ui-fg-base uppercase font-bold font-now">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-stone-800 dark:text-white txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full mb-8 justify-center md:justify-between text-ui-fg-muted flex-wrap">
          <Text className="txt-compact-small w-full md:w-auto text-center md:text-start mb-8 md:mb-0 text-stone-400 txt-small">
            © {new Date().getFullYear()} Kizu Jewlery. All rights reserved.
          </Text>
          <GlsIcons />
        </div>
      </div>
    </footer>
  )
}
