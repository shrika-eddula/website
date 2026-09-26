import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Bio = () => (
  <div className="max-w-none space-y-6 text-left text-base leading-relaxed">
    <p>
      I spend most of my time on the Life Sciences team at OpenAI. I am excited by virtual organisms, personalized medicine, and autonomous labs.
    </p>

    <Accordion type="multiple" className="space-y-5">
      <AccordionItem value="previously" className="border-0">
        <AccordionTrigger className="justify-start gap-2 py-0 text-left font-semibold hover:no-underline [&>svg]:hidden [&[data-state=open]_.section-toggle-icon]:rotate-90">
          <span
            aria-hidden="true"
            className="section-toggle-icon inline-block text-xs transition-transform duration-200"
          >
            ▶
          </span>
          <span>[Previously]</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 pb-0 pl-5 pt-3 text-base leading-relaxed">
          <p>I’m grateful to have had many great mentors in my life.</p>
          <p>
            As a young teenager, I found my way to Dr. William Acree’s analytical chemistry group where I first found my love for the lab and became a Barry M. Goldwater scholar.
          </p>
          <p>
            I studied computer science at MIT where I was advised by Dr. John Guttag. I spent a year attempting to build an autonomous lab for chemical retrosynthesis. I also worked on representation learning and single cell foundation models in Dr. Caroline Uhler’s lab at the Broad Institute.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="life" className="border-0">
        <AccordionTrigger className="justify-start gap-2 py-0 text-left font-semibold hover:no-underline [&>svg]:hidden [&[data-state=open]_.section-toggle-icon]:rotate-90">
          <span
            aria-hidden="true"
            className="section-toggle-icon inline-block text-xs transition-transform duration-200"
          >
            ▶
          </span>
          <span>[Life]</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 pb-0 pl-5 pt-3 text-base leading-relaxed">
          <p>
            I grew up between Chicago, Long Island, Boston, New Jersey, and Dallas. The people around me make me feel at home more than the place itself.
          </p>
          <p>
            I quite enjoy lifting, reading, cooking meat, watching Grey’s Anatomy, and playing card and social deduction games. Avalon, Secret Hitler, Fish/Literature, and Cambio are my personal favorites, but I’m always looking to expand my repertoire. I also write.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="problems" className="border-0">
        <AccordionTrigger className="justify-start gap-2 py-0 text-left font-semibold hover:no-underline [&>svg]:hidden [&[data-state=open]_.section-toggle-icon]:rotate-90">
          <span
            aria-hidden="true"
            className="section-toggle-icon inline-block text-xs transition-transform duration-200"
          >
            ▶
          </span>
          <span>[Problems That Excite Me]</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 pb-0 pl-5 pt-3 text-base leading-relaxed">
          <p>
            I’d like to make clinical trials faster, and I believe virtual cells and organisms are a good way to get there.
          </p>
          <p>
            I envision a future where each person has a granular understanding of their health. Working on personalized immunotherapies and accessible hormone tracking is how I contribute to that goal.
          </p>
          <p>
            I see autonomous labs as a way to create faster feedback loops that make biology a verifiable domain. I find the concept of a world model in biology overblown, but if we are to get there, it will involve creative representation learning and data generation at scale.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
