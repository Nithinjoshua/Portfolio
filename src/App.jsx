import React, { useMemo } from 'react';
import {
  SiC,
  SiCanva,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNumpy,
  SiPython,
  SiReact
} from 'react-icons/si';
import { FaTools } from 'react-icons/fa';
import { TbBrandCpp, TbFileTypeSql } from 'react-icons/tb';
import FloatingLines from './components/FloatingLines.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import ShinyText from './components/ShinyText.jsx';
import photoUrl from '../asset/Photo-removebg-preview.png';
import resumeUrl from '../asset/Resume.pdf';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const projects = [
  {
    title: 'Vision Max',
    number: '1',
    text: 'AI-assisted navigation concept for visually impaired users, built with Flutter and Python for obstacle guidance.'
  },
  {
    title: 'E-Commerce Website',
    number: '2',
    text: 'Responsive shopping experience with product listings, cart flow, checkout validation, and clean navigation.'
  },
  {
    title: 'Blood Bank Management System',
    number: '3',
    text: 'C++ system for managing donors, recipients, blood inventory, requests, search, and record updates.'
  }
];

function App() {
  const skillLogos = useMemo(
    () => [
      { node: <SiC />, title: 'C' },
      { node: <TbBrandCpp />, title: 'C++' },
      { node: <SiPython />, title: 'Python' },
      { node: <SiHtml5 />, title: 'HTML' },
      { node: <SiCss />, title: 'CSS' },
      { node: <SiJavascript />, title: 'JavaScript' },
      { node: <SiNumpy />, title: 'NumPy' },
      { node: <TbFileTypeSql />, title: 'DSA' },
      { node: <SiGithub />, title: 'GitHub' },
      { node: <FaTools />, title: 'VS Code' },
      { node: <SiCanva />, title: 'Canva' },
      { node: <SiReact />, title: 'React' }
    ],
    []
  );

  return (
    <main className="portfolio-shell">
      <div className="grain-layer" aria-hidden="true" />
      <div className="ambient-lines" aria-hidden="true">
        <FloatingLines
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 10]}
          lineDistance={[8, 6]}
          bendRadius={5}
          bendStrength={-0.35}
          interactive
          parallax
          linesGradient={['#12f7b7', '#ffffff', '#5cffe3']}
        />
      </div>

      <header className="site-header">
        <a className="brand-link" href="#home" aria-label="Nithin Joshua home">
          NJ
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <a href={resumeUrl} target="_blank" rel="noreferrer" className="resume-link">
          Resume
        </a>
      </header>

      <section id="home" className="hero-section page-section" aria-labelledby="home-title">
        <p className="hero-kicker">Hi, I am</p>
        <h1 id="home-title">
          <ShinyText
            text="Nithin Joshua J"
            speed={4.5}
            delay={0.2}
            color="#f7f7f7"
            shineColor="#15f5b7"
            spread={110}
            direction="left"
          />
        </h1>
        <p className="hero-role">Frontend, Python, and Applied AI Learner.</p>
        <span className="location-badge">Based in India</span>
      </section>

      <section id="about" className="about-section page-section" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-title">Tech-Stack.json</h2>
        </div>

        <div className="about-grid">
          <article className="profile-panel">
            <figure className="photo-stage">
              <img src={photoUrl} alt="Nithin Joshua J" />
            </figure>
            <div>
              <p className="quote-text">"Building useful software from curiosity, code, and steady practice."</p>
              <p className="about-copy">
                I am a B.E. CSE (AIML) student interested in frontend development, Python, and accessible AI projects.
                I enjoy turning practical ideas into working interfaces and improving them through real feedback.
              </p>
            </div>
          </article>

          <div className="stack-board">
            <TechGroup title="Programming" items={['C', 'C++', 'Python']} />
            <TechGroup title="Web Technologies" items={['HTML', 'CSS', 'JavaScript', 'React']} />
            <TechGroup title="Data & Tools" items={['NumPy', 'Pandas', 'GitHub', 'VS Code']} />
          </div>
        </div>

        <div className="skills-loop">
          <LogoLoop
            logos={skillLogos}
            speed={72}
            direction="left"
            logoHeight={34}
            gap={30}
            hoverSpeed={18}
            scaleOnHover
            fadeOut
            fadeOutColor="#050505"
            ariaLabel="Nithin Joshua skills"
            renderItem={item => (
              <span className="skill-item" title={item.title}>
                {item.node}
                <span>{item.title}</span>
              </span>
            )}
          />
        </div>
      </section>

      <section id="projects" className="projects-section page-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Selected Builds</h2>
        </div>
        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.title}>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <span className="details-link">View Details</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section page-section" aria-labelledby="contact-title">
        <p className="eyebrow">Get in Touch</p>
        <h2 id="contact-title">Let&apos;s build something impactful together.</h2>
        <p>
          I am open to frontend work, beginner-friendly AI projects, and useful student collaborations.
        </p>
        <div className="contact-links">
          <a href="mailto:nithinjoshuaj@gamil.com">nithinjoshuaj@gamil.com</a>
          <a href="tel:+919345759419">+91 93457 59419</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </section>
    </main>
  );
}

function TechGroup({ title, items }) {
  return (
    <section className="tech-group" aria-label={title}>
      <h3>{title}</h3>
      <div>
        {items.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default App;
