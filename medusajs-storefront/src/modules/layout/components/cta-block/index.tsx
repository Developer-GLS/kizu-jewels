import { Text, Heading, clx, Button } from "@medusajs/ui"
import LocalizedClientLink  from "@modules/common/components/localized-client-link";

type ctaBlockProps = {
    className?: string
    title?: string
    titleSize?: "h1" | "h2" | "h3"
    titleCss?: string
    paragraph?: string
    parCss?: string
    haveCta?: boolean
    ctaText?: string
    ctaCss?: string
    ctaLink?: string
    backgroundImgUrl?: string
}

const CTABlock = ({
                        className,
                        title,
                        titleCss,
                        titleSize,
                        paragraph,
                        parCss,
                        haveCta,
                        ctaCss,
                        ctaText,
                        ctaLink,
                        backgroundImgUrl,
                    }: ctaBlockProps) => {
    return (
        <div
            className={clx(
                'relative bg-cover bg-bottom p-8 rounded-lg shadow-lg grid gap-4 md:grid-cols-2 cta-block',
                className
            )}
            style={{ backgroundImage: `url(${backgroundImgUrl})` }}
        >
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
            <Heading
                className={clx("font-now text-center", titleCss)}
                level={titleSize}
            >
                {title}
            </Heading>
            <Text className={clx('mt-4', parCss)} size="xlarge">{paragraph}</Text>
            {haveCta && (
                <LocalizedClientLink
                    href={ctaLink ?? ''}
                    className={clx('', ctaCss)}
                >
                    <Button className="mx-auto" size="large">
                        {ctaText}
                    </Button>

                </LocalizedClientLink>

            )}
            </div>
        </div>
    );
};

export default CTABlock;
