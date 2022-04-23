import React, { useRef, useState } from "react";
import TypeIt from "typeit-react";
import Layout from "../components/layout.js";
import LanguageIcon from "../components/languageIcon.js";

const projectCats = [
  {
    image: "./images/desktop.png",
    h2: "Server-sided Applications",
    p: "Development of backend infrastructures",
  },
  {
    image: "./images/web.png",
    h2: "Web Development",
    p: "Sleek and responsive websites and web apps",
  },
  {
    image: "./images/game.png",
    h2: "Minecraft Development",
    p: "Server-sided mods enhancing gameplay",
  },
  {
    image: "./images/database.png",
    h2: "Database Engineering",
    p: "Creation and management of reliable database systems",
  },
];

const featured = [
  {
    id: 0,
    image: "./images/projects/project-3.jpg",
    title: "My portfolio",
    langs: [
      { image: "./images/language_icons/typescript.svg", title: "TypeScript" },
      { image: "./images/language_icons/svelte.svg", title: "Svelte" },
      { image: "./images/language_icons/vscode.svg", title: "VS Code" },
      { image: "./images/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "/",
    desc: "My personal portfolio website you're currently looking at.",
  },
  {
    id: 1,
    image: "./images/projects/project-1.jpg",
    title: "MC GUI API",
    langs: [
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA" },
    ],
    source: "/",
    desc: "MC GUI API is an API for creating graphical user interfaces in the video game Minecraft.",
  },
  {
    id: 2,
    image: "./images/projects/project-2.jpg",
    title: "Passman",
    langs: [
      { image: "./images/language_icons/csharp.svg", title: "C#" },
      { image: "./images/language_icons/postgresql.svg", title: "PostgreSQL" },
      { image: "./images/language_icons/rider.svg", title: "Rider" },
    ],
    source: "/",
    desc: "A desktop application that stores passwords safely.",
  },
];

const projectsDefault = [
  "My portfolio",
  "SkyCave website",
  "Minecraft plugins",
  "LTS Store",
  "Sudoku Solver",
  "WhatsFlat",
  "PasswordGen",
];

let projects = [
  {
    image: "./images/projects/project-3.jpg",
    title: "My portfolio",
    langs: [
      { image: "./images/language_icons/typescript.svg", title: "TypeScript" },
      { image: "./images/language_icons/svelte.svg", title: "Svelte" },
      { image: "./images/language_icons/vscode.svg", title: "VS Code" },
      { image: "./images/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "/",
    desc: "My personal portfolio website you're currently looking at.",
  },
  {
    image: "./images/projects/project-1.jpg",
    title: "SkyCave website",
    langs: [
      { image: "./images/language_icons/typescript.svg", title: "TypeScript" },
      { image: "./images/language_icons/svelte.svg", title: "Svelte" },
      { image: "./images/language_icons/vscode.svg", title: "VS Code" },
      { image: "./images/language_icons/sass.svg", title: "SASS/SCSS" },
    ],
    source: "/",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  },
  {
    image: "./images/projects/project-2.jpg",
    title: "Minecraft plugins",
    langs: [
      { image: "./images/language_icons/kotlin.svg", title: "Kotlin" },
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ IDEA" },
      { image: "./images/language_icons/mongodb.svg", title: "MongoDB" },
    ],
    source: "/",
    desc: "A collection of Minecraft plugins I developed for the SkyCave Server.",
  },
  {
    image: "./images/projects/project-4.jpg",
    title: "LTS Store",
    langs: [
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/spring.svg", title: "Spring" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ" },
      { image: "./images/language_icons/postgresql.svg", title: "PostgreSQL" },
      { image: "./images/language_icons/javascript.svg", title: "JavaScript" },
      { image: "./images/language_icons/react.svg", title: "React" },
    ],
    source: "/",
    desc: "An online shopping platform I'm currently developing for some friends.",
  },
  {
    image: "./images/projects/project-2.jpg",
    title: "Sudoku Solver",
    langs: [{ image: "./images/language_icons/csharp.svg", title: "C#" }],
    source: "/",
    desc: "A tool to solve any pattern of a Sudoku riddle.",
  },
  {
    image: "./images/projects/project-3.jpg",
    title: "WhatsFlat",
    langs: [
      { image: "./images/language_icons/java.svg", title: "Java" },
      { image: "./images/language_icons/intellij.svg", title: "IntelliJ" },
      { image: "./images/language_icons/rabbitmq.svg", title: "RabbitMQ" },
    ],
    source: "/",
    desc: "A messaging client built using RabbitMQ.",
  },
];

// markup
const IndexPage = () => {
  const [sendAttempted, setSendAttempted] = useState(false);
  const [contactSubject, setContactSubject] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  function sendMessage(event) {
    event.preventDefault();
    setSendAttempted(true);
    setCaptchaSuccess(true);

    let all_fields_filled =
      contactSubject !== "" &&
      contactEmail !== "" &&
      contactName !== "" &&
      contactMessage !== "" &&
      captchaSuccess;

    if (all_fields_filled) {
      let request = new XMLHttpRequest();
      request.open(
        "POST",
        "https://discord.com/api/webhooks/963429237572923503/_z-rM1YtWwpNEasTPInC96a0ZlaQzl-UO1uWXg_XrTu_D-IY9NFgXdd0RhKUW9KOKl0A"
      );
      request.setRequestHeader("Accept", "application/json");
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = () => console.log(request.responseText);
      let body = JSON.stringify({
        content:
          "<@320518030243135490> someone has used the contact form on your website https://leonheuer.de",
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

  const [captchaSuccess, setCaptchaSuccess] = useState(false);

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
                      "Hobby game developer",
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
                When I was only 10 years old, I started learning programming and
                the basics of web development. I am actively writing desktop
                applications with C# and server-side mods for Minecraft with
                Java and Kotlin, utilizing MongoDB as database management
                system. I also have experience with the scripting languages
                JavaScript and Python, as well as the frontend frameworks React
                and Svelte.
              </p>
              <p>
                At the moment, I am about to graduate from a high school in
                Germany and looking for dual study opportunities in computer
                science. In my free time, I develop server-side mods for a{" "}
                <a
                  href="https://www.minecraft.net/en-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Minecraft
                </a>
                {" "}server called{" "}
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
          {featured.map((project) => (
            <div className="row padding-row x-axis-space-between y-axis-stretched">
              <div className="column">
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
              </div>
            </div>
          ))}
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
          <div className="row padding-row x-axis-space-between y-axis-stretched">
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
            <div className="column-left">
              <h1>Contact Me</h1>
            </div>
          </div>
          <div className="row row-reversed">
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
                  <a
                    href="https://www.linkedin.com/in/leonheuer/"
                    target="_blank"
                    rel="noreferrer"
                    className="bold"
                  >
                    LinkedIn/leonheuer
                  </a>
                  <span className="light">Send me a direct message</span>
                </div>
              </div>
            </div>
            <div className="column-left col-3-double">
              <div className="row row-slim">
                <input
                  type="text"
                  placeholder="Subject"
                  onChange={(event) => setContactSubject(event.target.value)}
                  className={
                    !contactSubject && sendAttempted ? "empty-input" : ""
                  }
                />

                <input
                  type="text"
                  placeholder="Your email address"
                  onChange={(event) => setContactEmail(event.target.value)}
                  className={`half-input ${
                    (!contactEmail && sendAttempted) ||
                    (!isValidEmail(contactEmail) && sendAttempted)
                      ? "empty-input"
                      : ""
                  }`}
                />

                <input
                  type="text"
                  placeholder="Your name"
                  onChange={(event) => setContactName(event.target.value)}
                  className={`half-input ${
                    !contactName && sendAttempted ? "empty-input" : ""
                  }`}
                />

                <textarea
                  placeholder="Enter message"
                  onChange={(event) => setContactMessage(event.target.value)}
                  className={
                    !contactMessage && sendAttempted ? "empty-input" : ""
                  }
                ></textarea>
              </div>
              <div className="row row-slim">
                <div
                  className="h-captcha"
                  data-sitekey="dc87f7c2-9f10-4b84-9faf-45114d2e2285"
                  data-callback="setSuccess"
                ></div>
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
