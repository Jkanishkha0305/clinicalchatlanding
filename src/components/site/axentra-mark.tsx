import Image from "next/image";

export function AxentraMark() {
  return (
    <Image
      src="/AXENTRA.svg"
      alt=""
      aria-hidden="true"
      width={80}
      height={80}
      priority
      className="brand-lockup__glyph"
    />
  );
}
