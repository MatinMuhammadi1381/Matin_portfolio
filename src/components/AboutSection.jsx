import { ArrowUpRight, Check } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

export const AboutSection = () => {
  const { language } = useLanguage();
  const t = copy[language].about;

  return (
    <section className="section section-anchor" id="about">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="text-link" href="#experience">
              {language === "fa" ? "مسیر حرفه‌ای من" : "My professional journey"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="about-aside">
            <div className="about-focus">
              <h3>{t.focusLabel}</h3>
              <ul>
                {t.focus.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="education-card">
              <span className="education-card__label">{t.educationLabel}</span>
              <strong>{t.education}</strong>
              <span>{t.school}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
