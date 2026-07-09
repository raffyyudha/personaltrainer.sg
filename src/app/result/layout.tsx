import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results and Transformations Singapore | PersonalTrainer.sg",
  description: "View client results, transformation highlights and progress stories from PersonalTrainer.sg. Professional Personal Training in Singapore for Weight Loss Training, Strength Training, Body Toning and Lifestyle Transformation.",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
