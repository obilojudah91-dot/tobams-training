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
            <a href="#" className="social-btn" aria-label="LinkedIn">
              in
            </a>
            <a href="#" className="social-btn" aria-label="Instagram">
              ig
            </a>
            <a href="#" className="social-btn" aria-label="Twitter / X">
              {'𝕏'}
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>What We Do</h4>
          <ul>
            <li><a href="#">Sustainability Services</a></li>
            <li><a href="#">Strategy Planning and Implementation</a></li>
            <li><a href="#">Tech Talent Solutions</a></li>
            <li><a href="#">Training and Development</a></li>
            <li><a href="#">IT Consulting Services</a></li>
            <li><a href="#">Social Impact</a></li>
            <li><a href="#">Talent Recruitment</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Our Founder</a></li>
            <li><a href="#">Business Model</a></li>
            <li><a href="#">The Team</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Solution</h4>
          <ul>
            <li><a href="#">Tobams Group Academy</a></li>
            <li><a href="#">Help a Tech Talent</a></li>
            <li><a href="#">Campus Ambassadors Program</a></li>
            <li><a href="#">Join Our Platform</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Book a Consultation</a></li>
            <li><a href="#">Join Our Slack Community</a></li>
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
            <span>{'✉'}</span>
            <a href="mailto:theteam@tobamsgroup.com">theteam@tobamsgroup.com</a>
          </div>
          <div className="footer-contact-item">
            <span>{'📞'}</span>
            <a href="tel:+447886600748">+447886600748</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright &copy; Tobams Group, 2024. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>
  )
}
