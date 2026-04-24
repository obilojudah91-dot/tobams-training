import Image from 'next/image'

const features = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
]

export default function TransformationHub() {
  return (
    <section id="transformation">
      <div className="inner">
        <div>
          <p className="label label-pink">Learning With Our CEO:</p>
          <h2>Transformation Hub With Jite Newton</h2>
          <p className="section-p">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr.
            Jite Newton. Designed to elevate career trajectories and leadership capabilities, this
            exclusive event offers invaluable insights and strategies for personal and professional
            growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills,
            the Transformation Hub provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-badge">
                <span className="ficon">*</span>
                {feature}
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-learn">
            Learn More
          </a>
        </div>
        <div>
          <Image
            className="transformation-image"
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=70"
            alt="CEO Jite Newton presenting to a group"
            width={700}
            height={510}
          />
        </div>
      </div>
    </section>
  )
}
