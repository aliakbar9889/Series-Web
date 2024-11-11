import React from 'react';


const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="content">
        <h1 className="heading">
          <b>Enjoy <span className="yellow">Islamic Series,</span> <br /> <span className="grey">Movies,</span> And <span className="grey">More</span></b>
        </h1>
        <p className="tagline">
          Ready to watch free? Enter your email to create or restart your membership.
        </p>
        <div className="form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="emailInput"
          />
          <button className="getStartedButton">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
