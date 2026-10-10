import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { locales, type Locale } from "@/lib/site-content";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const title = {
    en: "Nerjaku Group | Construction & Renovation in Albania",
    sq: "Nerjaku Group | Ndërtim dhe Rinovim në Shqipëri",
    it: "Nerjaku Group | Costruzioni e Ristrutturazioni in Albania",
  }[locale as Locale];

  const description = {
    en: "Construction, facade, drywall, insulation and finishing services in Durrës, Golem, Kavajë, Shijak and across Albania.",
    sq: "Shërbime ndërtimi, fasadash, gipsi, izolimi dhe finiturash në Durrës, Golem, Kavajë, Shijak dhe në Shqipëri.",
    it: "Servizi di costruzione, facciate, cartongesso, isolamento e finiture a Durazzo, Golem, Kavajë, Shijak e in Albania.",
  }[locale as Locale];

  return { title, description };
}

export default function LocalizedPage({ params }: PageProps<"/[locale]">) {
  return (
    <Suspense fallback={null}>
      <LocalizedPageContent params={params} />
    </Suspense>
  );
}

async function LocalizedPageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <HomePage locale={locale as Locale} />;
}
