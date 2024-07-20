import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings inner-width flex-center hero-container">
        {/* Left Side */}
        <div className="flex-col-start hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flex-col-start secondary-text flex-hero-des">
            <p>Find a variety of properties that suit you very easily</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </div>

          <div className="flex-center search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search location" />
            <button className="button">Search</button>
          </div>

          <div className="flex-center stats">
            <div className="flex-col-center stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondary-text">Premium Product</span>
            </div>

            <div className="flex-col-center stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondary-text">Happy Customers</span>
            </div>

            <div className="flex-col-center stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondary-text">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-center hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
