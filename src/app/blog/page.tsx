import { Metadata } from 'next';
import BlogListView from '../../views/blog/BlogListView';

export const metadata: Metadata = {
  title: 'Blog & Inspiracija | Marina Coaching · Vivi Vita',
  description: 'Članci, savjeti i uvidi o osobnom rastu, postavljanju zdravih granica i putu od "dobre djevojčice" do žene koja vodi svoj život.',
};

export default function BlogPage() {
  return <BlogListView />;
}
