import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import vibek from "../../assets/vibek-modified.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="main"></div>
      <div className="main-content">
        <div className="main-left">
          <h1>Hi I'm Vibek Mandal</h1>
          <h2>Web Developer</h2>
          <p>
            I am is a programmer responsible for turning user stories and web
            designs into functional websites.
          </p>
          <button className="btn">Hire Me</button>
          <button className="btn">Download Resume</button>
        </div>
        <div className="main-image">
          <img src={vibek} alt="" />
        </div>
      </div>

      <div className="aboutUs">
        <div className="aboutUs-left">
          <h1>WHO AM I?</h1>
          <h2>Let's get acquainted! My name is Vibek Kuamr Mandal</h2>
          <p>
            My specialties include quickly learning new skills and programming
            languages, problem solving. So far I have worked on HTML, CSS,
            JavaScript, React JS, Redux, MongoDB, MySql and Git/GitHub
            technologies. I enjoy adapting to new programming languages and
            expanding my collection of tools for analyzing data. I'm still
            enthusiastically grabbing onto any other programming languages,
            frameworks, or principles related to web Developement that I can
            solve the complex Business problems.
          </p>
          <div className="aboutUs-connectWithMe">
            <h3>CONNECT WITH ME &gt;</h3>

            <a href="">
              <IoLogoLinkedin
                style={{ color: "black", fontSize: "35px", margin: "0" }}
              />
            </a>
            <a href="">
              <FaGithub
                style={{ color: "black", fontSize: "35px", margin: "0" }}
              />
            </a>
            <a href="">
              <TfiEmail
                style={{ color: "black", fontSize: "35px", margin: "0" }}
              />
            </a>
          </div>
        </div>
        <div className="aboutUs-right">
          
        </div>
      </div>

      
      <div class="skills">
      <p class="skl">MY SKILLS :</p>
      <p class="skl sklLine">_________</p>
      <div class="htmlProg ProgWidth">
        <div class="p">
          <p>html</p>
          <p>95%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar htmlBar"></span>
          </div>
        </div>
      </div>
      <div class="cssProg ProgWidth">
        <div class="p">
          <p>Css3</p>
          <p>70%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar cssBar"></span>
          </div>
        </div>
      </div>
      <div class="jsProg ProgWidth">
        <div class="p">
          <p>JavaScript</p>
          <p>75%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar jsBar"></span>
          </div>
        </div>
      </div>
      <div class="javaProg ProgWidth">
        <div class="p">
          <p>Java</p>
          <p>85%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar javaBar"></span>
          </div>
        </div>
      </div>
      <div class="c/c++Prog ProgWidth">
        <div class="p">
          <p>C/C++</p>
          <p>80%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar ccpBar"></span>
          </div>
        </div>
      </div>
      <div class="reactProg ProgWidth">
        <div class="p">
          <p>React</p>
          <p>70%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar reactBar"></span>
          </div>
        </div>
      </div>
      <div class="nodeProg ProgWidth">
        <div class="p">
          <p>Node.js</p>
          <p>35%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar nodeBar"></span>
          </div>
        </div>
      </div>
      <div class="sqlProg ProgWidth">
        <div class="p">
          <p>Sql</p>
          <p>85%</p>
        </div>
        <div class="pp">
          <div class="skillDiv">
            <span class="skillBar sqlBar"></span>
          </div>
        </div>
      </div>
    </div>
        
      </div>
   
  );
};

export default Home;
