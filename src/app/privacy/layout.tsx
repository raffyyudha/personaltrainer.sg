import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PersonalTrainer.sg",
  description: "Privacy Policy for PersonalTrainer.sg. Learn how we handle and protect your personal information.",
  alternates: {
    canonical: "https://personaltrainer.sg/privacy"
  }
};

export default function PrivacyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
