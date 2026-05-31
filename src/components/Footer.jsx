import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{SITE.name}</p>
          <p className="footer__muted">Building confident athletes through quality volleyball training.</p>
        </div>
        <div>
          <p className="footer__heading">Quick links</p>
          <ul className="footer__links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer__heading">Contact</p>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p className="footer__domain">
            <a href={`https://${SITE.domain}`}>{SITE.domain}</a>
          </p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {year} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
