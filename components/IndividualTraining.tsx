import Image from 'next/image'

export default function IndividualTraining() {
  return (
    <section id="individual-training" className="section section-gray">
      <div className="grid2">
        <div>
          <Image
            className="grid2-img"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=70"
            alt="Individual focused in a one-on-one coaching session"
            width={700}
            height={467}
          />
        </div>
        <div>
          <h2 className="section-h2">Personalised Individual Training</h2>
          <p className="section-p">
            Begin a journey of lifelong learning and professional development with Tobams Group&apos;s
            diverse range of training programs for individuals. From technical skills mastery to soft
            skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs
            of today&apos;s professionals.
          </p>
          <ul className="bullet-list">
            <li>Leadership Development</li>
            <li>Soft Skills Development</li>
            <li>Industry Specific Knowledge</li>
            <li>Technical Skills Enhancement</li>
            <li>Time Management and Productivity</li>
            <li>Career Development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
