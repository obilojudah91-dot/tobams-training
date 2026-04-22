const managementBenefits = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
]

export default function ManagementProgram() {
  return (
    <section id="management">
      <div className="mgmt-inner">
        <div className="mgmt-img">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=70"
            alt="Three diverse professionals discussing in a modern office"
          />
        </div>
        <div className="mgmt-content">
          <h2>Management Development Program</h2>
          <p>
            Tobams Group offers a comprehensive Management Development Program designed to equip
            corporate organisations with the high-performing leaders they need to thrive.
          </p>
          <p>
            Our program includes workshops, seminars, coaching sessions, online courses, and
            experiential learning opportunities designed to improve leadership, strategic thinking,
            communication, and all other essential managerial competencies for corporate organisations.
          </p>
          <div className="badge-list">
            {managementBenefits.map((benefit) => (
              <div key={benefit} className="badge">
                <span className="badge-icon">*</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
