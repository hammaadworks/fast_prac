// FAQ.tsx
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import type { FAQItem } from "@/components/ui/faq-chat-accordion";
import { SparklesText } from "./magicui/sparkles-text";
import { BorderBeam } from "./magicui/border-beam";
import { CoolMode } from "./magicui/cool-mode";
import HeadingSparkle from "./myui/heading-sparkle";

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "When is the Nikah and Valima?",
    answer: "In-sha-Allah, on 19th June 2025, right after Maghrib Salah. Come for the Iqamah, stay for the biryani. 🍽️",
    icon: "🕌",
    iconPosition: "left"
  },
  {
    id: 2,
    question: "Is there free parking at the Cutchi Memon Hall?",
    answer: "Alhamdulillah, yes! Park without panic. 🚗",
    icon: "🅿️",
    iconPosition: "right"
  },
  {
    id: 3,
    question: "Can I bring gifts?",
    answer: "Your du'as are the best gift. But if you insist... there's a noble charity option too. 🎁",
    icon: "🤲",
    iconPosition: "left"
  },
  {
    id: 4,
    question: "What if I arrive late?",
    answer: "No worries, In-sha-Allah biryani will wait. But don't miss the blessings of the Nikah! 🕊️",
    icon: "⏰",
    iconPosition: "right"
  },
  {
    id: 5,
    question: "Will there be separate seating?",
    answer: "Yes, In-sha-Allah. Brothers to the right, sisters to the left, and everyone under Allah’s mercy. ☁️",
    icon: "🧕",
    iconPosition: "left"
  },
  {
    id: 6,
    question: "Will the food be spicy?",
    answer: "It's like life: some spice, some sweetness, all seasoned with barakah. 🌶️🍛",
    icon: "🌶️",
    iconPosition: "right"
  },
  {
    id: 7,
    question: "What should I wear?",
    answer: "Dress modestly, comfortably, and bring your best smile. Sunnah-style is always in. 👕🧣",
    icon: "🪞",
    iconPosition: "left"
  },
  {
    id: 8,
    question: "Can I make du'a for the couple?",
    answer: "Please do! Du’as are more valuable than gold. May Allah grant them love and mercy, Aameen. 💛",
    icon: "📿",
    iconPosition: "right"
  }
];

export function FAQ() {
  return (
    <section className="w-full bg-secondary py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle heading="FAQs" description="Kya hona bolo, we'll answer." />

        <div className="relative w-full mx-auto overflow-hidden rounded-xl bg-white p-6 shadow-md">
          {/* BorderBeam visual effect (does not affect layout) */}
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            className="absolute inset-0 from-transparent via-blue-500 to-transparent pointer-events-none z-0"
          />

          {/* FAQ Accordion content */}
          <FaqAccordion data={faqData} className="relative z-10 text-left" />
        </div>
      </div>
    </section>
  );
}