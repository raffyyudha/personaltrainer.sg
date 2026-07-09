import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training Services Singapore | Weight Loss Training, Strength Training, Senior Fitness | PersonalTrainer.sg",
  description: "PersonalTrainer.sg provides professional Personal Training services in Singapore, including Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness, Corporate Wellness and Online Coaching. Led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
