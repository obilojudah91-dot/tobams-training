const heroHighlights = [
  'Responsive learning pathways',
  'Hands-on expert facilitation',
  'Programmes built for teams and individuals',
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">What We Do</span>
        <h1>Training and Development That Moves With Your Team</h1>
        <p>
          Our programmes combine expert facilitation, modern learning experiences, and practical
          support so teams and professionals can build real momentum in a fast-changing world.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-consult">
            Book a Consultation
          </a>
          <a href="#lms" className="btn-hero-secondary">
            Explore Programmes
          </a>
        </div>
        <div className="hero-highlights" aria-label="Key highlights">
          {heroHighlights.map((item) => (
            <span key={item} className="hero-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
