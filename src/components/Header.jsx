import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={SITE.logo} alt="" className="brand__logo" width={56} height={56} />
          <span className="brand__text">
            <span className="brand__name">{SITE.name}</span>
            <span className="brand__domain">{SITE.domain}</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav id="site-nav" className={`nav ${open ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/tryouts" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Tryouts
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
