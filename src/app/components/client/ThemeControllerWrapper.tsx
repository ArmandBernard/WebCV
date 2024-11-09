"use client";

import dynamic from "next/dynamic";

export const ThemeControllerWrapper = dynamic(
  () => import("@/app/components/client/ThemeController"),
  { ssr: false }
);
