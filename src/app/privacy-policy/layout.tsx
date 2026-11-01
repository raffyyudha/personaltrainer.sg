import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PersonalTrainer.sg | Singapore PDPA Compliant",
  description:
    "Privacy Policy for PersonalTrainer.sg. Learn how we collect, protect, and process personal and fitness health data in compliance with the Singapore Personal Data Protection Act (PDPA).",
  alternates: {
    canonical: "https://www.personaltrainer.sg/privacy-policy"
  }
};

export default function PrivacyPolicyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
