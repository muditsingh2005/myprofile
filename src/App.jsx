import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Myproject from "./components/myprojects/myproject";
import proj1Img from "../src/assets/project-1.jpg";
import Footer from "./components/footer/footer";
import Tools from "./components/tools/tools";
import { Meteors } from "./components/ui/Meteors";
import ScrollIndicator from "./components/ui/scrollIndicator";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>

      <div id="experties" className="my-experties">
        <h1 className="exp-heading">My Experties</h1>

        <div className="exp-container">
          <Experties
            title="Software "
            highlight="Development"
            description="Experienced in both functional and OOPS: Python, Java, JavaScript, C++."
          />

          <Experties
            title="Full-Stack Development"
            highlight="Development"
            description="Experienced in both Frontend and Backend with tools like reack ,node.js ,express.js ."
          />

          <Experties
            title="Android,iOS "
            highlight="Development"
            description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.."
          />
        </div>
      </div>

      <div className="tools-section">
        <Tools />
      </div>

      <div id="work" className="work-section meteor-wrapper">
        <h1 className="mywork-heading">My Work</h1>

        <div className="my-work-project-section">
          <Myproject
            title="Triview"
            image={proj1Img}
            description="A travel review site"
            projectlink="https://www.google.com"
          />

          <Myproject
            title="Triview"
            image={proj1Img}
            description="A travel review site"
            projectlink="https://www.google.com"
          />

          <Myproject
            title="Triview"
            image={proj1Img}
            description="A travel review site"
            projectlink="https://www.google.com"
          />

          <Myproject
            title="Triview"
            image={proj1Img}
            description="A travel review site"
            projectlink="https://www.google.com"
          />
        </div>
      </div>

      <div id="footer" className="fotter-div">
        <Footer />
      </div>

      <Meteors number={8} />
    </>
  );
}

export default App;
