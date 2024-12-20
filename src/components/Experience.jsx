import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { zamin } from "../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#d35400",
        color: "white",
        borderRadius: 10,
      }}
      contentArrowStyle={{ borderRight: "7px solid " }}
      date={experience.date}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
      }
      iconStyle={{background:"#fff"}}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div
          style={{
            margin: 10,
          }}
          className="mt-4"
        />
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0, color: "white", fontWeight: 600 }}
        >
          [ {experience.company_name} ]
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl">Experience</h1>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
