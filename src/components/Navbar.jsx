import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { copy } from "../data/portfolio";
import { useLanguage } from "../context/useLanguage";

const links = [
  { id: "hero", key: "home" },
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "contact", key: "contact" },
];

export const Navbar = () => {
  const { language, setLanguage, isPersian } = useLanguage();
  const t = copy[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          )[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.nav.skipContent}
      </a>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="site-container navbar">
          <a className="brand" href="#hero" onClick={closeMenu}>
            <img
              className="brand__mark"
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt=""
              width="38"
              height="38"
              aria-hidden="true"
            />
            <span className="brand__name">Matin Mohammadi</span>
          </a>

          <nav
            className="navbar__links"
            aria-label={isPersian ? "پیمایش اصلی" : "Primary navigation"}
          >
            {links.map(({ id, key }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "is-active" : ""}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              className="language-switch"
              type="button"
              onClick={() => setLanguage(isPersian ? "en" : "fa")}
              aria-label={t.nav.language}
            >
              <span className={!isPersian ? "is-current" : ""}>EN</span>
              <span className="language-switch__divider" aria-hidden="true">
                /
              </span>
              <span className={isPersian ? "is-current" : ""}>FA</span>
            </button>

            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-navigation" : undefined}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="mobile-navigation"
            id="mobile-navigation"
            aria-label={isPersian ? "پیمایش اصلی" : "Mobile navigation"}
          >
            <div className="site-container mobile-navigation__inner">
              {links.map(({ id, key }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "is-active" : ""}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {t.nav[key]}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
