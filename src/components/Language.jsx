import React from "react";
import { languages } from "../constants";

function Language() {
  return (
    
    <div id="languages">
      <h1 className="text-center font-bold text-3xl mb-10">Language Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-12 border-2 py-5 border-white rounded-3xl ">
        {languages.map((technology) => (
          <div
            className="hover:scale-110 shadow-lg transition-all bg-white"
            style={{ borderWidth: 1,padding: 5, borderRadius: 40 }}
          >
            <div
              className="w-28 h-28"s
              style={{ display: "grid", placeItems: "center" }}
              key={technology.name}
            >
              <img
                src={technology.icon}
                style={{ height: 80, width: 80 }}
                alt="!"
                className="rounded-full"
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 14,
                }}
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Language;
