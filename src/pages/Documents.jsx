import PageHero from '../components/PageHero'
import { DOCUMENTS } from '../data/site'

export default function Documents() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documents"
        description="Codes of conduct and club policies for parents, athletes, and coaches."
      />

      <section className="section">
        <div className="container">
          <ul className="doc-list">
            {DOCUMENTS.map((doc) => (
              <li key={doc.file}>
                <a href={doc.file} className="doc-card" target="_blank" rel="noopener noreferrer">
                  <span className="doc-card__icon" aria-hidden="true">
                    PDF
                  </span>
                  <span>
                    <span className="doc-card__title">{doc.title}</span>
                    <span className="doc-card__hint">Open PDF</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
