import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  projectsDocs,
  resume,
  graph,
  study,
  study2,
  java,
  spring,
  actors,
  personal,
  remoview,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Go to Github",
    icon: web,
    link: "https://github.com/gyeongseo944",
  },
  {
    title: "Go to Notion",
    icon: mobile,
    link: "https://www.notion.so/gyeongs/Developer-1cc5e238a3074676a39c5d233f4d239e",
  },
  {
    title: "Project Documents",
    icon: backend,
    link: projectsDocs,
  },
  {
    title: "See a resume",
    icon: creator,
    link: resume,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "자바기반 스마트 웹&콘텐츠 개발자 양성과정",
    company_name: "구디아카데미",
    icon: study,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Aug 2020",
    points: [
      "Frontend Development: Html,CSS,Javascript(J.query)를 이용한 화면 개발.",
      "RDBMS : Oracle, SQL을 활용해 데이터베이스를 관리.",
      "Backend Development: Java, JSP, SPRINGFramework를 활용한 웹 서버 개발.",
      "Java, SpringFramework, JSP, Oracle, SQL, Javascript, jQuery, CSS, HTML 등을 사용 및 학습.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "브이알에듀 / 연구원",
    icon: graph,
    iconBg: "#383E56",
    date: "Jun 2021 - Jan 2022",
    points: [
      "데이터 시각화 정부과제 개발 프로젝트 참여",
      "Node.js, MariaDB, nunjucks등을 기반으로 한 웹 애플리케이션 개발.",
      "Socket.io를 활용한 실시간 데이터 통신.",
      "Chart.js를 활용한 데이터 가공 및 시각화.",
    ],
  },
  {
    title: "소프트웨어 엔지니어링 부트캠프(프론트엔드 과정)",
    company_name: "Code States",
    icon: study2,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Apr 2023",
    points: [
      "사용자 중심의 UI/UX를 고려한 서비스 개발.",
      "반응형 웹에 대한 이해 및 개선 경험",
      "JS기반 알고리즘 및 자료구조 예제 풀이",
      "Github actions를 이용한 빌드 및 AWS배포 자동화 구축 경험",
      "React를 사용한 CSR 어플리케이션 구현",
      "Redux를 통한 전역 상태 관리",
      "Git을 이용한 협업 등 웹 개발의 프론트엔드 직무 역할 강화",
    ],
  },
];

const projects = [
  {
    name: "Personal Web Page",
    description:
      "React를 기반으로 한 개인 포트폴리오 홈페이지. animate.css를 주로 활용하여 동적인 페이지 구현에 초점을 두고 진행",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "Animate.css",
        color: "blue-text-gradient",
      },
    ],
    image: personal,
    source_code_link: "https://github.com/gyeongseo944/personal_webpage",
    service_link: "https://personal-webpage-beryl.vercel.app/",
  },
  {
    name: "Actors Academy",
    description:
      "학원 소개 웹 페이지로 React를 기반으로 개발. 서버통신이 없는 싱글 웹 페이지로 화면과 인터렉션에 초점을 두고 진행",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
    ],
    image: actors,
    source_code_link: "https://github.com/gyeongseo944/actorsAcademy",
    service_link: "https://actors-academy.vercel.app/",
  },
  {
    name: "Remoview",
    description:
      "영화 커뮤니티 플랫폼으로 영화 openAPI와 Node.js, MongoDB, React를 기반으로 개발. 다양한 영화 정보 데이터를 확인하고 영화에 평가와 댓글을 남길 수 있는 커뮤니티 플랫폼. 전 배포 환경이었던 heroku 유료화로 인해 현재 서비스 링크 중지됨 - 추후 수정 예정",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: remoview,
    source_code_link: "https://github.com/gyeongseo944/remoview",
    service_link: "",
  },
];

export { services, technologies, experiences, projects, navLinks };
