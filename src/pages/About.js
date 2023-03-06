import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              Are you looking for Web Developer for your business or company?
              You are at the right place.
            </p>
            <p>
              I am a MERN Stack Developer with extensive experience in building
              robust web applications using MongoDB, Express, React, and
              Node.js. With a solid understanding of each technology, I am able
              to create scalable and efficient applications that deliver a great
              user experience. Whether it's developing RESTful APIs, working
              with databases, or building dynamic front-end interfaces, I have
              the skills and expertise to deliver high-quality results. If
              you're looking for a developer who can bring your ideas to life,
              let's connect and build something amazing together!"
            </p>
            <h2>Experience</h2>
            <p>
              With over 2 years of experience, I have developed a deep
              understanding of web development concepts and best practices,
              enabling me to create efficient, high-performance web applications
              that meet the needs of my clients.
            </p>
            <h2>My Skill set includes</h2>
            <p>
              My expertise includes creating RESTful APIs, implementing user
              authentication and authorization, designing and developing complex
              frontend UIs, and building scalable backends using NodeJS and
              ExpressJS. I am highly proficient in HTML, CSS, and JavaScript and
              have experience working with various frontend frameworks and
              libraries such as Bootstrap, Material UI, and Redux.
            </p>
            <p>
              I am passionate about delivering exceptional work and have a
              proven track record of meeting project deadlines while exceeding
              client expectations. I believe in building strong relationships
              with my clients and collaborating closely with them throughout the
              entire development process to ensure that their vision is
              realized.
            </p>

            <p>
              Whether you need a web application from scratch or require
              maintenance and enhancements for your existing web application, I
              am committed to providing you with the best possible solutions. I
              am always up-to-date with the latest web development trends and
              technologies, and I am continuously expanding my knowledge and
              skills to better serve my clients.
            </p>
            <p>
              If you want a suggestion about your business feel free to contact
              me for free consultation.
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
