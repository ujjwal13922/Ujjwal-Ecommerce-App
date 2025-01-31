import React from 'react'
import Layout from "./../components/Layout/Layout";
const Policy = () => {
    return (
      <Layout>
        <div className="row contactus">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="privacy policy"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h2>Privacy Policy</h2>
            <p>
              At Ecommerce App, we prioritize your privacy. This policy explains how we collect, use, and protect your personal information.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We may collect your name, email, address, payment details, and browsing activity to provide and improve our services.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
              Your information is used to process orders, improve user experience, and communicate updates or offers.
            </p>
            <h3>Data Security</h3>
            <p>
              We implement security measures to protect your data from unauthorized access and ensure safe transactions.
            </p>
            <h3>Your Rights</h3>
            <p>
              You can update, access, or request the deletion of your personal information anytime.
            </p>
            <h3>Contact Us</h3>
            <p>
              For questions, contact us at support@[yourappname].com or call us at +1 (123) 456-7890.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Policy;
  