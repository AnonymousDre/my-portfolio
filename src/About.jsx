import aboutPhoto from "./assets/about-portrait.JPG";
import awsLogo from "./assets/aws.png";
import azureLogo from "./assets/azure.png";
import cssLogo from "./assets/css.png";
import dockerLogo from "./assets/docker.png";
import firebaseLogo from "./assets/firebase.png";
import htmlLogo from "./assets/html.png";
import jiraLogo from "./assets/jira.png";
import mysqlLogo from "./assets/mysql.png";
import nodejsLogo from "./assets/nodejs.png";
import postmanLogo from "./assets/postman.png";
import phpLogo from "./assets/php.png";
import postgresqlLogo from "./assets/postgresql.png";
import pythonLogo from "./assets/python.png";
import reactLogo from "./assets/react.png";
import structureLogo from "./assets/structure.png";
import vueLogo from "./assets/vue.png";

const SKILLS = [
  "HTML",
  "CSS",
  "PHP",
  "React JS",
  "Vue JS",
  "Python",
  "Docker",
  "Node JS",
  "Postman",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Azure",
  "MVC",
  "OOP",
  "MVVM",
  "Jira",
];

const SKILL_ICONS = {
  HTML: htmlLogo,
  CSS: cssLogo,
  PHP: phpLogo,
  "React JS": reactLogo,
  "Vue JS": vueLogo,
  Python: pythonLogo,
  Docker: dockerLogo,
  "Node JS": nodejsLogo,
  Postman: postmanLogo,
  MySQL: mysqlLogo,
  PostgreSQL: postgresqlLogo,
  Firebase: firebaseLogo,
  AWS: awsLogo,
  Azure: azureLogo,
  MVC: structureLogo,
  MVVM: structureLogo,
  OOP: structureLogo,
  Jira: jiraLogo,
};

export default function About() {
  return (
    <section id="about" className="landing-section" aria-label="About">
      <h1 className="title">About me</h1>
      <div className="about-layout">
        <div className="placeholder about-text">
          <p>
            I’m <strong>Andre Thomas Quizon</strong>, a Fullstack Developer and
            Software Engineer with a passion for building efficient, scalable,
            and user-focused applications. As a graduate of BS Computer Science
            from Holy Angel University, I’ve developed a solid foundation in
            both frontend and backend development.
          </p>

          {/* <p>
            I specialize in technologies such as React, JavaScript, Python,
            Node.js, and MySQL, along with tools like Firebase, Git, and cloud
            platforms including AWS and Azure. I also have experience working
            with Flutter for mobile development and applying architectural
            patterns like MVC and MVVM to build structured and maintainable
            systems. My interests lie in backend logic, system security,
            database design, and I am actively exploring DevOps to further
            strengthen my ability to deliver reliable and scalable solutions.
          </p> */}

          <p>
            During my time as an Associate Software Engineer Trainee at
            Cloudstaff, I contributed to the development of an AI Book Summary
            application, working on both frontend and backend features. I also
            handled bug fixes, including security-related issues and UI
            functionality improvements, ensuring smoother and more reliable user
            interactions.
          </p>

          {/* <p>
            My journey into tech started in high school, where I discovered my
            interest in building websites using just HTML on a basic text
            editor. That early curiosity grew into a drive to continuously
            learn and challenge myself. I’m motivated by the idea of creating
            solutions that can make a meaningful impact and improve people’s
            everyday lives.
          </p> */}

          <p>
            As a developer, I am known for being a problem solver, fast learner,
            and a proactive team player who stays composed under pressure. I
            value writing clean, efficient code and approaching challenges with
            attention to detail and adaptability.
          </p>

          <p>
            Looking ahead, my goal is to grow into a DevOps Engineer, advance to
            a senior development role, and eventually build my own startup. I
            am also open to expanding into cybersecurity and data science, where
            I already have foundational exposure through programs like the
            DataCamp scholarship.
          </p>

          <div className="subtitle">Technologies</div>

          <div className="skills-wrapper">
            {SKILLS.map((skill) => {
              const icon = SKILL_ICONS[skill];

              return (
                <div className="skill-box" key={skill}>
                  {icon ? (
                    <img
                      className="skill-icon"
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  <span className="skill-label">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-media" aria-label="About photo">
          <img
            className="about-photo"
            src={aboutPhoto}
            alt="Portrait photo"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
