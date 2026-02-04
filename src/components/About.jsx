import avatar from "../assets/my photo.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-card">
        <img src={avatar} alt="Layal Avatar" className="home-avatar" />

        <h2 className="about-name"> Hi, I'm Layal Albahsani</h2>
        <p className="about-role">Frontend Developer</p>

        <p className="about-text">
          I am a Computer Science student currently training at Wadi Makkah. I aim to
  develop my skills in programming and software development through academic and
  practical projects. I believe in the importance of teamwork and continuous
  learning, and I aspire to apply my technical knowledge to build practical and
  impactful solutions.
        </p>

        <div className="about-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;