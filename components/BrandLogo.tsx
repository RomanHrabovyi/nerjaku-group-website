import Image from "next/image";

type BrandLogoProps = { small?: boolean };

export function BrandLogo({ small = false }: BrandLogoProps) {
  return (
    <span
      aria-label="Nerjaku Group"
      className={`brand-crop${small ? " brand-crop--small" : ""}`}
      role="img"
    >
      <Image
        alt=""
        aria-hidden
        height={230}
        src="/nerjaku-logo-beige.svg"
        width={850}
      />
    </span>
  );
}
