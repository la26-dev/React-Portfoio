import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava, 
  FaDatabase 
} from "react-icons/fa";

import { SiTensorflow } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      {/* البوكس */}
      <div className="skills-box">
        <div className="skills-icons">
          <div className="skill-card">
            <FaHtml5 />
            <span>HTML</span>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <span>CSS</span>
          </div>

          <div className="skill-card">
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div className="skill-card">
            <FaJava />
            <span>Java</span>
          </div>

          <div className="skill-card">
            <SiTensorflow />
            <span>Machine Learning</span>
          </div>

          <div className="skill-card">
            <FaDatabase />
            <span>SQL</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
 