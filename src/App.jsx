import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Language from "./components/Language";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="sm:mt-10 max-[500px]:mt-12 max-[300px]:mt-[300px]">
          <About />
          <Experience />
        </div>

        <div className="flex flex-col gap-6">
          <h1 id="skills" className="text-center font-bold text-3xl">
            Computer Skills
          </h1>
          <Tech />
        </div>
        <div className="flex flex-col gap-6">
        <h1 id="languages" className="text-center font-bold text-3xl mt-10">
            Language Skills
          </h1>
          <Language/>
        </div>
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
