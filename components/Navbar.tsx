'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Overview' },
  { href: '#lms', label: 'Learning' },
  { href: '#corporate-training', label: 'Corporate Training' },
  { href: '#individual-training', label: 'Individual Training' },
  { href: '#management', label: 'Management Program' },
  { href: '#transformation', label: 'Transformation Hub' },
  { href: '#consultant', label: 'Consulting' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(navLinks[0].href)

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <a href="#hero" className="logo" aria-label="Tobams Group home">
          <div className="logo-dots">
            <div className="logo-dot" />
            <div className="logo-dot" />
            <div className="logo-dot" />
          </div>
          <div className="logo-text">
            TOBAMS<span>GROUP</span>
          </div>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-actions">
          <button type="button" className="btn-account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Account <span className="nav-arrow">v</span>
          </button>
          <a href="#contact" className="btn-assess">
            Take Assessment
          </a>
        </div>
      </div>

      <div id="primary-navigation" className={`navbar-links${isOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
