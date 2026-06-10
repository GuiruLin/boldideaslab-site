import { Suspense } from "react";

import { ProgrammesPage } from "@/components/pages/ProgrammesPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProgrammesPage />
    </Suspense>
  );
}
