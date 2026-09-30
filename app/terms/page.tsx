import type { Metadata } from "next";
import Legal from "@/components/Legal/Legal";
import doc from "@/components/Legal/content/terms";

export const metadata: Metadata = {
  title: "Пользовательское соглашение — GROZTEX",
  description: doc.intro,
};

export default function Page() {
  return <Legal doc={doc} current="/terms" />;
}
