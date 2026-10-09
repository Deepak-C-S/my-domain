import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Folder, Monitor, Globe, BriefcaseBusiness, UserRound, Code2, Mail, FileText, Sun, Moon, X, Minus, ExternalLink, Music2, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./styles.css";

const portraitPath = "/assets/deepak-portrait.png";
const projects = [
  { title:"LivingHub", type:"Community management platform", description:"A smart apartment platform for bills, visitors, complaints, notices, polls, amenities and lost-and-found.", learned:"Built FastAPI and SQLAlchemy REST APIs, connected a React UI, and implemented JWT authentication with role-based access.", stack:["React.js","FastAPI","MySQL","SQLAlchemy","JWT","RBAC"], kind:"livinghub", demo:"", github:"" },
  { title:"Green Bridge", type:"Farmer-to-consumer marketplace", description:"A digital marketplace connecting farmers and buyers with crop listings, buyer requests, file uploads and email notifications.", learned:"Built authentication and database-backed features with Node.js and MongoDB, connecting frontend workflows to APIs.", stack:["HTML","CSS","JavaScript","Node.js","MongoDB","Multer"], kind:"greenbridge", demo:"", github:"" },
  { title:"Balaji Essentials", type:"Business enquiry website", description:"A responsive business website with an enquiry flow that stores customer submissions for follow-up.", learned:"Practised integrating a React frontend with FastAPI endpoints and MySQL persistence, including form validation.", stack:["React.js","FastAPI","MySQL","REST API"], kind:"balaji", demo:"", github:"" }
];
const skills = [
  { group:"Languages", items:["Python","JavaScript","C · Basic"] },
  { group:"Frontend", items:["React.js","HTML5","CSS3","React Router","Hooks"] },
  { group:"Backend", items:["FastAPI","REST APIs","JWT","Node.js"] },
  { group:"Database", items:["MySQL","MongoDB","SQLAlchemy"] },
  { group:"Tools & foundations", items:["Git","GitHub","AWS fundamentals","OOP","Machine Learning"] }
];
const experiences = [
  { company:"Dhee Coding Lab", role:"Full Stack Development Intern", period:"Feb 2026 – May 2026", bullets:["Built full-stack web applications using React.js, FastAPI and SQL databases.","Integrated authentication, CRUD operations and database connectivity; debugged features to improve usability."] },
  { company:"Edunet Foundation", role:"Image Classification using Machine Learning", period:"Dec 2024 – Jan 2025", bullets:["Built image-classification models using Python and applied data preprocessing and feature engineering.","Trained models and evaluated performance using standard metrics."] }
];


