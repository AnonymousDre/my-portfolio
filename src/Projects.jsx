import imaged1 from "./assets/ImAged 1.png";
import imaged2 from "./assets/ImAged 2.png";
import imaged3 from "./assets/ImAged 3.png";
import ems from "./assets/EMS.png";
import ems2 from "./assets/EMS 2.png";
import ems3 from "./assets/EMS 3.png";
import military1 from "./assets/Military1.png";
import military2 from "./assets/military2.png";
import military3 from "./assets/military3.png";

export default function Projects() {
  return (
    <section id="projects" className="landing-section" aria-label="Projects">
      <h1 className="title">Projects</h1>
      <div className="projects-stack" aria-label="Projects list">
        <div className="projects-layout">
          <div className="projects-content">
            <div className="subtitle">Military Inventory Management System</div>
            <div className="categories">
              <div className="category">CLOUD</div>
              <div className="category">CRUD</div>
              <div className="category">UI DESIGN</div>
              <div className="category">UX DESIGN</div>
              <div className="category">BACKEND</div>
              <div className="category">SUPABASE</div>
              <div className="category">DOCKER</div>
              <div className="category">HOSTING</div>
            </div>

            <p className="description">
              A web-based inventory management system designed for military use, built to ensure efficient asset tracking and secure data handling. 
              The application features a user-friendly interface for managing inventory, monitoring asset movement, and generating detailed reports.
              The system utilizes a modern tech stack with React for the frontend and Node.js with Express for the backend. 
              It is deployed on AWS to ensure scalability, reliability, and high availability. 
              The database is powered by a Dockerized Supabase instance hosted within the AWS environment, 
              enabling structured data management and seamless backend integration.
            </p>
          </div>

          <div className="projects-media" aria-label="Project images">
            <img className="project-image" src={military1} alt="Military Inventory Management System screenshot 1" />
            <img className="project-image" src={military2} alt="Military Inventory Management System screenshot 2" />
            <img className="project-image" src={military3} alt="Military Inventory Management System screenshot 3" />
          </div>
        </div>

        <div className="projects-layout is-reversed">
          <div className="projects-content">
            <div className="subtitle">Employee Management System</div>
            <div className="categories">
              <div className="category">CRUD</div>
              <div className="category">BACKEND</div>
              <div className="category">UI DESIGN</div>
              <div className="category">DESKTOP</div>
              <div className="category">FRONT END</div>
              <div className="category">LOCAL</div>
              
            </div>

            <p className="description">Developed using C#. Application is deployed locally using MariaDB as its database. It used to track employee information and manage their records such as salary and roles.</p>
          </div>

          <div className="projects-media" aria-label="Project images">
            <img className="project-image" src={ems} alt="Employee Management System screenshot 1" />
            <img className="project-image" src={ems2} alt="Employee Management System screenshot 2" />
            <img className="project-image" src={ems3} alt="Employee Management System screenshot 3" />
          </div>
        </div>

        <div className="projects-layout">
          <div className="projects-content">
            <div className="subtitle">ImAged</div>
            <div className="categories">
              <div className="category">DESKTOP</div>
              <div className="category">CRYPTOGRAPHY</div>
              <div className="category">UI DESIGN</div>
              <div className="category">UX DESIGN</div>
              <div className="category">IMAGE FILE CONVERSION</div>
              <div className="category">TTL FEATURE</div>
              <div className="category">IMAGE EXPIRATION</div>
            </div>

            <p className="description">
              A desktop application for image hashing and manipulation.
              It features an interface for converting image files into our hashed imaged format (.ttl file extension),
              which includes a time-to-live (TTL) feature that allows images to expire after a certain period.
              The photo can only be viewed using the ImAged application, and once the TTL expires, the image becomes inaccessible.
              If the photo's header is tampered with, the application will detect the alteration and prevent the image from being viewed.
              The application is built using C# for the frontend, and it is deployed as a
              standalone executable for scalability and reliability.
            </p>
          </div>

          <div className="projects-media" aria-label="Project images">
            <img className="project-image" src={imaged1} alt="ImAged screenshot 1" />
            <img className="project-image" src={imaged2} alt="ImAged screenshot 2" />
            <img className="project-image" src={imaged3} alt="ImAged screenshot 3" />
          </div>
        </div>
      </div>
    </section>
  );
}