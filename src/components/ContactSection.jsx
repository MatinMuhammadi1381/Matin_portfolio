import { useState } from "react";
import { ArrowUpRight, Github, Instagram, Mail } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

const emailAddress = "matin.muhammadi.2001@gmail.com";
const githubUrl = "https://github.com/MatinMuhammadi1381";
const instagramUrl = "https://instagram.com/matin_muhammadi.2001";

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = copy[language].contact;
  const [isPrepared, setIsPrepared] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `${t.emailSubject} ${formData.get("name")}`
    );
    const body = encodeURIComponent(
      `${formData.get("message")}\n\n${t.replyTo}: ${formData.get("email")}`
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setIsPrepared(true);
  };

  return (
    <section className="section section-anchor" id="contact">
      <div className="site-container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
            <p className="contact-copy__intro">{t.intro}</p>

            <div className="contact-links">
              <a href={`mailto:${emailAddress}`} className="contact-link">
                <span className="contact-link__icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>{t.emailLabel}</small>
                  <strong>{emailAddress}</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={githubUrl}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__icon">
                  <Github size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>{t.githubLabel}</small>
                  <strong>MatinMuhammadi1381</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={instagramUrl}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link__icon">
                  <Instagram size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>{t.instagramLabel}</small>
                  <strong>@matin_muhammadi.2001</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h3>{t.formTitle}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{t.name}</span>
                <input
                  autoComplete="name"
                  name="name"
                  placeholder={t.namePlaceholder}
                  required
                />
              </label>
              <label>
                <span>{t.email}</span>
                <input
                  autoComplete="email"
                  dir="ltr"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </label>
              <label>
                <span>{t.message}</span>
                <textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  rows="4"
                  required
                />
              </label>
              <button className="button button--primary" type="submit">
                {t.submit}
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <p className="contact-form__note" aria-live="polite">
                {isPrepared ? t.prepared : t.note}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
