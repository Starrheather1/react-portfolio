import React from 'react'
import Pic from "../Assets/pic.JPG"
import "./AboutMe.css"
export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="picture">
        <img src={Pic}  />
      </div>
      <div className="description">
      <h1>About me</h1>
      <p>
      I am a team and goal-oriented salesperson with strong negotiation skills and in-depth knowledge of the industry. In addition, I strive to maintain professionalism, diplomacy and tactfulness at all times in order to generate positive company image. Throughout my many years in management, I have developed strong leadership skills and commitment to improving team quotas and building meaningful goals. Additionally, running a fast-paced and high-volume establishment resulted in the ability to work well under pressure. In conclusion, my proficient organizational skills and unwavering work ethic ensures consistent achievement of sales targets.

      </p>
      </div>

    </section>
  )
}
