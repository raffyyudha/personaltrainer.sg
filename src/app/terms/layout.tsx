import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | PersonalTrainer.sg",
  description: "Terms and Conditions for PersonalTrainer.sg personal fitness training services and website use.",
  alternates: {
    canonical: "https://personaltrainer.sg/terms"
  }
};

export default function TermsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
