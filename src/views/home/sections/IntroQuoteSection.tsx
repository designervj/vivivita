import { PHILOSOPHY_CONTENT, type HomeContent } from '../../../lib/pages/content';

const highlightedPhrases = ['dobre djevojčice', 'moraš', 'želiš', 'vlastitim izborima'];

const renderHighlightedText = (text: string) => {
  const parts: Array<{ text: string; highlighted: boolean }> = [];
  let remaining = text;

  while (remaining) {
    const nextMatch = highlightedPhrases
      .map((phrase) => ({ phrase, index: remaining.indexOf(phrase) }))
      .filter((match) => match.index >= 0)
      .sort((a, b) => a.index - b.index)[0];

    if (!nextMatch) {
      parts.push({ text: remaining, highlighted: false });
      break;
    }

    if (nextMatch.index > 0) {
      parts.push({ text: remaining.slice(0, nextMatch.index), highlighted: false });
    }

    parts.push({ text: nextMatch.phrase, highlighted: true });
    remaining = remaining.slice(nextMatch.index + nextMatch.phrase.length);
  }

  return parts.map((part, idx) => (
    part.highlighted ? (
      <span key={idx} className="font-bold text-[#3A9FB3]">
        {part.text}
      </span>
    ) : part.text
  ));
};

export default function IntroQuote({ content = PHILOSOPHY_CONTENT }: { content?: HomeContent['philosophy'] }) {
  const boldParagraphs = new Set([0, 2, 5]);
  const paragraphs = content.paragraphs && content.paragraphs.length > 0
    ? content.paragraphs
    : [
        content.part1[0],
        content.part1[1],
        content.part2[0],
        content.part2[1],
        content.part2[2],
        content.part2[3],
      ].filter(Boolean);

  return (
    <section className="py-14 sm:py-20 mb:py-24 px-4 sm:px-6 md:pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-7">
        <div className="space-y-3.5 text-[var(--muted)] text-[16px] sm:text-[16px] md:text-[16px] leading-[160%] font-medium tracking-[0%]">
          {paragraphs.map((p, idx) => (
            <p key={idx} className={boldParagraphs.has(idx) ? 'font-semibold' : undefined}>
              {renderHighlightedText(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
