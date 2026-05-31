import PageHero from '../components/PageHero'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description="We’re happy to answer questions about programs, tryouts, and registration."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="card">
            <h2>Email</h2>
            <p>
              <a className="contact-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="text-muted">Best for program questions, policies, and general inquiries.</p>
          </div>

          <div className="card">
            <h2>Instagram</h2>
            <p>
              <a className="contact-link" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                @vertexvbc
              </a>
            </p>
            <p className="text-muted">
              Follow for updates, announcements, and club news. Update the link in{' '}
              <code>src/data/site.js</code> if your handle differs.
            </p>
          </div>

          <div className="card card--accent">
            <h2>Website</h2>
            <p>
              <a className="contact-link" href={`https://${SITE.domain}`}>
                {SITE.domain}
              </a>
            </p>
            <p className="text-muted">Connect your domain to this site when you deploy.</p>
          </div>
        </div>
      </section>
    </>
  )
}
