'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Modals from '../../components/shared/Modals';
import { BlogPost, blogPosts } from '../../lib/blog/posts';
import { useLanguage, useCopy } from '../../context/LanguageContext';

export default function BlogListView() {
  const { lang } = useLanguage();
  const copy = useCopy();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All topics' : 'Sve teme' },
    { id: 'osobni-rast', label: lang === 'en' ? 'Personal Growth' : 'Osobni rast' },
    { id: 'granice', label: lang === 'en' ? 'Boundaries & Relationships' : 'Granice & Odnosi' },
    { id: 'mentalni-reset', label: lang === 'en' ? 'Mental Reset' : 'Mentalni reset' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'all' || post.categorySlug === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const title = post.title[lang].toLowerCase();
    const excerpt = post.excerpt[lang].toLowerCase();
    const tags = post.tags.join(' ').toLowerCase();
    return matchesCat && (title.includes(q) || excerpt.includes(q) || tags.includes(q));
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.slug !== (selectedCategory === 'all' && !searchQuery ? featuredPost.slug : ''));

  const goToHomeSection = (id: string) => {
    window.location.href = id === 'top' ? '/' : `/#${id}`;
  };

  return (
    <div className="vivivita-page min-h-screen flex flex-col bg-[var(--background)]">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onScrollTo={goToHomeSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden border-b border-neutral-200/60 bg-gradient-to-b from-[#f2f8f8] to-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23909d]/10 text-[#23909d] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Inspiration & Knowledge' : 'Inspiracija i znanje'}</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-5xl md:text-5xl font-medium text-neutral-900 tracking-tight">
              {lang === 'en' ? 'Blog & Insights' : 'Blog & Inspiracija'}
            </h1>

            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Articles, guidance, and reflections on personal growth, healthy boundaries, and leading your life authentically.'
                : 'Članci, savjeti i uvidi o osobnom rastu, zdravim granicama i putu prema autentičnom životu bez krivnje.'}
            </p>

            {/* Search and Category Filters */}
            <div className="pt-6 max-w-xl mx-auto space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search articles, topics, or keywords...' : 'Pretražite članke, teme ili ključne riječi...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-neutral-200/80 bg-white shadow-xs text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#23909d]/30 focus:border-[#23909d] transition-all"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#23909d] text-white shadow-xs'
                        : 'bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-6xl">
          {/* Featured Post (only when not searching and category is 'all') */}
          {!searchQuery && selectedCategory === 'all' && featuredPost && (
            <div className="mb-14">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#23909d] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'en' ? 'Featured Article' : 'Izdvojeni članak'}</span>
              </div>

              <div className="group rounded-3xl bg-white border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 grid md:grid-cols-12 gap-0">
                <div className="md:col-span-7 relative aspect-16/10 md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#23909d] shadow-xs">
                      {featuredPost.category[lang]}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime[lang]}
                      </span>
                    </div>

                    <h2 className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-900 group-hover:text-[#23909d] transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title[lang]}
                      </Link>
                    </h2>

                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {featuredPost.excerpt[lang]}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#23909d]/10 text-[#23909d] font-bold text-xs flex items-center justify-center">
                        MN
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold text-neutral-800">{featuredPost.author}</p>
                        <p className="text-neutral-400">{featuredPost.authorRole[lang]}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#23909d] group-hover:translate-x-1 transition-transform"
                    >
                      <span>{lang === 'en' ? 'Read full' : 'Pročitaj'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200/60 pb-3">
              <h3 className="font-serif-title text-xl text-neutral-900 font-medium">
                {selectedCategory !== 'all' || searchQuery
                  ? (lang === 'en' ? `Articles (${filteredPosts.length})` : `Članci (${filteredPosts.length})`)
                  : (lang === 'en' ? 'Latest Articles' : 'Najnoviji članci')}
              </h3>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-neutral-200/80 p-8">
                <BookOpen className="w-10 h-10 text-neutral-300 mx-auto" />
                <h4 className="font-serif-title text-lg text-neutral-800">
                  {lang === 'en' ? 'No articles found' : 'Nema pronađenih članaka'}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto">
                  {lang === 'en'
                    ? 'Try searching with different terms or select another category.'
                    : 'Pokušajte pretražiti drugim izrazima ili odaberite drugu kategoriju.'}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="btn-primary mt-2 text-xs py-2 px-5 cursor-pointer"
                >
                  {lang === 'en' ? 'Reset filters' : 'Poništi filtere'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {(searchQuery || selectedCategory !== 'all' ? filteredPosts : gridPosts).map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#23909d] shadow-2xs">
                        {post.category[lang]}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime[lang]}</span>
                        </div>

                        <h4 className="font-serif-title text-base sm:text-lg font-medium text-neutral-900 group-hover:text-[#23909d] transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title[lang]}
                          </Link>
                        </h4>

                        <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                          {post.excerpt[lang]}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-[11px] text-neutral-500 font-medium">
                          {post.author}
                        </span>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#23909d] hover:underline"
                        >
                          <span>{lang === 'en' ? 'Read' : 'Pročitaj'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl bg-[#23909d] text-white p-8 sm:p-12 text-center space-y-4 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-3">
              <h3 className="font-serif-title text-2xl sm:text-3xl font-medium">
                {lang === 'en' ? 'Ready to Start Your Own Journey?' : 'Spremne ste započeti vlastiti proces?'}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                {lang === 'en'
                  ? 'Book a free introductory consultation and discover how coaching can help you step into your authenticity.'
                  : 'Prijavite se na besplatne uvodne konzultacije i otkrijte kako vam coaching može pomoći u postavljanju vlastitih pravila života.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-7 py-3 rounded-full bg-white text-[#23909d] font-semibold text-xs sm:text-sm hover:bg-neutral-50 transition-colors cursor-pointer shadow-md"
                >
                  {copy.hero.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactModalOpen(true)}
        onScrollTo={goToHomeSection}
      />

      {/* Contact & Modals */}
      <Modals
        videoModalOpen={false}
        onCloseVideo={() => {}}
        contactModalOpen={contactModalOpen}
        onCloseContact={() => setContactModalOpen(false)}
        selectedProgram={null}
        onCloseProgram={() => {}}
        infoModal={null}
        onCloseInfoModal={() => {}}
      />
    </div>
  );
}
