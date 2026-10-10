"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteMotion({ children, locale }: { children: ReactNode; locale: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      const eventCleanups: Array<() => void> = [];

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-item]", {
          autoAlpha: 0,
          y: 26,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.12,
        });

        gsap.fromTo(
          "[data-hero-image]",
          { scale: 1.12, clipPath: "inset(0 0 0 100%)" },
          { scale: 1, clipPath: "inset(0 0 0 0%)", duration: 1.25, ease: "power3.inOut", delay: 0.1 },
        );

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 34,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -5 },
            { yPercent: 5, ease: "none", scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: 0.7 } },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card) => {
          const image = card.querySelector<HTMLElement>("[data-project-image]");
          if (!image) return;
          const enter = () => gsap.to(image, { scale: 1.055, duration: 0.7, ease: "power3.out", overwrite: true });
          const leave = () => gsap.to(image, { scale: 1, duration: 0.7, ease: "power3.out", overwrite: true });
          card.addEventListener("pointerenter", enter);
          card.addEventListener("pointerleave", leave);
          card.addEventListener("focusin", enter);
          card.addEventListener("focusout", leave);
          eventCleanups.push(() => {
            card.removeEventListener("pointerenter", enter);
            card.removeEventListener("pointerleave", leave);
            card.removeEventListener("focusin", enter);
            card.removeEventListener("focusout", leave);
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-hover-button]").forEach((button) => {
          const enter = () => gsap.to(button, { y: -2, duration: 0.2, ease: "power2.out", overwrite: true });
          const leave = () => gsap.to(button, { y: 0, duration: 0.2, ease: "power2.out", overwrite: true });
          button.addEventListener("pointerenter", enter);
          button.addEventListener("pointerleave", leave);
          eventCleanups.push(() => {
            button.removeEventListener("pointerenter", enter);
            button.removeEventListener("pointerleave", leave);
          });
        });

        return () => eventCleanups.forEach((cleanup) => cleanup());
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return <div className="site-root" lang={locale} ref={root}>{children}</div>;
}
