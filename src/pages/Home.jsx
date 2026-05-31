import { Link } from 'react-router-dom'
import { CORE_VALUES, SITE } from '../data/site'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Youth volleyball · {SITE.season}</p>
          <h1>{SITE.name}</h1>
          <p className="hero__lead">{SITE.tagline}</p>
          <div className="hero__actions">
            <Link to="/programs" className="btn btn--primary">
              View programs
            </Link>
            <Link to="/tryouts" className="btn btn--ghost">
              Tryout information
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container narrow">
          <p className="section__eyebrow">About us</p>
          <h2>Our story</h2>
          <h3 className="subsection-title">Why we started Vertex</h3>
          <p>
            Vertex Volleyball Club was founded to create a positive, development-focused environment
            for young athletes.
          </p>
          <p>
            We believe success in volleyball is built through strong fundamentals, healthy movement
            habits, confidence, discipline, and teamwork.
          </p>
          <p>
            Our goal is to provide athletes with quality coaching while promoting long-term athletic
            development and a lifelong love for volleyball.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <div className="card card--accent">
            <p className="section__eyebrow">Mission</p>
            <p>
              Our mission is to develop confident, disciplined, and skilled athletes through
              high-quality volleyball training and positive team experiences.
            </p>
          </div>
          <div className="card">
            <p className="section__eyebrow">Vision</p>
            <p>
              To become a respected youth volleyball club recognized for athlete development,
              positive culture, and coaching excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">What we stand for</p>
          <h2>Core values</h2>
          <ul className="values-grid">
            {CORE_VALUES.map((value) => (
              <li key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to join Vertex?</h2>
            <p>Explore our {SITE.season} programs or register for tryouts.</p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--ghost">
              Contact us
            </Link>
            <Link to="/tryouts" className="btn btn--primary">
              Tryouts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
