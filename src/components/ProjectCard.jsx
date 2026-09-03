import { motion } from "framer-motion";

export default function ProjectCard({ project, language, variants }) {
  const labels = language === "ar"
    ? { raised: "المحقق", goal: "الهدف", currency: "ر.س" }
    : { raised: "Raised", goal: "Goal", currency: "SAR" };

  return (
    <motion.article className="project-card" variants={variants}>
      <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
        <span className="category">{project.category}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="progress-label"><span>{project.percent}%</span></div>
        <div className="progress"><i style={{ width: `${project.percent}%` }} /></div>
        <div className="money">
          <span>{labels.raised} <b>{project.raised}</b> {labels.currency}</span>
          <span>{labels.goal} <b>{project.goal}</b> {labels.currency}</span>
        </div>
      </div>
    </motion.article>
  );
}
