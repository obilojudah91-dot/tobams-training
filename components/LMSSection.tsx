import Image from 'next/image'

export default function LMSSection() {
  return (
    <section id="lms" className="lms-bg">
      <div className="inner">
        <div className="lms-img-wrap">
          <Image
            className="grid2-img-circle"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=70"
            alt="Two professionals smiling in a bright office"
            width={500}
            height={500}
          />
        </div>
        <div className="lms-text">
          <h2>Learning Management System</h2>
          <p className="section-p">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech
            talents on their learning journey. From technical courses covering the latest programming
            languages and development frameworks to soft skills training in leadership, effective
            communication and project management.
          </p>
          <p className="section-p">
            TG Academy offers a wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can enhance their skills and
            stay ahead in today&apos;s competitive tech landscape.
          </p>
          <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
            Some of our courses include:
          </p>
          <div className="course-tags">
            <span className="course-tag">Business Analysis</span>
            <span className="course-tag">Design Thinking</span>
            <span className="course-tag">Effective Communication</span>
            <span className="course-tag">Entrepreneurship</span>
            <span className="course-tag">Career Development</span>
            <span className="course-tag">Business Model</span>
          </div>
          <a href="#" className="btn-learn">
            Learn More -&gt;
          </a>
        </div>
      </div>
    </section>
  )
}
