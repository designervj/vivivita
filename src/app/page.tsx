import HomePage from '../views/home/page';
import { buildHomeContent } from '../lib/pages/content';
import { getCmsPage } from '../lib/pages/runtime';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  const homePage = await getCmsPage('home');
  return <HomePage initialContent={buildHomeContent(homePage)} />;
}
