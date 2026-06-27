import type { HeroBlockData } from '@/types/cms'

export function HeroBlock({
  headline,
  subheadline,
  buttonLink,
  buttonText,
}: HeroBlockData) {
  return (
    <section className="hero-block">
      <div className="hero-block__glow" />
      <div className="hero-block__content">
        <p className="hero-block__eyebrow">Payload-powered content block</p>
        <h1>{headline}</h1>
        {subheadline ? <p className="hero-block__subheadline">{subheadline}</p> : null}
        <div className="hero-block__actions">
          <a className="hero-block__button" href={buttonLink}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
