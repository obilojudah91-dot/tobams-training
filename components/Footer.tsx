const footerGroups = {
  services: [
    'Sustainability Services',
    'Strategy Planning and Implementation',
    'Tech Talent Solutions',
    'Training and Development',
    'IT Consulting Services',
    'Social Impact',
    'Talent Recruitment',
  ],
  company: [
    'About',
    'Jobs',
    'Projects',
    'Our Founder',
    'Business Model',
    'The Team',
    'Contact Us',
    'Blog',
    'FAQs',
    'Testimonials',
  ],
  solutions: [
    'Tobams Group Academy',
    'Help a Tech Talent',
    'Campus Ambassadors Program',
    'Join Our Platform',
    'Pricing',
    'Book a Consultation',
    'Join Our Slack Community',
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-dots">
              <div className="logo-dot" />
              <div className="logo-dot" />
              <div className="logo-dot" />
            </div>
            <div className="logo-text" style={{ color: '#fff' }}>
              TOBAMS<span style={{ color: 'rgba(255,255,255,.4)' }}>GROUP</span>
            </div>
          </div>
          <p>
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent
            development in Africa, specializing in talent acquisition, internships, and skill
            development with a global perspective.
          </p>
          <div className="footer-socials">
            <a href="#contact" className="social-btn" aria-label="LinkedIn">
              in
            </a>
            <a href="#contact" className="social-btn" aria-label="Instagram">
              ig
            </a>
            <a href="#contact" className="social-btn" aria-label="Twitter / X">
              x
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>What We Do</h4>
          <ul>
            {footerGroups.services.map((item) => (
              <li key={item}>
                <a href="#hero">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {footerGroups.company.map((item) => (
              <li key={item}>
                <a href="#hero">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solution</h4>
          <ul>
            {footerGroups.solutions.map((item) => (
              <li key={item}>
                <a href="#hero">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-mid">
        <div>
          <h5>Registered Offices</h5>
          <div className="footer-office">
            <div className="country">United Kingdom</div>
            <p>
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
            </p>
          </div>
        </div>

        <div className="footer-office" style={{ paddingTop: '28px' }}>
          <div className="country">Nigeria</div>
          <p>
            RC 1048722 (Registered by the Corporate Affairs Commission)
            <br />
            4, Muaz Close, Angwar-Rimi
          </p>
        </div>

        <div className="footer-contact">
          <h5>Contact Information</h5>
          <div className="footer-contact-item">
            <span>Mail</span>
            <a href="mailto:theteam@tobamsgroup.com">theteam@tobamsgroup.com</a>
          </div>
          <div className="footer-contact-item">
            <span>Call</span>
            <a href="tel:+447886600748">+447886600748</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright &copy; Tobams Group, 2024. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#hero">Terms and Conditions</a>
          <a href="#hero">Privacy Policy</a>
          <a href="#hero">Cookies Policy</a>
        </div>
      </div>
    </footer>
  )
}
