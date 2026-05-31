export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {children}
      </div>
    </section>
  )
}
