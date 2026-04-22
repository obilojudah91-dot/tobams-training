export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testi-scroll">
        <div className="testi-card">
          <div className="testi-head">
            <img className="testi-avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Aisha Yusuf" />
            <div>
              <div className="testi-name">Aisha Yusuf</div>
              <div className="testi-role">Founder, Craftshub NG</div>
            </div>
          </div>
          <p className="testi-text">
            Working with Tobams Group on our website was a breeze. They understood our vision and
            transformed it into a beautiful online space. Highly recommend their Website Design
            service!
          </p>
        </div>
        <div className="testi-card">
          <div className="testi-head">
            <img className="testi-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Davies" />
            <div>
              <div className="testi-name">John Davies</div>
              <div className="testi-role">Marketing Manager, E-Commerce Emporium</div>
            </div>
          </div>
          <p className="testi-text">
            Tobams Group&apos;s Digital Marketing strategies gave our brand the boost it needed. Simple
            yet powerful techniques that delivered tangible results. A pleasure to collaborate with!
          </p>
        </div>
        <div className="testi-card">
          <div className="testi-head">
            <img
              className="testi-avatar"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Chinonso Nwankwo"
            />
            <div>
              <div className="testi-name">Chinonso Nwankwo</div>
              <div className="testi-role">HR Director, FutureTech Solutions</div>
            </div>
          </div>
          <p className="testi-text">
            Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent
            Solution service consistently connects us with the right professionals. Reliable and
            straightforward.
          </p>
        </div>
        <div className="testi-card">
          <div className="testi-head">
            <img className="testi-avatar" src="https://randomuser.me/api/portraits/men/55.jpg" alt="Tunde Adeyemi" />
            <div>
              <div className="testi-name">Tunde Adeyemi</div>
              <div className="testi-role">CEO, TechBridge Africa</div>
            </div>
          </div>
          <p className="testi-text">
            The Management Development Program gave our leadership team the clarity and strategic
            frameworks they needed. Our organisation culture has transformed significantly since.
          </p>
        </div>
      </div>
      <div className="testi-nav">
        <button type="button" className="testi-btn" aria-label="Previous testimonial">
          &lsaquo;
        </button>
        <button type="button" className="testi-btn" aria-label="Next testimonial">
          &rsaquo;
        </button>
      </div>
    </section>
  )
}
