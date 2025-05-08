import React from "react";
import { motion } from "framer-motion";

const OurWorks = () => (
  <section className="works">
    <motion.div
      className="related work p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // `once: false` makes the animation trigger every time the section is in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="row">
        <div className="col-md-6">
          <h2>Our Works</h2>
          <p>
            Our mission is to empower businesses with innovative IT solutions
            that enhance productivity, security, and efficiency. We believe
            that technology should be an enabler, not a barrier, and we are
            dedicated to helping organizations harness its full potential to
            drive success.
            <br /><br />
            We strive to bridge the gap between technology and business needs by
            providing reliable, scalable, and cost-effective IT services.
            Whether it’s optimizing existing infrastructure, securing digital
            assets, or implementing cutting-edge solutions, we work closely with
            our clients to ensure seamless integration and maximum impact.
            <br /><br />
            By continuously evolving and embracing new technologies, we empower
            our clients to focus on what they do best—while we take care of
            their IT needs. Together, we drive progress, innovation, and
            sustainable growth.
          </p>
        </div>
        <div className="col-md-6">
          <motion.img
            style={{ height: "350px", width: "100%", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000"
            className="img-fluid"
            alt="Our Works"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default OurWorks;
