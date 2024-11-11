import React from 'react';

const Page5 = () => {
  return (
    <section id="subscribe" className="heroSection2">
      <div className="content">
        <span className="yellow"><h1><b><i>SUBSCRIBE NOW.</i></b></h1></span>
        <h2 className="heading2">
          <b>Discover The Magic Of Hilal Entertainment.</b>
        </h2>
        <p>
          Leave your Email Address to Subscribe.
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

export default Page5;
