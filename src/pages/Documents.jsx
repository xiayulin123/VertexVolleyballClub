import PageHero from '../components/PageHero'
import { DOCUMENTS } from '../data/site'

export default function Documents() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documents"
        description="Club handbook and policies for parents, athletes, and coaches."
      />

      <section className="section">
        <div className="container">
          <ul className="doc-list">
            {DOCUMENTS.map((doc) => (
              <li key={doc.file}>
                <a href={doc.file} className="doc-card" download>
                  <span className="doc-card__icon" aria-hidden="true">
                    PDF
                  </span>
                  <span>
                    <span className="doc-card__title">{doc.title}</span>
                    <span className="doc-card__hint">Download PDF</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="container narrow note-box" style={{ marginTop: '2rem' }}>
            Place your PDF files in the <code>public/documents/</code> folder using the filenames
            listed in <code>src/data/site.js</code>. See{' '}
            <code>public/documents/README.md</code> for details.
          </p>
        </div>
      </section>
    </>
  )
}
