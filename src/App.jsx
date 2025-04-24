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
import FadeInAnimation from "./components/ui/FadeInAnimation";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <div id="hero">
        <FadeInAnimation>
          <Hero />
        </FadeInAnimation>
      </div>

      <div id="experties" className="my-experties">
        <FadeInAnimation>
          <h1 className="exp-heading">My Experties</h1>
        </FadeInAnimation>

        <div className="exp-container">
          <FadeInAnimation delay={0.2}>
            <Experties
              title="Software "
              highlight="Development"
              description="Experienced in both functional and OOPS: Python, Java, JavaScript, C++."
            />
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <Experties
              title="Full-Stack Development"
              highlight="Development"
              description="Experienced in both Frontend and Backend with tools like reack ,node.js ,express.js ."
            />
          </FadeInAnimation>

          <FadeInAnimation delay={0.6}>
            <Experties
              title="Android,iOS "
              highlight="Development"
              description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.."
            />
          </FadeInAnimation>
        </div>
      </div>

      <div className="tools-section">
        <FadeInAnimation>
          <Tools />
        </FadeInAnimation>
      </div>

      <div id="work" className="work-section meteor-wrapper">
        <FadeInAnimation>
          <h1 className="mywork-heading">My Work</h1>
        </FadeInAnimation>

        <div className="my-work-project-section">
          <FadeInAnimation delay={0.2}>
            <Myproject
              title="Triview"
              image={proj1Img}
              description="A travel review site"
              projectlink="https://www.google.com"
            />
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <Myproject
              title="Triview"
              image={proj1Img}
              description="A travel review site"
              projectlink="https://www.google.com"
            />
          </FadeInAnimation>

          <FadeInAnimation delay={0.6}>
            <Myproject
              title="Triview"
              image={proj1Img}
              description="A travel review site"
              projectlink="https://www.google.com"
            />
          </FadeInAnimation>

          <FadeInAnimation delay={0.8}>
            <Myproject
              title="Triview"
              image={proj1Img}
              description="A travel review site"
              projectlink="https://www.google.com"
            />
          </FadeInAnimation>
        </div>
      </div>

      <div id="footer" className="fotter-div">
        <FadeInAnimation>
          <Footer />
        </FadeInAnimation>
      </div>

      <Meteors number={8} />
    </>
  );
}

export default App;
