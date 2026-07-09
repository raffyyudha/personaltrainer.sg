import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Md Salaudin Adam (DONN) | Personal Trainer Singapore | PersonalTrainer.sg",
  description: "Learn more about Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg. Trusted in Singapore Since 2002 with 24 Years of Coaching Experience in Personal Training, Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Body Transformation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
