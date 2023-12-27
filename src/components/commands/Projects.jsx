import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Project.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2"]) ? <Usage cmd="projects" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>These are some of my projects:</ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "EconomiaBack",
    desc: "Creation of apis of a project to calculate amortization rates",
    url: "https://github.com/LennyMA/economiaback",
  },
  {
    id: 2,
    title: "Simulador de Tienda",
    desc: "Simulator of a store made in Java, all by console and with static lists with user roles.",
    url: "https://github.com/LennyMA/ProyectoMCS",
  },
  {
    id: 3,
    title: "Estructura de Datos",
    desc: "Data structure course with Python language.",
    url: "https://github.com/LennyMA/estructuraDDatos",
  },
  {
    id: 4,
    title: "CRUD CON PHP",
    desc: "Basic contact CRUD using PHP, Bootstrap and environment variables with composer.",
    url: "https://github.com/LennyMA/CRUDPHP",
  },
  {
    id: 5,
    title: "API REST",
    desc: "Creation of a REST API using Javascript, Node js, express and MySQL.",
    url: "https://github.com/LennyMA/restApi",
  },
  {
    id: 6,
    title: "Trabajo de aplicaciones Web",
    desc: "Car repair business manager using angular, web application, front end only.",
    url: "https://github.com/LennyMA/appWEBAngular",
  },
  {
    id: 7,
    title: "Gestor Consultorio Médico",
    desc: "Front end of a web application for the management of a medical office using Angular and TypeScript.",
    url: "https://github.com/LennyMA/proyectoAppWebFront",
  },
  {
    id: 8,
    title: "Back del Consultorio Médico",
    desc: "Back end of the medical office.",
    url: "https://github.com/LennyMA/proyectoAppWebBack",
  },
];

export default Projects;
