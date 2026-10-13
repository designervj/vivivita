import { notFound } from 'next/navigation';
import ProgramPageView from '../../../views/program/ProgramPageView';
import { getProgramPage, programPages } from '../../../lib/programPages';

interface ProgramRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programPages.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramRouteProps) {
  const { slug } = await params;
  const program = getProgramPage(slug);

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} | Marina Coaching`,
    description: program.intro,
  };
}

export default async function ProgramPage({ params }: ProgramRouteProps) {
  const { slug } = await params;
  const program = getProgramPage(slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = programPages.filter((item) => item.slug !== program.slug);

  return <ProgramPageView program={program} otherPrograms={otherPrograms} />;
}