function GitHubMark({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.32 3.37 1.77.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z"/>
  </svg>;
}

function WindowBar({ title, onClose, onMinimize }) {
  return <div className="window-bar"><div className="window-controls"><button aria-label="Close window" onClick={onClose}><X size={11}/></button><button aria-label="Minimize window" onClick={onMinimize}><Minus size={11}/></button></div><span className="window-title">{title}</span><span className="window-status">LOCAL SESSION</span></div>;
}
function App() {
  const [active,setActive] = useState("about");
  const [dark,setDark] = useState(false);
  const [music,setMusic] = useState(false);
  const [sent,setSent] = useState(false);
  const nav = [{id:"about",label:"About",icon:UserRound},{id:"skills",label:"Skills",icon:Code2},{id:"projects",label:"Projects",icon:Folder},{id:"experience",label:"Experience",icon:BriefcaseBusiness},{id:"contact",label:"Contact",icon:Mail}];
  const go = id => { setActive(id); setSent(false); };
  return <main className={`desktop-shell ${dark ? "dark-mode" : ""}`}>
    <div className="desktop">
      <header className="system-bar"><div className="system-left"><b>▣</b><span>Play</span><span>Edit</span><span>View</span><span>Window</span><span>Enjoy</span></div><div className="system-path">/home/deepak — portfolio.exe</div><div className="system-time">FRI OCT 09&nbsp; 11:28 AM</div></header>
      <aside className="widget">
        <div className="widget-top"><Monitor size={21}/><span>DESKTOP WIDGET</span></div><div className="clock">11:28 <small>AM</small></div>
        <div className="meter"><span>CPU</span><i><b style={{width:"38%"}}/></i></div><div className="meter"><span>RAM</span><i><b style={{width:"62%"}}/></i></div><div className="meter"><span>VOL</span><i><b style={{width:"72%"}}/></i></div>
        <div className="now-playing"><div className="album-art"><Music2 size={17}/></div><div><strong>{music ? "Focus mode" : "Portfolio radio"}</strong><small>{music ? "Ambient mode enabled" : "No audio playing"}</small></div><button aria-label="Toggle focus mode" onClick={()=>setMusic(!music)}>{music ? "Ⅱ" : "▶"}</button></div>
      </aside>
      <nav className="desktop-icons">
        <button className="desktop-icon" onClick={()=>go("about")}><Monitor/><span>Desktop</span></button>
        <button className="desktop-icon" onClick={()=>go("projects")}><Folder/><span>Projects</span></button>
        <button className="desktop-icon" onClick={()=>go("skills")}><Globe/><span>Skills.exe</span></button>
        <button className="desktop-icon" onClick={()=>go("contact")}><Mail/><span>Contact</span></button>
        <button className="desktop-icon" onClick={()=>setDark(!dark)}>{dark ? <Sun/> : <Moon/>}<span>{dark ? "Light mode" : "Dark mode"}</span></button>
      </nav>
      <section className="main-window">
        <WindowBar title={`/home/deepak/${active === "about" ? "welcome" : active}.app`} onClose={()=>go("about")} onMinimize={()=>go("about")}/>
        <div className="window-content">
          <aside className="app-sidebar">
            <div className="sidebar-brand"><span className="brand-dot">D</span><div><strong>DEEPAK.OS</strong><small>Personal portfolio</small></div></div><div className="sidebar-label">WORKSPACE</div>
            {nav.map(item=>{const Icon=item.icon;return <button key={item.id} className={`side-link ${active===item.id?"selected":""}`} onClick={()=>go(item.id)}><Icon size={15}/><span>{item.label}</span>{active===item.id&&<span className="active-dot"/>}</button>})}
            <div className="sidebar-bottom"><span className="online-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
          </aside>
          <div className="app-page">
            {active==="about"&&<section className="about-page">
              <div className="welcome-tag"><span className="online-dot"/> HELLO, WORLD. I'M</div><h1>Deepak <em>C S</em><span className="cursor">_</span></h1>
              <div className="role-line">AI & MACHINE LEARNING GRADUATE <span>/</span> FULL-STACK DEVELOPER</div>
              <p className="intro">I build useful web experiences by connecting thoughtful interfaces with reliable backend systems. I enjoy solving practical problems and turning ideas into working products.</p>
              <div className="about-meta"><span><Globe size={14}/> Bengaluru, India</span><span><span className="online-dot"/> Open to opportunities</span></div>
              <div className="about-actions"><a className="primary-button" href="/assets/deepak-resume.pdf" target="_blank" rel="noreferrer"><FileText size={15}/> View résumé <ArrowUpRight size={14}/></a><button className="secondary-button" onClick={()=>go("projects")}>Explore projects <ArrowUpRight size={14}/></button></div>
              <div className="portrait-card"><div className="portrait-caption"><span>PROFILE_01.PNG</span><span>FIG. 001</span></div>{portraitPath?<img src={portraitPath} alt="Portrait of Deepak C S"/>:<div className="portrait-placeholder"><UserRound size={70}/><span>Add portrait to public/assets</span></div>}<div className="portrait-foot"><span>DEEPAK C S</span><span>BUILDING WITH PURPOSE</span></div></div>
              <div className="status-strip"><span><Cpu size={14}/> SYSTEM STATUS: READY</span><span>DESIGNED & BUILT BY DEEPAK © 2026</span></div>
            </section>}
            {active==="skills"&&<section className="content-page"><div className="eyebrow">DIRECTORY / 02</div><h2>My <em>toolkit.</em></h2><p className="page-lead">A focused set of tools used in my projects and relevant to the roles I’m pursuing.</p><div className="skills-grid">{skills.map(g=><article className="skill-card" key={g.group}><div className="skill-card-head"><Code2 size={17}/><span>{g.group}</span></div><div className="chip-list">{g.items.map(x=><span className="chip" key={x}>{x}</span>)}</div></article>)}</div><div className="note-box"><CheckCircle2 size={17}/><span>Skills are selected from my résumé and hands-on project work.</span></div></section>}
            {active==="projects"&&<section className="content-page"><div className="eyebrow">WORKSPACE / 03</div><h2>Selected <em>projects.</em></h2><p className="page-lead">Three practical builds, each teaching me something new about full-stack development.</p><div className="projects-list">{projects.map((p,i)=><article className="project-card" key={p.title}>
              <div className={`project-visual ${p.kind}`}><div className="mock-window"><div className="mock-bar"><i/><i/><span>{p.title.toUpperCase()}</span></div><div className="mock-screen">{p.kind==="livinghub"?<><div className="mock-kicker">RESIDENT DASHBOARD</div><div className="mock-blocks"><i/><i/><i/></div><div className="mock-lines"><i/><i/><i/></div></>:p.kind==="greenbridge"?<><div className="mock-leaf">✳</div><div className="mock-kicker">FARMER ↔ BUYER</div><div className="mock-blocks"><i/><i/><i/></div></>:<><div className="mock-bag">B.</div><div className="mock-kicker">ESSENTIALS / ENQUIRIES</div><div className="mock-lines"><i/><i/><i/></div></>}</div></div><span className="project-index">0{i+1}</span></div>
              <div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><ul><li>{p.learned}</li></ul><div className="chip-list project-chips">{p.stack.map(t=><span className="chip" key={t}>{t}</span>)}</div><div className="project-links">{p.demo?<a href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13}/></a>:<span className="link-pending">Live demo · add URL</span>}{p.github?<a href={p.github} target="_blank" rel="noreferrer"><GitHubMark size={13}/> GitHub</a>:<span className="link-pending"><GitHubMark size={13}/> add repo URL</span>}</div></div>
            </article>)}</div></section>}
            {active==="experience"&&<section className="content-page"><div className="eyebrow">HISTORY / 04</div><h2>Experience & <em>learning.</em></h2><p className="page-lead">Where I’ve applied my skills and built a stronger development foundation.</p><div className="timeline">{experiences.map(e=><article className="experience-card" key={e.company}><div className="timeline-marker"><BriefcaseBusiness size={15}/></div><div className="experience-heading"><div><h3>{e.company}</h3><p>{e.role}</p></div><span className="date-chip">{e.period}</span></div><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div><div className="education-card"><div className="education-icon">CE</div><div><div className="project-type">EDUCATION</div><h3>B.E. Artificial Intelligence & Machine Learning</h3><p>City Engineering College, Bengaluru · 2026</p></div><strong>CGPA 8.15</strong></div><div className="cert-row"><span>CERTIFICATIONS</span><div><b>Full Stack Development using Python</b><small>Dhee Coding Lab</small></div><div><b>AWS Cloud Computing</b><small>Cloud Foundation</small></div></div></section>}
            {active==="contact"&&<section className="content-page contact-page"><div className="eyebrow">CONNECTION / 05</div><h2>Let’s make <em>something.</em></h2><p className="page-lead">Have a project, opportunity or idea? Send a message and let’s connect.</p><div className="contact-layout"><div className="contact-details">
              <a href="mailto:deepakcs2k4@gmail.com" className="contact-item"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small><strong>deepakcs2k4@gmail.com</strong></span><ArrowUpRight size={14}/></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-item"><span className="contact-icon"><GitHubMark size={18}/></span><span><small>GITHUB</small><strong>Replace with your profile URL</strong></span><ArrowUpRight size={14}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-item"><span className="contact-icon">  </span><span><small>LINKEDIN</small><strong>Replace with your profile URL</strong></span><ArrowUpRight size={14}/></a><div className="contact-location"><Globe size={16}/> Bengaluru, Karnataka, India</div>
            </div><form className="contact-form" onSubmit={e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent(d.get("subject")||"Portfolio enquiry");const body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`);window.location.href=`mailto:deepakcs2k4@gmail.com?subject=${subject}&body=${body}`;setSent(true)}}><label>Your name<input required name="name" placeholder="Jane Doe"/></label><label>Your email<input required type="email" name="email" placeholder="jane@example.com"/></label><label>Subject<input name="subject" placeholder="Project / opportunity"/></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about it..."/></label><button className="primary-button" type="submit"><Mail size={15}/> Open email draft <ArrowUpRight size={14}/></button>{sent&&<small className="form-note">Your email app should open with the message ready to send.</small>}</form></div></section>}
          </div>
        </div>
      </section>
      <div className="desktop-note"><span>TIP: SELECT AN ICON OR USE THE SIDEBAR</span><span>PORTFOLIO BUILD 1.0</span></div>
      <footer className="taskbar"><div className="taskbar-start"><span className="tiny-mark">▣</span><strong>DEEPAK.OS</strong></div><button onClick={()=>go("about")}><Monitor size={14}/> Portfolio.exe</button><div className="taskbar-right"><span className="online-dot"/> ONLINE <span className="taskbar-time">11:28 AM</span></div></footer>
    </div>
  </main>;
}
createRoot(document.getElementById("root")).render(<App />);
