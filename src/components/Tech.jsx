import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <h1 id="skills" className="text-center font-bold text-3xl mb-10">
        Computer Skills
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 border-2 py-5 border-white rounded-3xl ">
        {technologies.map((technology) => (
          <div
            className="hover:scale-110 shadow-lg transition-all bg-white"
            style={{ borderWidth: 1, padding: 5, borderRadius: 30 }}
          >
            <div
              className="w-28 h-28"
              style={{ display: "grid", placeItems: "center" }}
              key={technology.name}
            >
              <img
                src={technology.icon}
                style={{ height: 60, width: 60 }}
                alt="!"
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "black",
                  fontSize:14
                }}
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
