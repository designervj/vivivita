'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Check, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Modals from '../../components/shared/Modals';
import { BlogPost } from '../../lib/blog/posts';
import { useLanguage, useCopy } from '../../context/LanguageContext';

interface BlogPostViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostView({ post, relatedPosts }: BlogPostViewProps) {
  const { lang } = useLanguage();
  const copy = useCopy();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const goToHomeSection = (id: string) => {
    window.location.href = id === 'top' ? '/' : `/#${id}`;
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch (e) {
        console.error('Failed to copy URL:', e);
      }
    }
  };

  return (
    <div className="vivivita-page min-h-screen flex flex-col bg-[var(--background)]">
      {/* Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onScrollTo={goToHomeSection}
      />

      <main className="flex-1">
        {/* Article Header & Breadcrumbs */}
        <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-neutral-200/60 bg-gradient-to-b from-[#f2f8f8] to-[var(--background)]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl space-y-6">
            {/* Breadcrumb & Back */}
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-[#23909d] transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back to all articles' : 'Povratak na sve članke'}</span>
              </Link>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-medium transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'en' ? 'Link copied!' : 'Link kopiran!') : (lang === 'en' ? 'Share' : 'Podijeli')}</span>
              </button>
            </div>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#23909d]/10 text-[#23909d]">
                {post.category[lang]}
              </span>

              <h1 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                {post.title[lang]}
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-light">
                {post.excerpt[lang]}
              </p>

              {/* Meta row */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-neutral-200/80 text-xs sm:text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#23909d] text-white font-bold text-xs flex items-center justify-center">
                    MN
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-800 block">{post.author}</span>
                    <span className="text-xs text-neutral-400">{post.authorRole[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-400 sm:ml-auto">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime[lang]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl -mt-6">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-16/9 bg-neutral-100">
            <img
              src={post.image}
              alt={post.title[lang]}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Article Body */}
        <article className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl py-12">
          <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-[1.85] font-normal">
            {post.content[lang].map((paragraph, index) => {
              // Add a styled pull quote in the middle
              if (index === 2) {
                return (
                  <div key={index} className="space-y-6">
                    <blockquote className="my-8 pl-5 sm:pl-6 border-l-4 border-[#23909d] bg-[#f2f8f8] p-5 sm:p-6 rounded-r-2xl italic font-serif-title text-neutral-800 text-lg sm:text-xl">
                      &ldquo;{post.excerpt[lang]}&rdquo;
                    </blockquote>
                    <p>{paragraph}</p>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-400 mr-2">{lang === 'en' ? 'Tags:' : 'Oznake:'}</span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Card Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-[#23909d] text-white font-serif-hero text-xl font-bold flex items-center justify-center shrink-0 shadow-xs">
              MN
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif-title text-lg font-medium text-neutral-900">{post.author}</h4>
                  <p className="text-xs text-[#23909d] font-semibold">{post.authorRole[lang]}</p>
                </div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="btn-primary text-xs py-2 px-4 justify-center cursor-pointer"
                >
                  {copy.nav.contact}
                </button>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                {lang === 'en'
                  ? 'Helping women navigate the path from people-pleasing to sovereign, joyful living. Let\'s connect and create positive change in your life.'
                  : 'Pomažem ženama da napuste ulogu udovoljavanja drugima i počnu živjeti slobodno, autentično i po svojim pravilima.'}
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-neutral-50/70 border-t border-neutral-200/60 py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-title text-xl sm:text-2xl font-medium text-neutral-900">
                  {lang === 'en' ? 'More from the Blog' : 'Možda vas zanima i ovo'}
                </h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#23909d] hover:underline"
                >
                  <span>{lang === 'en' ? 'View all' : 'Pregledaj sve'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-16/9 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-semibold text-[#23909d]">
                          {related.category[lang]}
                        </span>
                        <h4 className="font-serif-title text-base sm:text-lg font-medium text-neutral-900 group-hover:text-[#23909d] transition-colors leading-snug">
                          <Link href={`/blog/${related.slug}`}>
                            {related.title[lang]}
                          </Link>
                        </h4>
                        <p className="text-neutral-600 text-xs line-clamp-2 leading-relaxed">
                          {related.excerpt[lang]}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                        <span>{related.readTime[lang]}</span>
                        <Link
                          href={`/blog/${related.slug}`}
                          className="font-semibold text-[#23909d] inline-flex items-center gap-1"
                        >
                          <span>{lang === 'en' ? 'Read' : 'Čitaj'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>



      {/* Modals */}
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
