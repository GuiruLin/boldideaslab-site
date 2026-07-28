import type { ReactNode } from "react";

import { Footer } from "@/components/redesign/Footer";
import { Header } from "@/components/redesign/Header";

export default function LegacyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
