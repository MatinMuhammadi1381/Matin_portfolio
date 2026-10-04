import { ArrowUpRight, Code2, Github, Globe2 } from "lucide-react";
import { copy, getTechnologyIcon, projects } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

const ProjectActions = ({ project, title, t }) => (
  <div className="project-actions">
    <a
      className="project-action"
      href={project.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${t.github}: ${title}`}
    >
      <Github size={16} aria-hidden="true" />
      <span>{t.github}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
    {project.demo ? (
      <a
        className="project-action project-action--quiet"
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        aria-label={`${t.demo}: ${title}`}
      >
        <Globe2 size={16} aria-hidden="true" />
        <span>{t.demo}</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    ) : (
      <span className="project-action project-action--disabled">
        <span>{t.noDemo}</span>
      </span>
    )}
  </div>
);

const TechnologyList = ({ technologies, label }) => (
  <ul className="technology-list" aria-label={label}>
    {technologies.map((technology) => (
      <li key={technology}>
        {getTechnologyIcon(technology) ? (
          <img
            src={getTechnologyIcon(technology)}
            alt=""
            aria-hidden="true"
            width="15"
            height="15"
            loading="lazy"
          />
        ) : (
          <Code2 size={15} aria-hidden="true" />
        )}
        <span>{technology}</span>
      </li>
    ))}
  </ul>
);

export const ProjectSection = () => {
  const { language } = useLanguage();
  const t = copy[language].projects;
  const featured = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      className="section section--tinted section-anchor"
      id="projects"
    >
      <div className="site-container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <div className="section-heading__aside">
            <p className="section-heading__note">{t.intro}</p>
            <span className="project-count">
              <strong>{projects.length}</strong> {t.countLabel}
            </span>
          </div>
        </div>

        {featured && (
          <article className="featured-project">
            <div className="featured-project__visual">
              <img
                src={featured.image}
                alt={featured.alt[language]}
                loading="lazy"
                width="1440"
                height="900"
                onError={(event) => {
                  event.currentTarget.src = featured.image.replace(
                    "docs/screenshots/",
                    ""
                  );
                }}
              />
              {featured.imageNote && (
                <span className="image-note">
                  {t.previewNotes[featured.imageNote]}
                </span>
              )}
              <span className="featured-project__index" aria-hidden="true">
                01
              </span>
            </div>
            <div className="featured-project__content">
              <p className="project-kicker">
                <span className="project-featured-mark" aria-hidden="true" />
                {t.featuredLabel}
                <span className="project-kicker__separator">·</span>
                {t.projectTypes[featured.type]}
              </p>
              <h3>{featured.title[language]}</h3>
              <p className="featured-project__description">
                {featured.description[language]}
              </p>
              <p className="featured-project__details">
                {featured.details[language]}
              </p>
              <TechnologyList
                technologies={featured.technologies}
                label={t.technologiesLabel}
              />
              <ProjectActions
                project={featured}
                title={featured.title[language]}
                t={t}
              />
            </div>
          </article>
        )}

        <div className="projects-subheading">
          <h3>{t.allLabel}</h3>
          <span>02 / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="project-grid">
          {otherProjects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={project.alt[language]}
                  loading="lazy"
                  width="1440"
                  height="900"
                  onError={(event) => {
                    event.currentTarget.src = project.image.replace(
                      "docs/screenshots/",
                      ""
                    );
                  }}
                />
                {project.imageNote && (
                  <span className="image-note">
                    {t.previewNotes[project.imageNote]}
                  </span>
                )}
                <span className="project-card__index" aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="project-card__content">
                <p className="project-card__type">
                  {t.projectTypes[project.type]}
                </p>
                <h4>{project.title[language]}</h4>
                <p className="project-card__description">
                  {project.description[language]}
                </p>
                <details className="project-details">
                  <summary>
                    {language === "fa" ? "دربارهٔ پروژه" : "Project notes"}
                  </summary>
                  <p>{project.details[language]}</p>
                </details>
                <TechnologyList
                  technologies={project.technologies}
                  label={t.technologiesLabel}
                />
                <ProjectActions
                  project={project}
                  title={project.title[language]}
                  t={t}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
