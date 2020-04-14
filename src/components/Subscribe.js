import React from 'react';
import girl from '../assets/img/sad.png';
import icon1 from '../assets/img/clean.svg';
import icon2 from '../assets/img/trust.svg';
import icon3 from '../assets/img/man.svg';
import icon4 from '../assets/img/award.svg';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
         <div className="col-6">
            <h3>Why To Choose Us</h3>
            <p>
              Then there is the risk that the home does not shine at all as it does in one's imagination of how a home should look like. If you let the professionals do the job, you can rely on the stadium It is, to say the least, for anyone who is a pedant but has a shortage of time Many of us have a career, family, training and a social life that must be prioritized. However, the desire for a clean home is the jackal!
            </p>

            <div className="row">
              <div className="col-6">
                <div className="services">
                  <img className="" src={icon1} alt="" />
                  <div className="text-section">
                    <h5>5 Years</h5>
                    <label>Experience</label>
                  </div>
                </div>
                <div className="services mt-4">
                  <img className="" src={icon3} alt="" />
                  <div className="text-section">
                    <h5>Trusted by </h5>
                    <label>10+ Companies</label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="services">
                  <img className="" src={icon2} alt="" />
                  <div className="text-section">
                    <h5>Highly trained </h5>
                    <label>commercial staff</label>
                  </div>
                </div>
                <div className="services mt-4">
                  <img className="" src={icon4} alt="" />
                  <div className="text-section">
                    <h5>Competitive </h5>
                    <label>Value</label>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div className="col-6">
           <img className="img-fluid" src={girl} alt="" />
         </div>
        </div>
      </div>
    </section>
  );
}
