import EditableText from '../../../components/shared/EditableText';
import { PHILOSOPHY_CONTENT, type HomeContent } from '../../../lib/pages/content';

export default function IntroQuote({ content = PHILOSOPHY_CONTENT }: { content?: HomeContent['philosophy'] }) {
  return (
    <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-7">
        {/* First Paragraph Group */}
        <div className="space-y-1.5 text-[var(--muted)] text-[16px] sm:text-[16px] md:text-[21px] leading-[160%] font-medium tracking-[0%]">
          <EditableText
            tag="p"
            sectionId="philosophy-001"
            fieldPath="part1.0.hr"
            value={content.part1[0]}
            multiline
          />

          <EditableText
            tag="p"
            sectionId="philosophy-001"
            fieldPath="part1.1.hr"
            value={content.part1[1]}
            multiline
          />

          <EditableText
            tag="p"
            sectionId="philosophy-001"
            fieldPath="part2.0.hr"
            value={content.part2[0]}
            multiline
            className="text-center pt-6"
          />
          <p>
            <EditableText
              sectionId="philosophy-001"
              fieldPath="part2.1.hr"
                value={content.part2[1]}
            />{' '}

            <span className="text-[var(--primary)] font-semibold">
              <EditableText
                sectionId="philosophy-001"
                fieldPath="part2.2.hr"
                value={`“${content.part2[2]}”`}
              />
            </span>
            {' '}
            <EditableText
              sectionId="philosophy-001"
              fieldPath="part2.3.hr"
              value={content.part2[3]}
            />

          </p>
        </div>

        {/* Second Paragraph Group with teal highlighted phrase */}
        <div className="space-y-1.5 text-[var(--foreground)] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] font-normal pt-1">
          <p>

          </p>
          <p>

          </p>
        </div>
      </div>
    </section>
  );
}
