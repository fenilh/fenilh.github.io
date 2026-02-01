// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { Github, Linkedin, Mail, Moon, Sun, Download } from "lucide-react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // function ResumeNew() {
// //   const [width, setWidth] = useState(1200);

// //   useEffect(() => {
// //     setWidth(window.innerWidth);
// //   }, []);

// //   return (
// //     <div>
// //       <Container fluid className="resume-section">
// //         <Particle />
// //         <Row style={{ justifyContent: "center", position: "relative" }}>
// //           <Button
// //             variant="primary"
// //             href={pdf}
// //             target="_blank"
// //             style={{ maxWidth: "250px" }}
// //           >
// //             <AiOutlineDownload />
// //             &nbsp;Download CV
// //           </Button>
// //         </Row>

// //         <Row className="resume">
// //           <Document file={pdf} className="d-flex justify-content-center">
// //             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
// //           </Document>
// //         </Row>

// //         <Row style={{ justifyContent: "center", position: "relative" }}>
// //           <Button
// //             variant="primary"
// //             href={pdf}
// //             target="_blank"
// //             style={{ maxWidth: "250px" }}
// //           >
// //             <AiOutlineDownload />
// //             &nbsp;Download CV
// //           </Button>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // }

// function ResumeNew() {
//   return (
//     <>
//       <Helmet>
//         <title>Fenil Limbachiya | Resume</title>
//         <meta name="description" content="Resume of Fenil Limbachiya, Frontend React Developer from Ahmedabad, Gujarat." />
//       </Helmet>

//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10"
//       >
//         {/* Left Sidebar */}
//         <aside className="md:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
//           <div className="flex flex-col items-center text-center">
//             <div className="h-32 w-32 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
//             <h1 className="text-xl font-bold">Fenil Limbachiya</h1>
//             <p className="text-sm text-gray-500">Frontend React Developer</p>
//           </div>

//           <div className="mt-6 space-y-3 text-sm">
//             <p>📍 Ahmedabad, Gujarat</p>
//             <p>📞 +91 9512622021</p>
//             <p>✉️ fenilh2002@gmail.com</p>
//             <p>🔗 LinkedIn / GitHub</p>
//           </div>

//           <a
//             href="/resume.pdf"
//             download
//             className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"
//           >
//             <Download className="mr-2" /> Download Resume
//           </a>
//         </aside>

//         {/* Right Content */}
//         <div className="md:col-span-2 space-y-10">
//           {/* Summary */}
//           <section>
//             <h2 className="section-title">Professional Summary</h2>
//             <p className="text-gray-600 dark:text-gray-400">
//               Frontend-focused Software Engineer with hands-on experience in building responsive,
//               scalable web applications using React.js and modern JavaScript. Strong understanding
//               of UI/UX principles, RESTful APIs, and component-based architecture.
//             </p>
//           </section>

//           {/* Skills */}
//           <section>
//             <h2 className="section-title">Technical Skills</h2>
//             <ul className="grid sm:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
//               <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
//               <li><strong>Frameworks:</strong> React.js, Next.js, Node.js</li>
//               <li><strong>Libraries:</strong> Redux, React Router</li>
//               <li><strong>Styling:</strong> Tailwind CSS, Bootstrap</li>
//               <li><strong>Tools:</strong> Git, GitHub, VS Code, Vite, Webpack</li>
//               <li><strong>Specialization:</strong> Frontend Development, Responsive UI</li>
//             </ul>
//           </section>

//           {/* Experience */}
//           <section>
//             <h2 className="section-title">Work Experience</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold">Software Engineer Intern – Ractosoft Solutions</h3>
//                 <p className="text-sm text-gray-500">Ahmedabad · 9–10 Months</p>
//                 <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
//                   <li>Developed dynamic front-end applications using React.js and Hooks</li>
//                   <li>Integrated REST APIs with Axios and Redux for state management</li>
//                   <li>Built mobile-first UI using Bootstrap and Tailwind CSS</li>
//                   <li>Implemented routing with React Router and forms with React Hook Form</li>
//                   <li>Worked in Agile environment with Git/GitHub</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Projects */}
//           <section>
//             <h2 className="section-title">Projects</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-semibold">Bakery Management System</h3>
//                 <p className="text-sm text-gray-500">React.js, Bootstrap, Axios, Node.js</p>
//                 <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
//                   <li>Multi-branch system for inventory, sales, and production</li>
//                   <li>CRUD operations with modular component architecture</li>
//                   <li>Real-time updates and clean UI with DataTables</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="font-semibold">E-QMS (Electronic Quality Management System)</h3>
//                 <p className="text-sm text-gray-500">React.js, Bootstrap, Axios</p>
//                 <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
//                   <li>Interactive UI with reusable components</li>
//                   <li>Form handling and validation using React Hook Form</li>
//                   <li>Managed reports and master data with consistent UX</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Education */}
//           <section>
//             <h2 className="section-title">Education</h2>
//             <ul className="space-y-3 text-gray-600 dark:text-gray-400">
//               <li>
//                 <strong>B.E. Computer Engineering</strong> – Shree Swaminarayan Institute of Technology (2021–2025) · CGPA: 7.68
//               </li>
//               <li>
//                 <strong>HSC (Science)</strong> – 78% · 2021
//               </li>
//               <li>
//                 <strong>SSC</strong> – 77% · 2019
//               </li>
//             </ul>
//           </section>
//         </div>
//       </motion.section>
//     </>
//   );
// }

// export default ResumeNew;

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
  href="/Fenil_Resume.pdf"
  download="Fenil_Limbachiya_Resume.pdf"
>
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


