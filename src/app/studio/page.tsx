import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Redirect /studio to Kalptree dashboard
export default function StudioPage() {
  redirect('https://zerolive.kalptree.xyz/canvas/vivivita/home');
}
