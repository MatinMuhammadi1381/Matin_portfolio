import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

const email = "matin.muhammadi.2001@gmail.com";
const github = "https://github.com/MatinMuhammadi1381";

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="hero section-anchor" id="hero">
      <div className="site-container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="hero__intro">{t.hero.intro}</p>
          <p className="hero__detail">{t.hero.detail}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              {t.hero.primary}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href={`${import.meta.env.BASE_URL}MatinMuhammadi.pdf`}
              download="MatinMuhammadi.pdf"
            >
              {t.hero.secondary}
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <MapPin size={15} aria-hidden="true" />
              {t.hero.location}
            </span>
            <span className="hero__availability">
              <span className="status-dot" aria-hidden="true" />
              {t.hero.available}
            </span>
          </div>

          <div className="hero__socials" aria-label={t.hero.socialLabel}>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail size={18} aria-hidden="true" />
              <span>{t.hero.emailSocial}</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="code-panel">
            <div className="code-panel__top">
              <div className="window-controls" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span
                className="code-panel__label"
                dir={language === "fa" ? "rtl" : "ltr"}
              >
                {t.hero.visualLabel}
              </span>
              <span className="code-panel__spacer" />
            </div>
            <div className="code-panel__workspace">
              <aside className="code-rail" aria-hidden="true">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
                <span>07</span>
              </aside>
              <div className="code-content">
                <div className="code-content__file">
                  <span className="code-file-dot" aria-hidden="true" />
                  {t.hero.terminalFile}
                </div>
                <pre aria-label={t.hero.visualLabel}>
                  <code>
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">product</span> = {"{"}
                    {"\n"}
                    {"  "}
                    <span className="code-cyan">people</span>:{" "}
                    <span className="code-green">"first"</span>,{"\n"}
                    {"  "}
                    <span className="code-cyan">quality</span>:{" "}
                    <span className="code-green">"thoughtful"</span>,{"\n"}
                    {"  "}
                    <span className="code-cyan">growth</span>:{" "}
                    <span className="code-green">"continuous"</span>
                    {"\n"}
                    {"};"}
                  </code>
                </pre>
                <div className="code-divider" />
                <ul
                  className="code-principles"
                  dir={language === "fa" ? "rtl" : "ltr"}
                >
                  {t.hero.terminalLines.map((line, index) => (
                    <li key={line}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="code-panel__footer">
              <span>
                <span className="status-dot" aria-hidden="true" />
                {t.hero.terminalStatus}
              </span>
              <span>React · TypeScript</span>
            </div>
          </div>
          <div className="hero__visual-note">
            <span className="visual-note__line" />
            <span>{t.hero.visualNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
