import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const carouselVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const projects = {
  ar: [
    {
      category: "مياه نظيفة",
      title: "مياه نقية",
      description: "توفير مياه صالحة للشرب",
      percent: 48,
      raised: "48,000",
      goal: "100,000",
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "إغاثة عاجلة",
      title: "السلة الغذائية",
      description: "نوفر الغذاء للأسر المتضررة",
      percent: 64,
      raised: "96,000",
      goal: "150,000",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "مأوى للنازحين",
      title: "مأوى للنازحين",
      description: "توفير خيام ومستلزمات الإيواء",
      percent: 72,
      raised: "120,000",
      goal: "166,000",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "تعليم",
      title: "قرطاسية مدرسية",
      description: "توفير الحقائب والقرطاسية للأطفال",
      percent: 56,
      raised: "84,000",
      goal: "150,000",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "كفالة",
      title: "كفالة أيتام",
      description: "دعم الأيتام ورعايتهم في احتياجاتهم",
      percent: 61,
      raised: "122,000",
      goal: "200,000",
      image:
        "https://images.unsplash.com/photo-1489493585363-d694e3e0daf3?auto=format&fit=crop&w=800&q=80",
    },
  ],
  en: [
    {
      category: "Clean water",
      title: "Pure water",
      description: "Providing safe drinking water",
      percent: 48,
      raised: "48,000",
      goal: "100,000",
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Emergency relief",
      title: "Food basket",
      description: "Providing food for affected families",
      percent: 64,
      raised: "96,000",
      goal: "150,000",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Shelter for displaced people",
      title: "Emergency shelter",
      description: "Providing tents and shelter supplies",
      percent: 72,
      raised: "120,000",
      goal: "166,000",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Education",
      title: "School supplies",
      description: "Providing bags and school supplies for children",
      percent: 56,
      raised: "84,000",
      goal: "150,000",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Sponsorship",
      title: "Orphan sponsorship",
      description: "Supporting orphans with their everyday needs",
      percent: 61,
      raised: "122,000",
      goal: "200,000",
      image:
        "https://images.unsplash.com/photo-1489493585363-d694e3e0daf3?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default function ProjectsSection({ language }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const dragState = useRef(null);
  const scrollFrame = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const title =
    language === "ar" ? "أبرز المشاريع" : "Our leading projects in Gaza";
  const projectList = projects[language];
  const pageCount = Math.ceil(projectList.length / cardsPerPage);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const nextCardsPerPage =
        window.innerWidth <= 760 ? 1 : window.innerWidth <= 1000 ? 2 : 3;
      setCardsPerPage(nextCardsPerPage);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    setActivePage(0);
  }, [cardsPerPage, language]);

  useEffect(
    () => () => {
      if (scrollFrame.current) cancelAnimationFrame(scrollFrame.current);
    },
    []
  );

  const updateActiveProject = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (scrollFrame.current) return;
    scrollFrame.current = requestAnimationFrame(() => {
      const carouselRect = carousel.getBoundingClientRect();
      const cards = [...carousel.querySelectorAll(".project-card")];
      const isRtl = language === "ar";
      const closest = cards.reduce(
        (result, card, index) => {
          const cardRect = card.getBoundingClientRect();
          const distance = Math.abs(
            isRtl
              ? carouselRect.right - cardRect.right
              : cardRect.left - carouselRect.left
          );
          return distance < result.distance ? { index, distance } : result;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      );

      setActivePage(Math.floor(closest.index / cardsPerPage));
      scrollFrame.current = null;
    });
  };

  const scrollToPage = (pageIndex) => {
    const projectIndex = pageIndex * cardsPerPage;
    carouselRef.current
      ?.querySelectorAll(".project-card")
      [projectIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
  };

  const handlePointerDown = (event) => {
    dragState.current = { pointerId: event.pointerId, lastX: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    event.currentTarget.scrollBy({
      left: drag.lastX - event.clientX,
      behavior: "auto",
    });
    drag.lastX = event.clientX;
  };

  const handlePointerEnd = (event) => {
    if (dragState.current?.pointerId === event.pointerId)
      dragState.current = null;
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-column">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <motion.div
          className="project-carousel"
          ref={carouselRef}
          variants={carouselVariants}
          initial="hidden"
          animate={hasEnteredViewport ? "visible" : "hidden"}
          onScroll={updateActiveProject}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {projectList.map((project) => (
            <ProjectCard
              project={project}
              language={language}
              variants={projectVariants}
              key={project.title}
            />
          ))}
        </motion.div>
        <div
          className="slider-dots"
          aria-label={
            language === "ar" ? "التنقل بين المشاريع" : "Project navigation"
          }
        >
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              aria-label={`${
                language === "ar" ? "صفحة المشاريع" : "Project page"
              } ${index + 1}`}
              aria-current={activePage === index ? "page" : undefined}
              className={activePage === index ? "active" : ""}
              key={index}
              onClick={() => scrollToPage(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
