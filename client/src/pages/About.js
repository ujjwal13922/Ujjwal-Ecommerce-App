import React from 'react'
import Layout from '../components/Layout/Layout'
const About = () => {
    return (
      <Layout>
        <div className="row contactus">
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="about us"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="text-justify mt-2">
              Welcome to Ecommerce App, your trusted destination for seamless online shopping. We are committed to providing you with the best products at competitive prices, backed by exceptional customer service.
            </p>
            <p className="text-justify mt-2">
              Our mission is to create a hassle-free and enjoyable shopping experience. From everyday essentials to premium products, we handpick the best items to meet your needs and ensure your satisfaction.
            </p>
            <p className="text-justify mt-2">
              At Ecommerce app, we value quality, trust, and customer satisfaction. Our team works tirelessly to bring you the latest trends, secure payment methods, and fast delivery.
            </p>
            <p className="text-justify mt-2">
              Thank you for choosing Ecommerce App. We look forward to serving you and becoming your go-to online shopping destination.
            </p>
          </div>
        </div>
      </Layout>
    );
  };

export default About