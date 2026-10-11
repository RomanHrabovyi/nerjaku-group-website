import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteMotion } from "@/components/SiteMotion";
import {
  copy,
  projectImages,
  serviceImages,
} from "@/lib/site-content";

const photo = (url: string): React.CSSProperties => ({ backgroundImage: `url("${url}")` });

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow--light" : ""}`}><span />{children}</p>;
}

function ArrowMark() {
  return <span aria-hidden="true" className="arrow-mark">↗</span>;
}

export function HomePage() {
  const text = copy;
  const ids = ["home", "services", "projects", "about", "contact"];

  return (
    <SiteMotion>
      <SiteHeader />
      <main>
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div
            aria-label={text.heroImageAlt}
            className="hero-image"
            data-hero-image
            role="img"
            style={photo("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90")}
          />
          <div className="hero-shade" />
          <div className="hero-content page-wrap">
            <Eyebrow light>{text.heroLabel}</Eyebrow>
            <h1 id="hero-title">
              {text.heroLines.map((line, index) => (
                <span data-hero-item key={line} className={index === 2 ? "hero-title-last" : ""}>{line}</span>
              ))}
            </h1>
            <p className="hero-copy" data-hero-item>{text.heroBody}</p>
            <div className="hero-actions" data-hero-item>
              <a className="button button--beige" data-hover-button href="#services">{text.explore}<ArrowMark /></a>
              <a className="text-link text-link--light" href="#projects">{text.seeWork}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-bottom page-wrap" data-hero-item>
            <span className="hero-location">DURRËS&nbsp; / &nbsp;GOLEM&nbsp; / &nbsp;KAVAJË&nbsp; / &nbsp;SHIJAK</span>
            <a className="scroll-cue" href="#about"><span className="scroll-line" />{text.scroll}</a>
            <span className="hero-index">01 / 04</span>
          </div>
          <span className="hero-side-note" aria-hidden="true">NERJAKU GROUP · DURRËS</span>
        </section>

        <section aria-labelledby="intro-title" className="intro-section section-pad" id="about">
          <div className="page-wrap intro-grid">
            <div className="intro-copy" data-reveal>
              <Eyebrow>{text.introLabel}</Eyebrow>
              <h2 className="display-heading" id="intro-title">{text.introTitle}</h2>
              <p className="body-copy">{text.introBody}</p>
              <a className="text-link text-link--dark" href="#process">{text.processLabel}<ArrowMark /></a>
            </div>
            <div className="intro-visual" data-reveal>
              <div
                aria-label={text.introImageAlt}
                className="photo-fill intro-photo"
                data-parallax
                role="img"
                style={photo("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85")}
              />
              <div className="image-caption"><span>01 / 03</span><span>{text.imageCraft}</span></div>
              <div className="intro-stamp"><span>NG</span><small>{text.builtAround}</small></div>
            </div>
          </div>
          <div className="coverage-band page-wrap" data-reveal>
            <div><Eyebrow>{text.coverage}</Eyebrow><h3>{text.coverageTitle}</h3></div>
            <p>{text.coverageBody}</p>
          </div>
        </section>

        <section aria-labelledby="services-title" className="services-section section-pad" id="services">
          <div className="page-wrap">
            <div className="section-heading-row" data-reveal>
              <div><Eyebrow>{text.servicesLabel}</Eyebrow><h2 className="display-heading" id="services-title">{text.servicesTitle}</h2></div>
              <p className="body-copy section-intro">{text.servicesBody}</p>
            </div>
            <div className="services-grid">
              {text.services.map((service, index) => (
                <article className="service-card" data-reveal key={service.title}>
                  <div className="service-photo-wrap">
                    <div aria-label={service.title} className="service-photo" role="img" style={photo(serviceImages[index])} />
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-arrow"><ArrowMark /></span>
                  </div>
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="services-note" data-reveal><span className="beige-dot" />{text.servicesBody}</div>
          </div>
        </section>

        <section aria-labelledby="projects-title" className="projects-section section-pad" id="projects">
          <div className="page-wrap">
            <div className="section-heading-row projects-heading" data-reveal>
              <div><Eyebrow light>{text.projectsLabel}</Eyebrow><h2 className="display-heading" id="projects-title">{text.projectsTitle}</h2></div>
              <div><p className="body-copy body-copy--light">{text.projectsBody}</p><a className="text-link text-link--light" href="#contact">{text.viewAll}<ArrowMark /></a></div>
            </div>
            <div className="project-grid">
              {text.projectTypes.map((title, index) => (
                <a className={`project-card project-card--${index + 1}`} data-project-card data-reveal href="#contact" key={title}>
                  <div className="project-image-clip">
                    <div className="project-image" data-project-image style={photo(projectImages[index])} />
                  </div>
                  <span className="project-demo-tag">{text.illustrative}</span>
                  <div className="project-card-bottom">
                    <div><span className="project-category">{title}</span><h3>{text.projectCaptions[index]}</h3></div>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="reasons-title" className="reasons-section section-pad">
          <div className="page-wrap reasons-layout">
            <div className="reasons-intro" data-reveal>
              <Eyebrow>{text.reasonsLabel}</Eyebrow>
              <h2 className="display-heading" id="reasons-title">{text.reasonsTitle}</h2>
              <div className="warranty-card"><span className="warranty-symbol">✳</span><div><h3>{text.warrantyTitle}</h3><p>{text.warrantyBody}</p></div></div>
            </div>
            <div className="reason-list">
              {text.reasons.map(([number, title, description]) => (
                <article className="reason-item" data-reveal key={number}>
                  <span className="reason-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowMark />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="process-title" className="process-section section-pad" id="process">
          <div className="page-wrap">
            <div className="process-heading" data-reveal><Eyebrow light>{text.processLabel}</Eyebrow><h2 className="display-heading" id="process-title">{text.processTitle}</h2></div>
            <div className="process-grid">
              {text.process.map(([number, title, description]) => (
                <article className="process-step" data-reveal key={number}>
                  <span className="process-step-number">{number}</span><span className="process-step-line" /><h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section section-pad" id="contact">
          <div className="contact-beige-rule" />
          <div className="page-wrap contact-layout">
            <div className="contact-copy" data-reveal>
              <Eyebrow light>{text.contactEyebrow}</Eyebrow>
              <p className="contact-person">{text.contactPerson}</p>
              <h2 className="display-heading" id="contact-title">{text.contactTitle}</h2>
              <p>{text.contactBody}</p>
              <div className="contact-direct-links">
                <a href="tel:+355682939145">+355 68 293 9145 <ArrowMark /></a>
                <a href="https://wa.me/355682939145" rel="noreferrer" target="_blank">{text.whatsappLabel} <ArrowMark /></a>
                <a href="mailto:arbernerjaku66@gmail.com">ARBERNERJAKU66@GMAIL.COM <ArrowMark /></a>
              </div>
            </div>
            <div data-reveal><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-main">
          <div className="footer-brand-column"><a aria-label="Nerjaku Group — faqja kryesore" href="/"><BrandLogo small /></a><p>{text.location}</p><p className="footer-social-note">{text.socialsPlaceholder}</p></div>
          <div className="footer-column"><h2>{text.linksFooter}</h2>{text.nav.map((label, index) => <a href={`#${ids[index]}`} key={ids[index]}>{label}</a>)}</div>
          <div className="footer-column"><h2>{text.servicesFooter}</h2>{text.services.slice(0, 4).map((service) => <a href="#services" key={service.title}>{service.title}</a>)}</div>
          <div className="footer-column"><h2>{text.contact}</h2><a href="tel:+355682939145">+355 68 293 9145</a><a href="mailto:arbernerjaku66@gmail.com">arbernerjaku66@gmail.com</a><span>{text.contactCity}</span></div>
        </div>
        <div className="page-wrap footer-bottom"><span>{text.copyright.replace("{year}", "2026")}</span><a href="#home">{text.backTop}</a><span>DURRËS · SHQIPËRI</span></div>
      </footer>
    </SiteMotion>
  );
}
