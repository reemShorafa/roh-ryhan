import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const icons = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#123e32" strokeWidth="1.7">
      <path
        d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#123e32" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.9" fill="#123e32" />
    </svg>
  ),
  goals: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#123e32" strokeWidth="1.7">
      <path
        d="M6 21V4a1 1 0 0 1 1-1h10.2a.5.5 0 0 1 .4.8L15 8l2.6 4.2a.5.5 0 0 1-.4.8H7a1 1 0 0 0-1 1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const copy = {
  ar: {
    dir: "rtl",
    eyebrow: "من نحن",
    sectionTitle: "عن الجمعية",
    subtitle: "معا نحو مجتمع أكثر عطاء وإنسانية",
    items: [
      {
        key: "vision",
        title: "رؤيتنا",
        type: "text",
        content:
          "مجتمع إنساني متكافل، نضمن فيه الكرامة، ونعيش أفراده حياة كريمة وآمنة.",
      },
      {
        key: "mission",
        title: "رسالتنا",
        type: "text",
        content:
          "نظل بالخير إلى من هم في أمس الحاجة إليه بشفافية واحترافية، نساهم في تخفيف المعاناة وبناء مستقبل أفضل.",
      },
      {
        key: "goals",
        title: "أهدافنا",
        type: "list",
        content: [
          "تقديم المساعدات الإنسانية العاجلة.",
          "دعم المشاريع التنموية والمستدامة.",
          "تمكين الفئات وبناء قدراتهم.",
          "نشر قيم التكافل والتراحم في المجتمع.",
        ],
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "Who we are",
    sectionTitle: "About the association",
    subtitle: "Together toward a more generous and humane community",
    items: [
      {
        key: "vision",
        title: "Our Vision",
        type: "text",
        content:
          "A mutually supportive human community where dignity is guaranteed and people live safe, decent lives.",
      },
      {
        key: "mission",
        title: "Our Mission",
        type: "text",
        content:
          "We stay committed to those most in need with transparency and professionalism, helping ease suffering and build a better future.",
      },
      {
        key: "goals",
        title: "Our Goals",
        type: "list",
        content: [
          "Provide urgent humanitarian aid.",
          "Support sustainable development projects.",
          "Empower communities and build their capacities.",
          "Spread the values of solidarity and compassion in society.",
        ],
      },
    ],
  },
};

function MissionCard({ item }) {
  const cardRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className={`mvg-col mvg-col-${item.key}`}
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={hasEnteredViewport ? "visible" : "hidden"}
    >
      <motion.div className="mvg-icon-circle" variants={itemVariants}>
        {icons[item.key]}
      </motion.div>

      <motion.h3 className="mvg-title" variants={itemVariants}>
        {item.title}
      </motion.h3>

      {item.type === "text" ? (
        <motion.p className="mvg-text" variants={itemVariants}>
          {item.content}
        </motion.p>
      ) : (
        <motion.ul
          className="mvg-list"
          variants={listVariants}
          aria-label={item.title}
        >
          {item.content.map((line) => (
            <motion.li key={line} variants={itemVariants}>
              {line}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default function MissionVisionGoals({ language = "ar" }) {
  const t = copy[language];

  return (
    <section className="mvg-wrap" id="about" dir={t.dir}>
      <motion.div
        className="mvg-heading"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span>{t.eyebrow}</span>
        <h2>{t.sectionTitle}</h2>
        <p>{t.subtitle}</p>
      </motion.div>

      <div className="mvg-section">
        <div className="mvg-grid">
          {t.items.map((item) => (
            <MissionCard item={item} key={item.key} />
          ))}
        </div>
      </div>
    </section>
  );
}
