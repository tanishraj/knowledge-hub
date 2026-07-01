import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface HeroCard {
  title: string;
  description: string;
  image?: Image;
  icon?: React.ReactNode;
  href?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroCardsProps {
  badge?: Badge;
  heading: string;
  description?: string;
  cards: HeroCard[];
  className?: string;
}

interface Hero36Props extends HeroCardsProps {}
type Props = Partial<Hero36Props>;

const defaultProps: Hero36Props = {
  badge: { text: "New Release" },
  heading: "Blocks Built With Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  cards: [
    {
      title: "Product Design",
      description:
        "Create beautiful, functional interfaces that delight your users and drive engagement.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-2BwaAhZtNYA-unsplash.jpg",
        alt: "Architectural interior",
      },
    },
    {
      title: "Development",
      description:
        "Build robust, scalable applications with modern tools and best practices.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
        alt: "Modern workspace",
      },
    },
    {
      title: "Marketing",
      description:
        "Reach your audience with data-driven strategies that deliver real results.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
        alt: "Creative studio",
      },
    },
    {
      title: "Custom Builds",
      description:
        "Tailored solutions for your unique vision and business goals.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-cX5tYHCNJeI-unsplash.jpg",
        alt: "Design detail",
      },
    },
    {
      title: "Collaboration",
      description:
        "Work together seamlessly with tools built for modern product teams.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
        alt: "Team environment",
      },
    },
  ],
};

const Hero36 = (props: Props) => {
  const { badge, heading, description, cards, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-accent py-24 md:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        {badge && (
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-xs font-medium uppercase"
          >
            {badge.text}
          </Badge>
        )}
        <h1 className="my-4 max-w-3xl text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          {heading}
        </h1>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {cards.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={item.href ?? "#"}
            className={cn(
              "relative flex flex-col items-center rounded-xl border bg-background/70 px-6 py-10 text-center backdrop-blur-sm lg:px-8 lg:py-12",
              index === 1 && "md:translate-y-4",
            )}
          >
            {item.image && (
              <div className="mb-6 flex aspect-square w-16 items-center justify-center overflow-hidden rounded-lg md:w-20 lg:mb-8">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
            <h3 className="mb-3 text-lg font-semibold md:text-xl">
              {item.title}
            </h3>
            <p className="mb-auto text-sm text-muted-foreground">
              {item.description}
            </p>
            <div className="mt-8 flex items-center text-primary md:mt-10">
              <span className="font-medium">See more</span>
              <ArrowRight className="ml-2 size-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero36 };
