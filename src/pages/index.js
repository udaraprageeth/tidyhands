import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

import icon1 from '../assets/img/icon-1.svg';
import icon2 from '../assets/img/icon-2.svg';
import icon3 from '../assets/img/icon-3.svg';
import clients from '../assets/img/clients.png';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0">We Clean</h1>
          <h1 className="mx-auto mt-2 mb-5">
            You Relax
          </h1>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
            Get Quote
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="position-relative d-flex justify-content-center">
      <div className="container position-absolute card-container">
        <div className="row d-flex justify-content-between">
          <div className="col-3">
           <div className="card">
            	<img src={icon1} className="img-fluid" alt="" />
             <h6>
              	CLEANING SERVICES
             </h6>
             <p>
                With more than 5 years of combined management experience our services extend commercially across all market sectors.
             </p>
           </div>
          </div>
          <div className="col-3">
           <div className="card">
            	<img src={icon2} className="img-fluid" alt="" />
             <h6>
              	FACILITIES & ENVIRONMENTAL
             </h6>
             <p>
                With more than 5 years of combined management experience our services extend commercially across all market sectors.
             </p>
           </div>
          </div>
          <div className="col-3">
           <div className="card">
            	<img src={icon3} className="img-fluid" alt="" />
             <h6>
                PROPERTY MAINTENANCE
             </h6>
             <p>
                With more than 5 years of combined management experience our services extend commercially across all market sectors.
             </p>
           </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container client-logo d-flex align-items-end">

        <img className="img-fluid  clients" src={clients} alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section">
      <div className="container  h-100">
        <div className="row  h-100 d-flex justify-content-between">
          <div className="col-6 d-flex align-items-center">
            <h3>Do you want to order our services easily and get a quote directly</h3>
          </div>
          <div className="col-4 d-flex align-items-center">
            <form className="w-100">
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Short Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-group ">
                <button className="btn btn-primary w-100 mt-4">Book My Clean</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <Footer />
  </Layout>
);

export default IndexPage;
