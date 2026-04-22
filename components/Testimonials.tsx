'use client'

import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder, Craftshub NG',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager, E-Commerce Emporium',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director, FutureTech Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'CEO, TechBridge Africa',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    text: 'The Management Development Program gave our leadership team the clarity and strategic frameworks they needed. Our organisation culture has transformed significantly since.',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => setActiveIndex(index)
  const previous = () =>
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((current) => (current + 1) % testimonials.length)

  return (
    <section id="testimonials">
      <div className="testimonials-top">
        <div>
          <p className="label label-purple">Client Stories</p>
          <h2>Testimonials</h2>
        </div>
        <p className="section-p">
          Real teams, founders, and leaders describing what changed after working with Tobams Group.
        </p>
      </div>

      <div className="testi-carousel">
        <div
          className="testi-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testi-slide">
              <div className="testi-card">
                <div className="testi-head">
                  <img className="testi-avatar" src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <div className="testi-name">{testimonial.name}</div>
                    <div className="testi-role">{testimonial.role}</div>
                  </div>
                </div>
                <p className="testi-text">{testimonial.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="testi-controls">
        <div className="testi-dots" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={`testi-dot${index === activeIndex ? ' active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>

        <div className="testi-nav">
          <button type="button" className="testi-btn" aria-label="Previous testimonial" onClick={previous}>
            &lt;
          </button>
          <button type="button" className="testi-btn" aria-label="Next testimonial" onClick={next}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}
