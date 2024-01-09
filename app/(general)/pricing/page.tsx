import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
  description: "Pagina de precios",
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing</span>
    </>
  );
}
