"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { copy } from "@/lib/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy;
  const ids = ["home", "services", "projects", "about", "contact"];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a aria-label="Nerjaku Group — faqja kryesore" className="brand-link" href="/">
          <BrandLogo />
        </a>

        <nav aria-label="Navigimi kryesor" className={`main-nav${menuOpen ? " is-open" : ""}`}>
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
          <a className="button button--beige header-quote" href="#contact">
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
