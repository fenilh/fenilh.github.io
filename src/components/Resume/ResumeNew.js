
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import imggg from "../../Assets/imggg.jpeg";

function ResumeNew() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Helmet>
        <title>Fenil Limbachiya | Resume</title>
        <meta
          name="description"
          content="Fenil Limbachiya - Frontend React Developer Resume"
        />
      </Helmet>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: ${darkMode ? "#0b1220" : "#f3f4f6"};
        }

        .bg {
          min-height: 100vh;
          padding: 60px 20px;
          background: ${
            darkMode
              ? "linear-gradient(135deg, #0b1220, #0f1a30, #0b1220)"
              : "linear-gradient(135deg, #ffffff, #e5e7eb)"
          };
        }

        .container {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
        }

        /* LEFT */
        .sidebar {
          background: ${darkMode ? "#182235" : "#ffffff"};
          color: ${darkMode ? "white" : "#111827"};
          padding: 30px;
          border-radius: 18px;
          position: sticky;
          top: 40px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 15px;
          display: block;
        }

        .sidebar h1 {
          text-align: center;
          font-size: 22px;
        }

        .sidebar p.role {
          text-align: center;
          font-size: 14px;
          color: ${darkMode ? "#b0b7c3" : "#6b7280"};
          margin-top: 6px;
        }

        .contact {
          margin-top: 25px;
          font-size: 14px;
        }

        .contact a, .contact p {
          display: block;
          margin-bottom: 10px;
          color: inherit;
          text-decoration: none;
        }

        .contact a:hover {
          text-decoration: underline;
        }

        .btn {
          margin-top: 20px;
          padding: 12px;
          width: 100%;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: bold;
        }

        .download {
          background: ${darkMode ? "#ffffff" : "#111827"};
          color: ${darkMode ? "#000" : "#fff"};
        }

        .toggle {
          background: ${darkMode ? "#2a354a" : "#e5e7eb"};
          color: inherit;
        }

        /* RIGHT */
        .content {
          background: ${darkMode ? "#111a2e" : "#ffffff"};
          color: ${darkMode ? "#d1d5db" : "#374151"};
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        section {
          margin-bottom: 45px;
        }

        h2 {
          margin-bottom: 15px;
          color: ${darkMode ? "white" : "#111827"};
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 8px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 30px;
        }

        .project {
          background: ${darkMode ? "#182235" : "#f3f4f6"};
          padding: 15px;
          border-radius: 12px;
        }

        .project a {
          color: #3b82f6;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: static;
          }
        }
      `}</style>

      <div className="bg">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container"
        >
          {/* LEFT */}
          <aside className="sidebar">
            <img src={imggg} alt="Fenil Limbachiya" className="avatar" />
            <h1>Fenil Limbachiya</h1>
            <p className="role">Frontend React Developer</p>

            <div className="contact">
              <p>📍 Ahmedabad, Gujarat</p>
              <p>📞 +91 9512622021</p>
              <p>✉️ fenilh2002@gmail.com</p>
              <a href="https://www.linkedin.com/in/fenil-limbachiya-b91932233/" target="_blank">🔗 LinkedIn</a>
              <a href="https://github.com/fenilh" target="_blank">🔗 GitHub</a>
            </div>
 
<a 
     
 href="Fenil_Resume.pdf" target="_blank" rel="noreferrer">
 <button className="btn download">
  ⬇ Download Resume (PDF)
   </button>
</a>



            <button className="btn toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </aside>

          {/* RIGHT */}
          <main className="content">
            <section>
              <h2>Professional Summary</h2>
              <p>
                Frontend-focused Software Engineer with hands-on experience
                building responsive, scalable web applications using React.js,
                modern JavaScript, and component-based architecture.
              </p>
            </section>

            <section>
              <h2>Technical Skills</h2>
              <div className="grid">
                <p>HTML, CSS, JavaScript</p>
                <p>React.js, Next.js, Node.js</p>
                <p> React Router</p>
                <p>Tailwind CSS, Bootstrap</p>
                <p>Git, GitHub, VS Code</p>
                <p>Responsive Web Design</p>
              </div>
            </section>

            <section>
              <h2>Work Experience</h2>
              <h3>Software Engineer  – Ractosoft Solutions</h3>
              <p>Ahmedabad · 9–10 Months</p>
              <ul>
                <li>Developed dynamic React applications using Hooks</li>
                <li>Integrated REST APIs with Axios & Redux</li>
                <li>Built mobile-first responsive UI</li>
                <li>Implemented routing & form handling</li>
                <li>Worked in Agile environment using Git/GitHub</li>
              </ul>
            </section>

            <section>
              <h2>Projects</h2>
              <div className="grid">
                <div className="project">
                  <h4>Bakery Management System</h4>
                  <p>Multi-branch system for inventory & sales management</p>
                  <p>React, Bootstrap, Axios, Node.js</p>
                </div>

                <div className="project">
                  <h4>E-QMS</h4>
                  <p>Electronic Quality Management System</p>
                  <p>React, Bootstrap, Axios, React Hook Form</p>
                </div>
              </div>
            </section>

            <section>
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>B.E. Computer Engineering</strong> – SSIT (2021–2025)  
                  <br />CGPA: 7.68
                </li>
                <li>
                  <strong>HSC (Science)</strong> – 78% (2021)
                </li>
                <li>
                  <strong>SSC</strong> – 77% (2019)
                </li>
              </ul>
            </section>
          </main>
        </motion.div>
      </div>
    </>
  );
}

export default ResumeNew;


