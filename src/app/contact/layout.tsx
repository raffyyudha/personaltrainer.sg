import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Personal Trainer Singapore | PersonalTrainer.sg",
  description: "Contact PersonalTrainer.sg for professional Personal Training in Singapore. Enquire about Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness and Trial Session availability.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


