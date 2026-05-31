import ProgramCard from '../components/ProgramCard'
import PageHero from '../components/PageHero'
import { BOYS_PROGRAMS, GIRLS_PROGRAMS, SITE } from '../data/site'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Athlete development"
        title={`Programs ${SITE.season}`}
        description="Age-group teams focused on fundamentals, teamwork, and competitive growth."
      />

      <section className="section">
        <div className="container">
          <h2 className="program-section-title">Boys program</h2>
          <div className="program-grid">
            {BOYS_PROGRAMS.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="program-section-title">Girls program</h2>
          <div className="program-grid">
            {GIRLS_PROGRAMS.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow note-box">
          <p>
            <strong>Note:</strong> Roster sizes and age cutoffs follow birth-year eligibility.
            For questions about placement, email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
