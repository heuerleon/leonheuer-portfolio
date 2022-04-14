import React, { useEffect } from "react"
import Helmet from "react-helmet"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import LanguageIcon from "../components/languageIcon.js"
import "../style/global.scss"

const projectCats = [
  {
    image: "./images/database.png",
    h2: "Database Engineering",
    p: "Creation and management of reliable database systems"
  },
  {
    image: "./images/desktop.png",
    h2: "Desktop Applications",
    p: "User-friendly and modern desktop applications"
  },
  {
    image: "./images/web.png",
    h2: "Web Development",
    p: "Sleek and responsive websites and web apps"
  },
  {
    image: "./images/game.png",
    h2: "Game Development",
    p: "Video game modifications and plugins"
  },
];

const aboutMeTabs = [
  {
    index: 0,
    image: "./images/approach.png",
    title: "How I got into coding",
    p: "When I was 10 years old, I found a book about Small Basic in my father's bookshelf. It raised my " +
      "interest in programming and tought me the very basics of programming logic. Shortly after that, " + 
      "I created my first website and learned the basics of modern web design. Three years ago, I found out " + 
      "I could create my own gameplay extensions for the video game Minecraft I was playing, so I started " + 
      "learning Java, which has become my favourite programming language and is probably the one I have the most " + 
      "experience with."
  },
  {
    index: 1,
    image: "./images/experience.png",
    title: "What I've been working on recently",
    p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
  },
  {
    index: 2,
    image: "./images/mindset.png",
    title: "What I'm interested in",
    p: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
  },
];

let tabIndex = 1;

function handleTabChange(event, index) {
  event.preventDefault();
  if (index <= 2) {
    tabIndex = index;
  }
  alert(tabIndex.toString());
}

