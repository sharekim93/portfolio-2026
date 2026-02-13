export interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  href: string;
  featured?: boolean;
  label?: string;
  gradient: string;
  image?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  current?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "tistory" | "twitter";
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "github" | "tistory";
}

export const siteConfig = {
  name: "김나눔",
  role: "웹 개발자",
  url: "https://nanum.dev",
  email: "hello@nanum.dev",
  description:
    "IT HW 영업부터 대기업 서비스운영, 글로벌 프린터 기업, 상품화 서비스 플랫폼까지 — 고객 경험을 바탕으로 만족할 서비스를 개발하는 웹 개발자 김나눔의 포트폴리오입니다.",
};

export const projects: Project[] = [
  {
    title: "FAP VARS 솔루션 개발",
    company: "알티넷솔루션",
    period: "2025.06 ~ 2025.10",
    description:
      "부가가치 재판매 솔루션(VARS)의 프론트엔드 개발. jQuery 기반 레거시 환경에서 GSAP 애니메이션, D3.js·Chart.js 데이터 시각화를 구현하여 사용자 경험을 개선했습니다.",
    achievements: [
      "D3.js·Chart.js 기반 인터랙티브 대시보드 구현",
      "GSAP 애니메이션으로 페이지 전환 UX 개선",
      "jQuery 레거시 코드 구조 개선 및 유지보수성 향상",
    ],
    tags: ["jQuery", "GSAP", "D3.js", "Chart.js"],
    href: "#",
    featured: true,
    label: "최신 프로젝트",
    gradient: "from-accent/10 to-accent/5",
    image: "/projects/fap-ansible-dashboard.png",
  },
  {
    title: "파트너스용 웹앱 개발",
    company: "체카",
    period: "2024.11 ~ 2025.02",
    description:
      "중고차 상품화 서비스 플랫폼의 파트너사 전용 웹 애플리케이션 개발. 실시간 채팅(getStream) 및 디자인 시스템을 적용하여 파트너 협업 효율을 높였습니다.",
    achievements: [
      "getStream 기반 실시간 채팅 기능 구현",
      "Tanstack Query로 서버 상태 관리 최적화",
      "공통 디자인 시스템 컴포넌트 개발·적용",
    ],
    tags: ["React", "Tanstack Query", "getStream", "Design System"],
    href: "#",
    gradient: "from-primary/5 to-primary/[0.02]",
  },
  {
    title: "딜러용 웹앱 개발",
    company: "체카",
    period: "2024.08 ~ 2024.11",
    description:
      "중고차 딜러 전용 웹 애플리케이션 개발. 경매 참여, 차량 관리, 실시간 알림 등 딜러 업무에 필요한 핵심 기능을 React 기반으로 구현했습니다.",
    achievements: [
      "딜러 경매 참여 및 차량 관리 화면 개발",
      "실시간 알림 시스템 연동",
      "디자인 시스템 기반 일관된 UI 구현",
    ],
    tags: ["React", "Tanstack Query", "getStream", "Design System"],
    href: "#",
    gradient: "from-green-50 to-emerald-50/50",
  },
  {
    title: "레거시 웹 경매 사이트 포팅",
    company: "체카",
    period: "2024.07 ~ 2024.08",
    description:
      "기존 레거시 웹 경매 사이트를 React·Next.js(SSR)로 마이그레이션. SEO 최적화와 초기 로딩 성능을 개선했습니다.",
    achievements: [
      "레거시 코드를 React·Next.js(SSR)로 전환",
      "SSR 적용으로 SEO 및 초기 로딩 성능 개선",
    ],
    tags: ["React", "Next.js", "SSR"],
    href: "#",
    gradient: "from-purple-50 to-violet-50/50",
  },
  {
    title: "Label Artist Web",
    company: "빅솔론",
    period: "2022.03 ~ 2023.06",
    description:
      "글로벌 프린터 기업의 웹 기반 라벨 디자인 에디터 개발. TypeScript·React·Next.js로 구축하고 Vercel 배포, Sentry 모니터링을 적용했습니다.",
    achievements: [
      "웹 기반 라벨 디자인 에디터 프론트엔드 개발",
      "Vercel 배포 파이프라인 및 Sentry 에러 모니터링 구축",
      "TypeScript 도입으로 코드 안정성 향상",
    ],
    tags: ["TypeScript", "React", "Next.js", "Vercel", "Sentry"],
    href: "#",
    gradient: "from-orange-50 to-amber-50/50",
  },
  {
    title: "프린터 MDM / Web SDK / 하이브리드 SDK",
    company: "빅솔론",
    period: "2021.07 ~ 2023.06",
    description:
      "프린터 기기 관리(MDM) 시스템, Web SDK, 하이브리드 앱 SDK 개발. Java·Spring 백엔드와 React Native 모바일 클라이언트를 담당했습니다.",
    achievements: [
      "Java·Spring 기반 MDM 백엔드 개발",
      "React Native 하이브리드 앱 SDK 구현",
      "Web SDK API 설계 및 개발",
    ],
    tags: ["Java", "Spring", "React Native"],
    href: "#",
    gradient: "from-sky-50 to-cyan-50/50",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "C++"],
  frameworks: ["Next.js", "Spring", "Remix"],
  view: ["React", "React Native"],
  deploy: ["Vercel", "Tomcat"],
};

export const experience: Experience[] = [
  {
    title: "풀스택 개발자",
    company: "알티넷솔루션",
    period: "2025.06 ~ 현재",
    current: true,
  },
  {
    title: "프론트엔드 개발자",
    company: "체카",
    period: "2024.07 ~ 2025.02",
  },
  {
    title: "소프트웨어 개발자",
    company: "빅솔론",
    period: "2021.04 ~ 2023.07",
  },
  {
    title: "온라인 운영",
    company: "CJ프레시웨이",
    period: "2019.08 ~ 2020.09",
  },
  {
    title: "IBM HW 영업 인턴",
    company: "유니포인트",
    period: "2018.09 ~ 2018.12",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/sharekim93", icon: "github" },
  { label: "Tistory", href: "https://sharekim-dev.tistory.com/", icon: "tistory" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "sksyag@naver.com",
    href: "mailto:sksyag@naver.com",
    icon: "mail",
  },
  {
    label: "github.com/sharekim93",
    href: "https://github.com/sharekim93",
    icon: "github",
  },
  {
    label: "sharekim-dev.tistory.com",
    href: "https://sharekim-dev.tistory.com/",
    icon: "tistory",
  },
];

export const resume = {
  personalInfo: {
    name: "김나눔",
    title: "웹 개발자",
    subtitle: "Frontend • Backend • Prompt Engineering",
    email: "sksyag@naver.com",
    phone: "010-9887-6284",
    website: "sharekim.site",
    github: "github.com/sharekim93",
    tistory: "sharekim-dev.tistory.com",
  },
  summary:
    "IT 영업부터 서비스 운영, 글로벌 프린터 기업, 상품화 플랫폼까지 — 고객 경험을 아는 개발자가 만족할 서비스를 만듭니다.",
};
