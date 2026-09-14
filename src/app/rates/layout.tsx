import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training Rates Singapore | Packages & Trial Fees | PersonalTrainer.sg",
  description: "Explore Personal Training rates and packages in Singapore with PersonalTrainer.sg. Foundation, Progress, Transformation, and Signature tiers with transparent per-session pricing.",
  alternates: {
    canonical: "https://personaltrainer.sg/rates"
  }
};

export default function RatesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
