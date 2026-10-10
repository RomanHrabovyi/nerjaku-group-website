"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { copy, type Locale, locales } from "@/lib/site-content";

const paths: Record<Locale, string> = { en: "/", sq: "/sq", it: "/it" };

export function SiteHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[locale];
  const ids = ["home", "services", "projects", "about", "contact"];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a aria-label="Nerjaku Group home" className="brand-link" href={paths[locale]}>
          <BrandLogo />
        </a>

        <nav aria-label="Main navigation" className={`main-nav${menuOpen ? " is-open" : ""}`}>
          {text.nav.map((label, index) => (
            <a href={`#${ids[index]}`} key={ids[index]} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="mobile-quote" href="#contact" onClick={() => setMenuOpen(false)}>
            {text.quote} <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="header-actions">
          <div aria-label={text.language} className="language-switcher">
            {locales.map((item) => (
              <a
                aria-current={locale === item ? "page" : undefined}
                aria-label={copy[item].localeName}
                className={locale === item ? "active" : ""}
                href={paths[item]}
                key={item}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
          <a className="button button--yellow header-quote" href="#contact">
            {text.quote} <span aria-hidden="true">↗</span>
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? text.closeMenu : text.menu}
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
