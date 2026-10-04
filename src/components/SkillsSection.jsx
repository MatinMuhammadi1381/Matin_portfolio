import { ArrowUpRight, Code2 } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

export const SkillsSection = () => {
  const { language } = useLanguage();
  const t = copy[language].skills;

  return (
    <section className="section section-anchor" id="skills">
      <div className="site-container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p className="section-heading__note">{t.intro}</p>
        </div>

        <div className="skill-groups">
          {t.groups.map((group, index) => (
            <article className="skill-group" key={group.id}>
              <div className="skill-group__header">
                <span className="skill-group__number">
                  0{index + 1}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul className="skill-list">
                {group.items.map(({ name, icon }) => (
                  <li className="skill-item" key={name}>
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width="19"
                        height="19"
                        loading="lazy"
                      />
                    ) : (
                      <Code2 size={19} aria-hidden="true" />
                    )}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
