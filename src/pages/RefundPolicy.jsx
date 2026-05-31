import PageHero from '../components/PageHero'
import { SITE } from '../data/site'

export default function RefundPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Refund policy"
        description="Please review the following guidelines. This page can be updated with your club’s official policy."
      />

      <section className="section">
        <div className="container narrow prose">
          <p>
            Vertex Volleyball Club is committed to clear communication regarding fees and refunds.
            The details below are a template—replace with your official refund terms before going live.
          </p>

          <h2>Registration fees</h2>
          <p>
            Program and tryout fees are outlined at registration. Payment confirms a spot subject to
            roster availability and completed required documents.
          </p>

          <h2>Refund requests</h2>
          <ul>
            <li>Refund requests must be submitted in writing to {SITE.email}.</li>
            <li>Include the athlete’s name, program, and reason for the request.</li>
            <li>Processing time may take 10–15 business days after approval.</li>
          </ul>

          <h2>Non-refundable items</h2>
          <p>
            Uniforms, tournament fees, and third-party charges may be non-refundable once ordered or
            submitted on the athlete’s behalf.
          </p>

          <h2>Medical withdrawals</h2>
          <p>
            Documented medical withdrawals may be considered for a partial credit or refund at the
            club’s discretion, in line with provincial sport guidelines.
          </p>

          <h2>Questions</h2>
          <p>
            Contact <a href={`mailto:${SITE.email}`}>{SITE.email}</a> for any refund-related
            questions.
          </p>
        </div>
      </section>
    </>
  )
}