let featured = [
  {
    id: 0,
    image: "./images/projects/project-3.jpg",
    title: "My portfolio",
    langs: [
      {image: "./images/language_icons/typescript.svg", title: "TypeScript"},
      {image: "./images/language_icons/svelte.svg", title: "Svelte"},
      {image: "./images/language_icons/vscode.svg", title: "VS Code"},
      {image: "./images/language_icons/sass.svg", title: "SASS/SCSS"},
    ],
    source: "/",
    desc: "My personal portfolio website you're currently looking at."
  },
  {
    id: 1,
    image: "./images/projects/project-1.jpg",
    title: "MC GUI API",
    langs: [
      {image: "./images/language_icons/java.svg", title: "Java"},
      {image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA"},
    ],
    source: "/",
    desc: "MC GUI API is an API for creating graphical user interfaces in the video game Minecraft."
  },
  {
    id: 2,
    image: "./images/projects/project-2.jpg",
    title: "Passman",
    langs: [
      {image: "./images/language_icons/csharp.svg", title: "C#"},
      {image: "./images/language_icons/postgresql.svg", title: "PostgreSQL"},
      {image: "./images/language_icons/rider.svg", title: "Rider"},
    ],
    source: "/",
    desc: "A desktop application that stores passwords safely."
  },
];

const projectsDefault = [
  "My portfolio",
  "SkyCave website",
  "Minecraft plugins",
  "LTS Store",
  "Sudoku Solver",
  "WhatsFlat",
  "PasswordGen"
];

let projects = [
  {
    image: "./images/projects/project-3.jpg",
    title: "My portfolio",
    langs: [
      {image: "./images/language_icons/typescript.svg", title: "TypeScript"},
      {image: "./images/language_icons/svelte.svg", title: "Svelte"},
      {image: "./images/language_icons/vscode.svg", title: "VS Code"},
      {image: "./images/language_icons/sass.svg", title: "SASS/SCSS"},
    ],
    source: "/",
    desc: "My personal portfolio website you're currently looking at."
  },
  {
    image: "./images/projects/project-1.jpg",
    title: "SkyCave website",
    langs: [
      {image: "./images/language_icons/typescript.svg", title: "TypeScript"},
      {image: "./images/language_icons/svelte.svg", title: "Svelte"},
      {image: "./images/language_icons/vscode.svg", title: "VS Code"},
      {image: "./images/language_icons/sass.svg", title: "SASS/SCSS"},
    ],
    source: "/",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
  },
  {
    image: "./images/projects/project-2.jpg",
    title: "Minecraft plugins",
    langs: [
      {image: "./images/language_icons/kotlin.svg", title: "Kotlin"},
      {image: "./images/language_icons/java.svg", title: "Java"},
      {image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA"},
      {image: "./images/language_icons/mongodb.svg", title: "MongoDB"},
    ],
    source: "/",
    desc: "A collection of Minecraft plugins I developed for the SkyCave Server."
  },
  {
    image: "./images/projects/project-4.jpg",
    title: "LTS Store",
    langs: [
      {image: "./images/language_icons/java.svg", title: "Java"},
      {image: "./images/language_icons/spring.svg", title: "Spring"},
      {image: "./images/language_icons/intellij.svg", title: "IntelliJ"},
      {image: "./images/language_icons/postgresql.svg", title: "PostgreSQL"},
      {image: "./images/language_icons/javascript.svg", title: "JavaScript"},
      {image: "./images/language_icons/react.svg", title: "React"},
    ],
    source: "/",
    desc: "An online shopping platform I'm currently developing for some friends."
  },
  {
    image: "./images/projects/project-2.jpg",
    title: "Sudoku Solver",
    langs: [
      {image: "./images/language_icons/csharp.svg", title: "C#"},
    ],
    source: "/",
    desc: "A tool to solve any pattern of a Sudoku riddle."
  },
  {
    image: "./images/projects/project-3.jpg",
    title: "WhatsFlat",
    langs: [
      {image: "./images/language_icons/java.svg", title: "Java"},
      {image: "./images/language_icons/intellij.svg", title: "IntelliJ"},
      {image: "./images/language_icons/rabbitmq.svg", title: "RabbitMQ"},
    ],
    source: "/",
    desc: "A messaging client built using RabbitMQ."
  }
];

let showSortDropdown = false;
let sortFilter = 0;

function setShowSortDropdown(index) {
  sortFilter = index;
  showSortDropdown = false;
  switch (index) {
    case 0: {
      sortProjectsDefault();
      break;
    }
    case 1: {
      sortProjectsAZ();
      break;
    }
    case 2: {
      sortProjectsZA();
      break;
    }
    default: {
      sortProjectsDefault();
    }
  }
}

function sortProjectsAZ() {
  const titles = [];
  projects.forEach(element => {
    titles.push(element.title);
  });
  titles.sort();
  updateProjects(titles);
}

function sortProjectsZA() {
  const titles = [];
  projects.forEach(element => {
    titles.push(element.title);
  });
  titles.sort();
  titles.reverse();
  updateProjects(titles);
}

function sortProjectsDefault() {
  updateProjects(projectsDefault);
}

function updateProjects(newOrder) {
  const newProjects = [];
  for (let i = 0; i < projects.length; i++) {
    newProjects.push({});
  }
  projects.forEach(element => {
    newProjects[newOrder.indexOf(element.title)] = element;
  });
  projects = newProjects;
}

let send_attempted = false;
let all_fields_filled = false;
let contact_subject = '';
let contact_email = '';
let contact_name = '';
let contact_message = '';

function sendMessage() {
  send_attempted = true;
  all_fields_filled = (contact_subject !== '') && (contact_email !== '') && (contact_name !== '') && (contact_message !== '');
  if (all_fields_filled) {
    let request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/963429237572923503/_z-rM1YtWwpNEasTPInC96a0ZlaQzl-UO1uWXg_XrTu_D-IY9NFgXdd0RhKUW9KOKl0A");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => console.log(request.responseText);
    let body = JSON.stringify({
      content: '<@320518030243135490> someone has used the contact formula on your website https://leonheuer.de',
      allowed_mentions: {
        parse: ['users']
      },
      embeds: [
        {
          title: contact_subject,
          description: contact_message,
          color: 959977,
          fields: [
            {
              name: 'From:',
              value: contact_name + " (" + contact_email + ")",
            },
          ],
        },
      ],
    })
    request.send(body);
  }
}

function isValidEmail(email) {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regex.test(String(email).toLowerCase());
}

let scrollBefore = 0;
let topName = '';
let index = 0;

const topNameList = [
  "Front end developer",
  "Linux server administrator",
  "Java & Kotlin developer",
  "Gaming enthusiast",
  "Hobby game developer",
  "Computer hardware hobbyist",
];

function typeWriterWrite(text) {
  topName = '';
  let pos = 0;
  let timer = setInterval(() => {
    topName += text.charAt(pos);
    pos++;
    if (pos > text.length) {
      clearInterval(timer);
      setTimeout(typeWriterDelete, 2000);
    }
  }, 40)
}

function typeWriterDelete() {
  index++
  if (index >= topNameList.length) {
    index = 0
  }

  let pos = topName.length
  let timer = setInterval(() => {
    topName = topName.substring(0, pos)
    pos--
    if (pos < 0) {
      clearInterval(timer)
      typeWriterWrite(topNameList[index])
    }
  }, 40)
}

let topSectionStyle = {
  backgroundPosition: "center " + window.screenY * 0.3 + "px"
};

const handleScroll = () => {
  if (scrollBefore !== window.screenY) {
    topSectionStyle.backgroundPosition = "center " + window.screenY * 0.3 + "px"
    scrollBefore = window.screenY
  }
};

// markup
const IndexPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollBefore = window.screenY
    setInterval(handleScroll, 1000 / 60)
    typeWriterWrite(topNameList[index])
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main>
      <Helmet>
        <script src="https://kit.fontawesome.com/a01c807fba.js" crossorigin="anonymous"></script>
        <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      </Helmet>
      <title>Home Page</title>
      <Nav />
      <section className="alt-section-dark full-height y-axis-centered" id="top" style={topSectionStyle}>
        <div className="container">
          <div className="row x-axis-space-between y-axis-centered">
            <div className="column-left col-2">
              <h3 className="headline-prefix typewriter">{topName}</h3>
              <h1>Leon Heuer</h1>
              <p className="p-no-margin">
                My name is Leon Heuer and I welcome you to my personal website. I am a 16 years old developer from Germany.
              </p>
              <div className="social-media-container">
                <a href="https://github.com/heuerleon" target="_blank" rel="noreferrer" aria-label="github"><i className="fab fa-github"></i></a
                ><a href="https://www.instagram.com/heuerleon/" target="_blank" rel="noreferrer" aria-label="instagram"><i className="fab fa-instagram"></i></a
                ><a href="https://www.linkedin.com/in/leonheuer/" target="_blank" rel="noreferrer" aria-label="linkedin"><i className="fab fa-linkedin"></i></a>
              </div>
              <div>
                <a href="#about" className="btn-primary">
                  <span>Learn More</span>
                </a><a href="#projects" className="btn-alt">
                  <span>View my work</span>
                </a>
              </div>
            </div>
            <div className="column-centered col-2">
              <div id="portrait">
                <img src={`./images/leon-heuer-min.jpg`} alt="Leon Heuer" className="rounded-image"/>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down" aria-label="scroll-down"><span></span></a>
      </section>

      <section className="padding-section" id="about">
        <div className="container">
          <div className="row padding-row x-axis-centered y-axis-centered">
            <div className="column-centered">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="row padding-row x-axis-space-between y-axis-stretched">
            <div className="tab-control">
              <div className="tab-header">
                <button className={`tab ${tabIndex === 0 ? "selected-tab" : ""}`} onClick={(event) => handleTabChange(event, 0)}>Background story</button>
                <button className={`tab ${tabIndex === 1 ? "selected-tab" : ""}`} onClick={() => (tabIndex = 1)}>Working on...</button>
                <button className={`tab ${tabIndex === 2 ? "selected-tab" : ""}`} onClick={() => (tabIndex = 2)}>Interested in...</button>
              </div>
              {aboutMeTabs.map(aboutMeItem => (
                <div className={`tab-content ${tabIndex === aboutMeItem.index ? "tab-visible" : ""}`}>
                  <img src={`${aboutMeItem.image}`} alt={aboutMeItem.title + "Icon"} className="small-img"/>
                  <h3>{aboutMeItem.title}</h3>
                  <p>{aboutMeItem.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="padding-section alt-section" id="services">
        <div className="container">
          <div className="row padding-row">
            <div className="column-centered">
              <h1>What I do</h1>
            </div>
          </div>
          <div className="row padding-row x-axis-space-between y-axis-stretched">
            {projectCats.map(projectCat => (
              <div className="column-centered col-4">
                <div className="box">
                  <img src={`${projectCat.image}`} alt={projectCat.h2 + "icon"} className="small-img"/>
                  <h3>{projectCat.h2}</h3>
                  <p>{projectCat.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-section" id="featured">
        <div className="container">
          <div className="row padding-row">
            <div className="column-centered">
              <h1>Featured Projects</h1>
            </div>
          </div>
          {featured.map(project => (
            <div className="row padding-row x-axis-space-between y-axis-stretched">
              <div className="column">
                <div className={`featured ${project.id % 2 === 1 ? "featured-right" : ""}`}>
                  <div className="image-wrapper">
                    <img src={`${project.image}`} alt={project.title} className="featured-thumbnail" />
                  </div>
                  <div className="featured-inner">
                    <h1>{project.title}</h1>
                    <h3>Description</h3>
                    <p>{project.desc}</p>
                    <h3>Built with</h3>
                    <div className="icon-container">
                      {/*
                      {project.langs.map(icon => (
                        <LanguageIcon icon={icon} />
                      ))}
                      */}
                    </div>
                    <a href={project.source} className="featured-source" target="_blank" rel="noreferrer" title="View on GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="padding-section alt-section" id="projects">
        <div className="container">
          <div className="row padding-row">
            <div className="column-left">
              <h1>More Projects</h1>
              <div className="filters">
                Filters:
                <div className="dropdown">
                  <span className="dropdown-title" onClick={() => (showSortDropdown = !showSortDropdown)}>Sort by</span>
                  <ul className={`dropdown-list ${showSortDropdown ? "dropdown-visible" : ""}`}>
                    <li className={sortFilter === 0 ? "selected" : ""} onClick={() => setShowSortDropdown(0)}>Default</li>
                    <li className={sortFilter === 1 ? "selected" : ""} onClick={() => setShowSortDropdown(1)}>A to Z</li>
                    <li className={sortFilter === 2 ? "selected" : ""} onClick={() => setShowSortDropdown(2)}>Z to A</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-row x-axis-space-between y-axis-stretched">
            {projects.map(project => (
              <div className="column-centered col-3">
                <div className="box box-image">
                  <h1>{project.title}</h1>
                  <img src={`${project.image}`} alt={project.title} className="box-thumbnail" />
                  <div className="box-inner">
                    <h3>Description</h3>
                    <p>{project.desc}</p>
                    <h3>Built with</h3>
                    <div className="icon-container">
                      {/*
                      {project.langs.map(icon => (
                        <LanguageIcon icon={icon} />
                      ))}
                      */}
                    </div>
                    <a href={project.source} className="box-source" target="_blank" rel="noreferrer" title="View on GitHub"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-section" id="contact">
        <div className="container">
          <div className="row padding-row">
            <div className="column-left">
              <h1>Contact Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="column-left col-3-double">
              <div className="row row-slim">
                <div className="column-left">
                  <input type="text" placeholder="Subject" value={contact_subject} className={(!contact_subject && send_attempted) ? "empty-input" : ""} />
                  <span className={`error-message light ${(contact_subject || !send_attempted) ? "hidden" : ""}`}>Please enter a subject.</span>
                </div>
              </div>
              <div className="row row-slim">
                <div className="column-left col-2">
                  <input type="text" placeholder="Your email address" value={contact_email} className={(!contact_email && send_attempted) ? "empty-input" : ""} />
                  <span className={`error-message light ${(contact_email || !send_attempted) ? "hidden" : ""}`}>Please enter your email address.</span>
                  <span className={`error-message light ${(!contact_email || isValidEmail(contact_email) || !send_attempted) ? "hidden" : ""}`}>Please enter a valid email address.</span>
                </div>
                <div className="column-left col-2">
                  <input type="text" placeholder="Your name" value={contact_name} className={(!contact_name && send_attempted) ? "empty-input" : ""} />
                  <span className={`error-message light ${(contact_name || !send_attempted) ? "hidden" : ""}`}>Please enter your name.</span>
                </div>
              </div>
              <div className="row row-slim">
                <div className="column-left">
                  <textarea placeholder="Enter message" value={contact_message} className={(!contact_message && send_attempted) ? "empty-input" : ""}></textarea>
                  <span className={`error-message light ${(contact_message || !send_attempted) ? "hidden" : ""}`}>Please enter a message.</span>
                </div>
              </div>
            </div>
            <div className="column-left col-3 col-alt-padding">
              <div className="row nowrap y-axis-centered padding-row row-slim">
                <i className="fas fa-map-marked-alt double-line-icon"></i>
                <div className="column-left">
                  <span className="bold">Bad Schwartau, Germany</span>
                  <span className="light">Am Brahmberg 25, D-23611</span>
                </div>
              </div>
              <div className="row nowrap y-axis-centered padding-row row-slim">
                <i className="fas fa-envelope-open-text double-line-icon"></i>
                <div className="column-left">
                  <span className="bold">leon(at)heuer.ovh</span>
                  <span className="light">Send me an email</span>
                </div>
              </div>
              <div className="row nowrap y-axis-centered padding-row row-slim">
                <i className="fab fa-linkedin double-line-icon"></i>
                <div className="column-left">
                  <a href="https://www.linkedin.com/in/leonheuer/" target="_blank" rel="noreferrer" className="bold">LinkedIn/leonheuer</a>
                  <span className="light">Send me a direct message</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-row">
            <div className="column-left">
              <div className="h-captcha" data-sitekey="dc87f7c2-9f10-4b84-9faf-45114d2e2285"></div>
              <div className="button-container">
                <span className="btn-primary" onClick={() => sendMessage()}>Send message</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default IndexPage;
