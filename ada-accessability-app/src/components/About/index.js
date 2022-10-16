import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about-wrapper'>
            <div className='bout'>
                <h1>About Us</h1>
                <h2>We believe in democratizing tools and resources to improve mental health in our marginalized communities. </h2>
                <p>In the United States, one in five Americans has mental health concerns.<br />
                    <br />
                    Women are more likely to report experiencing mental health problems than men.
                    Men are more likely than women to die by suicide.
                    Only one in three Black adults with mental health illness receive treatment.
                    People who identify as multiracial are more at-risk for mental health concerns.
                    People in the LGBTQ+ community are more likely to experience mental health concerns.
                    <br />
                    <br />
                    Rppl provides a toolkit for people looking to gain insights and resources to
                    take control of their mental health. Customizable journal and mood tracker
                    allow users to record symptoms, spot patterns, and gain insights into their mental health.
                    <br />
                    <br />
                    Rppl provides personalized resources and support for marginalized groups.
                    Users are empowered to build community and lead discussions about mental
                    health through sharing their daily progress with their network of friends and family.
                    Together, we can build a future with better mental health.
                </p>
            </div>
        </div>
    )
}

export default About;