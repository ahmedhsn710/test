import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box about__icon">
            <i class='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 Years</span>
        </div>

        <div className="about__box about__icon">
        <i class='bx bx-award'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+</span>
        </div>

        <div className="about__box about__icon">
        <i class='bx bx-award'></i>
            <h3 className="about__title">Open Source</h3>
            <span className="about__subtitle">25+</span>
        </div>
    </div>
  )
}

export default info