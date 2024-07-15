import { Metadata } from "next"
import AboutTemplate from "@modules/about/templates";



export const metadata: Metadata = {
    title: "GreenLeafStudio Jewlery Template - About us Kizu",
    description: "A frontend ecommerce template developed by GreenLeafStudio - About us Page",
}

export default async function AboutPage({}: {}) {


    return (
        <div>
            <AboutTemplate />
        </div>
    )
}