import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[240px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[5px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 20,
          speed: 45,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a skilled software developer with a diverse skill set and extensive experience in JavaScript, complemented by expertise in frameworks such as React, Node.js, and Redux. Proficient in backend development, I design secure and scalable APIs, manage databases, and implement authentication systems. On the frontend, I excel at creating responsive, user-friendly interfaces using tools like Tailwind CSS.
        My experience extends to data analysis, systems management, and IT infrastructure, ensuring robust, optimized solutions that align with business objectives. A quick learner and an effective collaborator, I work closely with clients and teams to develop innovative, scalable solutions that address real-world challenges.
      </motion.p>

      <div className='mt-20 flex flex-wrap items-center justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
