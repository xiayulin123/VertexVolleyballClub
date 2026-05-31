import PageHero from '../components/PageHero'
import { SITE, TRYOUT_INFO } from '../data/site'

export default function Tryouts() {
  return (
    <>
      <PageHero
        eyebrow="Join the club"
        title="Tryouts"
        description="Everything you need to know before you arrive."
      >
        <a href={SITE.tryoutForm} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
          Register via Google Form
        </a>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Locations</h2>
            <ul className="info-list">
              {TRYOUT_INFO.locations.map((loc) => (
                <li key={loc.name}>
                  <strong>{loc.name}</strong>
                  <span>{loc.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Cost</h2>
            <p>{TRYOUT_INFO.cost}</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container narrow">
          <h2>What to bring</h2>
          <ul className="check-list">
            {TRYOUT_INFO.bring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow note-box">
          <p>
            <strong>Google Form:</strong> Update the registration link in{' '}
            <code>src/data/site.js</code> (<code>tryoutForm</code>) with your live form URL.
          </p>
          <p>
            Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
