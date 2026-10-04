import { ArrowUp, Github } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";
import { PWAInstallButton } from "./PWAInstallButton";

export const Footer = () => {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <a className="brand brand--footer" href="#hero">
          <img
            className="brand__mark"
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt=""
            width="38"
            height="38"
            aria-hidden="true"
          />
          <span className="brand__text">
            <strong>Matin Mohammadi</strong>
            <small>{t.footer.role}</small>
          </span>
        </a>
        <p>
          © {new Date().getFullYear()} Matin Mohammadi. {t.footer.rights}
        </p>
        <div className="site-footer__actions">
          <PWAInstallButton label={t.footer.installApp} />
          <a
            href="https://github.com/MatinMuhammadi1381"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a href="#hero" aria-label={t.contact.backToTop}>
            <ArrowUp size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
