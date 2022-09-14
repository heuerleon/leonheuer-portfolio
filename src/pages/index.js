import React, { useRef, useState } from "react";
import TypeIt from "typeit-react";
import Layout from "../components/layout.js";
import LanguageIcon from "../components/languageIcon.js";
import { navigate } from "gatsby";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const projectCats = [
  {
    image: "./images/desktop.png",
    h2: "Desktop Tools",
    p: "Desktop applications primarily for Windows",
  },
  {
    image: "./images/web.png",
    h2: "Web Development",
    p: "Sleek and responsive websites and web apps",
  },
  {
    image: "./images/game.png",
    h2: "Minecraft Plugins",
    p: "Server-sided mods that enhance the gameplay",
  },
  {
    image: "./images/mobile.png",
    h2: "Mobile Apps",
    p: "Development of native Android apps",
  },
];

const featured = [
  {
    id: 0,
    image: "./images/projects/portfolio.jpg",
    title: "My portfolio",
    langs: [
      { image: "./images/language_icons/javascript.svg", title: "JavaScript" },
      { image: "./images/language_icons/gatsby.svg", title: "Gatsby" },
      { image: "./images/language_icons/vscode.svg", title: "VS Code" },
      { image: "./images/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "https://github.com/heuerleon/leonheuer-portfolio",
    desc: "My personal portfolio website you're currently looking at.",
  },
  {
    id: 1,
    image: "./images/projects/osu-backup.jpg",
    title: "osu!backup",
    langs: [
      { image: "./images/language_icons/csharp.svg", title: "C#" },
      { image: "./images/language_icons/vs.svg", title: "Visual Studio" },
    ],
    source: "https://github.com/heuerleon/osu-backup",
    desc: 'GUI based backupper for the game "osu!". Allows exporting you local player data and importing it conveniently on another machine. ',
  },
  {
    id: 2,
    image: "./images/projects/sc-islands.jpg",
    title: "SkyCave Island System",
    langs: [
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA" },
      { image: "./images/language_icons/mongodb.svg", title: "MongoDB" },
    ],
    source: "https://github.com/skycavemc/island-system",
    desc: "An island system for the Minecraft server SkyCave. Allows creation and management of protected Islands with their own regions, members etc.",
  },
];

const projectsDefault = [
  "SkyCave JobSystem",
  "MC GUI API",
  "SkyCave website",
  "WhatsFlat",
  "Passman",
];

let projects = [
  {
    image: "./images/projects/sc-jobs.jpg",
    title: "SkyCave JobSystem",
    langs: [
      { image: "./images/language_icons/kotlin.svg", title: "Kotlin" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ" },
      { image: "./images/language_icons/mongodb.svg", title: "MongoDB" },
    ],
    source: "https://github.com/skycavemc/JobSystem",
    desc: "Plugin for the Minecraft Server SkyCave, providing Jobs with different advantages.",
  },
  {
    image: "./images/projects/project-3.jpg",
    title: "MC GUI API",
    langs: [
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA" },
    ],
    source: "https://github.com/heuerleon/mcguiapi",
    desc: "MC GUI API is an API for creating graphical user interfaces using inventories in minecraft.",
  },
  {
    image: "./images/projects/sc-website.jpg",
    title: "SkyCave website",
    langs: [
      { image: "./images/language_icons/typescript.svg", title: "TypeScript" },
      { image: "./images/language_icons/svelte.svg", title: "Svelte" },
      { image: "./images/language_icons/vscode.svg", title: "VS Code" },
      { image: "./images/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "https://github.com/skycavemc/skycave-website",
    desc: "Official website of the SkyCave Minecraft server.",
  },
  {
    image: "./images/projects/project-2.jpg",
    title: "WhatsFlat",
    langs: [
      { image: "./images/language_icons/csharp.svg", title: "C#" },
      { image: "./images/language_icons/vs.svg", title: "Visual Studio" },
      { image: "./images/language_icons/mongodb.svg", title: "MongoDB" },
    ],
    source: "https://github.com/heuerleon/whatsflat",
    desc: "WhatsFlat is a simple chat application. Still in development.",
  },
  {
    image: "./images/projects/project-4.jpg",
    title: "Passman",
    langs: [
      { image: "./images/language_icons/csharp.svg", title: "C#" },
      { image: "./images/language_icons/vs.svg", title: "Visual Studio" },
      { image: "./images/language_icons/postgresql.svg", title: "PostgreSQL" },
    ],
    source: "https://github.com/heuerleon/passman",
    desc: "Simple password manager that stores your passwords. Also provides a simple password generator. Still in development.",
  },
];

// markup
const IndexPage = () => {
  const [sendAttempted, setSendAttempted] = useState(false);
  const [contactSubject, setContactSubject] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [token, setToken] = useState(null);

  function handleSubjectChange(event) {
    let content = event.target.value;
    if (content.length > 100) {
      event.preventDefault();
      event.target.value = content.substring(0, 100);
    }
    setContactSubject(event.target.value);
  }

  function handleNameChange(event) {
    let content = event.target.value;
    if (content.length > 50) {
      event.preventDefault();
      event.target.value = content.substring(0, 50);
    }
    setContactName(event.target.value);
  }

  function handleEmailChange(event) {
    let content = event.target.value;
    if (content.length > 50) {
      event.preventDefault();
      event.target.value = content.substring(0, 50);
    }
    setContactEmail(event.target.value);
  }

  function handleMessageChange(event) {
    let content = event.target.value;
    if (content.length > 500) {
      event.preventDefault();
      event.target.value = content.substring(0, 500);
    }
    setContactMessage(event.target.value);
  }

  function sendMessage() {
    setSendAttempted(true);

    let all_fields_filled =
      contactSubject &&
      contactEmail &&
      isValidEmail(contactEmail) &&
      contactName &&
      contactMessage &&
      token;

    if (all_fields_filled) {
      let request = new XMLHttpRequest();
      request.open(
        "POST",
        "https://discord.com/api/webhooks/963429237572923503/_z-rM1YtWwpNEasTPInC96a0ZlaQzl-UO1uWXg_XrTu_D-IY9NFgXdd0RhKUW9KOKl0A"
      );
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
            navigate("/contact-success/");
          } else {
            alert(
              "Error processing your contact request. Please use another contact option."
            );
          }
        }
      };
      request.setRequestHeader("Accept", "application/json");
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => console.log(request.responseText);
      let body = JSON.stringify({
        content:
          "<@320518030243135490> someone has used the contact form on your website https://heuer.ovh",
        allowed_mentions: {
          parse: ["users"],
        },
        embeds: [
          {
            title: contactSubject,
            description: contactMessage,
            color: 959977,
            fields: [
              {
                name: "From:",
                value: contactName + " (" + contactEmail + ")",
              },
            ],
          },
        ],
      });
      request.send(body);
    }
  }

  function isValidEmail(email) {
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return regex.test(String(email).toLowerCase());
  }

  const [topParralax, setTopParralax] = useState("center");
  let topSectionStyle = {
    backgroundPosition: topParralax,
  };

  const scrollBefore = useRef(0);
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    scrollBefore.current = window.scrollY;
    handleScroll();
    setInterval(handleScroll, 10);
  }

  function handleScroll() {
    if (scrollBefore.current !== window.scrollY) {
      setTopParralax("center " + window.scrollY * 0.3 + "px");
      scrollBefore.current = window.scrollY;
    }
  }

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortFilter, setSortFilter] = useState(0);
  const [sortTitle, setSortTitle] = useState("Sort by (Default)");

  function sortProjects(event, index) {
    event.preventDefault();
    setSortFilter(index);
    setShowSortDropdown(false);
    switch (index) {
      case 1: {
        sortProjectsAZ();
        setSortTitle("Sort by (A to Z)");
        break;
      }
      case 2: {
        sortProjectsZA();
        setSortTitle("Sort by (Z to A)");
        break;
      }
      default: {
        sortProjectsDefault();
        setSortTitle("Sort by (Default)");
      }
    }
  }

  function sortProjectsAZ() {
    const titles = [];
    projects.forEach((element) => {
      titles.push(element.title);
    });
    titles.sort();
    updateProjects(titles);
  }

  function sortProjectsZA() {
    const titles = [];
    projects.forEach((element) => {
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
    projects.forEach((element) => {
      newProjects[newOrder.indexOf(element.title)] = element;
    });
    projects = newProjects;
  }

  return (
    <Layout>
      <section
        className="alt-section-dark full-height y-axis-centered"
        id="top"
        style={topSectionStyle}
      >
        <div className="container">
          <div className="row x-axis-space-between y-axis-centered">
            <div className="column-left col-2">
              <h3 className="headline-prefix typewriter">
                <TypeIt
                  options={{
                    strings: [
                      "Front end developer",
                      "Linux server administrator",
                      "Java & Kotlin developer",
                      "Gaming enthusiast",
                      "Computer hardware hobbyist",
                    ],
                    loop: true,
                    speed: 50,
                    deleteSpeed: 25,
                    nextStringDelay: [1500, 100],
                    lifeLike: false,
                    cursor: false,
                    breakLines: false,
                    waitUntilVisible: true,
                    html: false,
                  }}
                />
              </h3>
              <h1>Leon Heuer</h1>
              <p className="p-no-margin">
                My name is Leon Heuer and I welcome you to my personal website.
                I am a 17 years old software developer from Germany.
              </p>
              <div className="social-media-container">
                <a
                  href="https://github.com/heuerleon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/heuerleon/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonheuer/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a href="#about" className="btn-primary">
                  <span>Learn More</span>
                </a>
                <a href="#projects" className="btn-alt">
                  <span>View my work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down" aria-label="scroll-down">
          <span></span>
        </a>
      </section>

      <section className="padding-section" id="about">
        <div className="container">
          <div className="row row-reversed padding-row y-axis-centered nowrap">
            <div className="column-min col-margin">
              <img
                src={`./images/leon-heuer-2-min.jpg`}
                id="about-me-img"
                alt="Leon Heuer"
              ></img>
            </div>
            <div className="column-min col-margin">
              <h1>About Me</h1>
              <p>
                My name is Leon Heuer and I am a software developer at the age
                of 17, programming for 7 years now. I am actively writing
                desktop applications with C# and server-side mods for Minecraft
                with Java and Kotlin, utilizing MongoDB as database management
                system. I also have experience with the scripting languages
                JavaScript and Python, as well as the frontend library React and
                the framework Svelte.
              </p>
              <p>
                At the moment, I am doing a dual study in applied computer
                science at{" "}
                <a href="https://www.otto.de/" target="_blank" rel="noreferrer">
                  OTTO
                </a>{" "}
                where I currently work on the OTTO App. In my free time, I
                develop server-side mods for a{" "}
                <a
                  href="https://www.minecraft.net/en-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Minecraft
                </a>{" "}
                server called{" "}
                <a
                  href="https://github.com/skycavemc"
                  target="_blank"
                  rel="noreferrer"
                >
                  SkyCave
                </a>
                , where thousands of players have already used what I developed.
              </p>
              <p>
                If you're interested in what I do, feel free to take a look at
                my{" "}
                <a
                  href="https://github.com/heuerleon?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repositories
                </a>{" "}
                or my <a href="#featured">projects</a> listed below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-section alt-section" id="what-i-do">
        <div className="container">
          <div className="row">
            <div className="column-centered">
              <h1>What I do</h1>
            </div>
          </div>
          <div className="row padding-row x-axis-space-between y-axis-stretched">
            {projectCats.map((projectCat) => (
              <div className="column-centered col-4">
                <div className="box">
                  <img
                    src={`${projectCat.image}`}
                    alt={projectCat.h2 + "icon"}
                    className="small-img"
                  />
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
          <div className="row">
            <div className="column-centered">
              <h1>Featured Projects</h1>
            </div>
          </div>
          <div className="row padding-row x-axis-space-between y-axis-stretched">
            <div className="column">
              {featured.map((project) => (
                <div
                  className={`featured ${
                    project.id % 2 === 1 ? "featured-right" : ""
                  }`}
                >
                  <div className="image-wrapper">
                    <img
                      src={`${project.image}`}
                      alt={project.title}
                      className="featured-thumbnail"
                    />
                  </div>
                  <div className="featured-inner">
                    <h1>{project.title}</h1>
                    <h3>Description</h3>
                    <p>{project.desc}</p>
                    <h3>Built with</h3>
                    <div className="icon-container">
                      {project.langs.map((icon) => (
                        <LanguageIcon icon={icon} />
                      ))}
                    </div>
                    <a
                      href={project.source}
                      className="featured-source"
                      target="_blank"
                      rel="noreferrer"
                      title="View on GitHub"
                      aria-label="source"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="padding-section alt-section" id="projects">
        <div className="container">
          <div className="row">
            <div className="column-left">
              <h1>More Projects</h1>
              <div className="dropdown">
                <button
                  className="dropdown-title"
                  onClick={() => setShowSortDropdown((it) => !it)}
                >
                  {sortTitle}
                </button>
                <ul
                  className={`dropdown-list ${
                    showSortDropdown ? "dropdown-visible" : ""
                  }`}
                >
                  <li>
                    <button
                      className={sortFilter === 0 ? "selected" : ""}
                      onClick={(event) => sortProjects(event, 0)}
                    >
                      Default
                    </button>
                  </li>
                  <li>
                    <button
                      className={sortFilter === 1 ? "selected" : ""}
                      onClick={(event) => sortProjects(event, 1)}
                    >
                      A to Z
                    </button>
                  </li>
                  <li>
                    <button
                      className={sortFilter === 2 ? "selected" : ""}
                      onClick={(event) => sortProjects(event, 2)}
                    >
                      Z to A
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row padding-row y-axis-stretched">
            {projects.map((project) => (
              <div className="column-centered col-3">
                <div className="box box-image">
                  <h1>{project.title}</h1>
                  <img
                    src={`${project.image}`}
                    alt={project.title}
                    className="box-thumbnail"
                  />
                  <div className="box-inner">
                    <h3>Description</h3>
                    <p>{project.desc}</p>
                    <h3>Built with</h3>
                    <div className="icon-container">
                      {project.langs.map((icon) => (
                        <LanguageIcon icon={icon} />
                      ))}
                    </div>
                    <a
                      href={project.source}
                      className="box-source"
                      target="_blank"
                      rel="noreferrer"
                      title="View on GitHub"
                      aria-label="source"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="column-min">
              <h1>Contact Me</h1>
            </div>
          </div>
          <div className="row row-reversed nowrap">
            <div className="column-min row-on-smaller-screens">
              <div className="contact-option">
                <i className="fas fa-envelope-open-text double-line-icon"></i>
                <div>
                  <span className="bold">leon(at)heuer.ovh</span>
                  <span className="light">Send me an email</span>
                </div>
              </div>
              <div className="contact-option">
                <i className="fab fa-discord double-line-icon"></i>
                <div>
                  <span className="bold">haku#7136</span>
                  <span className="light">Add me on discord</span>
                </div>
              </div>
            </div>
            <div className="column-min">
              <div className="row row-slim">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Subject"
                    onChange={(event) => handleSubjectChange(event)}
                    className={
                      !contactSubject && sendAttempted ? "empty-input" : ""
                    }
                  />
                  <span>{contactSubject.length}/100</span>
                </div>

                <div className="input-wrapper half-input">
                  <input
                    type="text"
                    placeholder="Your email address"
                    onChange={(event) => handleEmailChange(event)}
                    className={`${
                      (!contactEmail && sendAttempted) ||
                      (!isValidEmail(contactEmail) && sendAttempted)
                        ? "empty-input"
                        : ""
                    }`}
                  />
                  <span>{contactEmail.length}/50</span>
                </div>

                <div className="input-wrapper half-input">
                  <input
                    type="text"
                    placeholder="Your name"
                    onChange={(event) => handleNameChange(event)}
                    className={`${
                      !contactName && sendAttempted ? "empty-input" : ""
                    }`}
                  />
                  <span>{contactName.length}/50</span>
                </div>

                <div className="input-wrapper">
                  <textarea
                    placeholder="Enter message"
                    onChange={(event) => handleMessageChange(event)}
                    className={
                      !contactMessage && sendAttempted ? "empty-input" : ""
                    }
                  ></textarea>
                  <span>{contactMessage.length}/500</span>
                </div>

                <div className="captcha-wrapper">
                  <HCaptcha
                    sitekey="dc87f7c2-9f10-4b84-9faf-45114d2e2285"
                    onVerify={setToken}
                  />
                  <span
                    className={`error-message ${
                      token || !sendAttempted ? "hidden" : ""
                    }`}
                  >
                    You have to complete the captcha.
                  </span>
                  <span
                    className={`error-message ${
                      (contactEmail &&
                        contactName &&
                        contactSubject &&
                        contactMessage) ||
                      !sendAttempted
                        ? "hidden"
                        : ""
                    }`}
                  >
                    Please fill in all fields.
                  </span>
                  <span
                    className={`error-message ${
                      isValidEmail(contactEmail) || !sendAttempted
                        ? "hidden"
                        : ""
                    }`}
                  >
                    Please enter a valid E-Mail address.
                  </span>
                </div>
              </div>
              <div className="row row-slim">
                <div className="button-container">
                  <button
                    className="btn-primary"
                    onClick={(event) => sendMessage(event)}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
