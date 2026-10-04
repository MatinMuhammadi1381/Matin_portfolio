import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

const entries = [
  { key: "freelance" },
  { key: "internship" },
  { key: "storeOwner" },
  { key: "learning" },
];

export const ExperienceSection = () => {
  const { language } = useLanguage();
  const t = copy[language].experience;

  return (
    <section
      className="section section--tinted section-anchor"
      id="experience"
    >
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
        </div>

        <div className="experience-list">
          {entries.map(({ key }) => (
            <article className="experience-item" key={key}>
              <div className="experience-item__icon">
                {key === "learning" ? (
                  <GraduationCap size={19} aria-hidden="true" />
                ) : (
                  <BriefcaseBusiness size={19} aria-hidden="true" />
                )}
              </div>
              <div className="experience-item__body">
                <div className="experience-item__heading">
                  <h3>{t[`${key}Title`]}</h3>
                  <span>{t[`${key}Date`]}</span>
                </div>
                {key !== "learning" && (
                  <p className="experience-item__meta">{t[`${key}Meta`]}</p>
                )}
                <p className="experience-item__description">
                  {t[`${key}Description`]}
                </p>
              </div>
              {key === "learning" && (
                <Sparkles
                  className="experience-item__spark"
                  size={16}
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
