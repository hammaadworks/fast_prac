// Connect.tsx

"use client";
import * as React from "react";
import { forwardRef, useRef } from "react";
import { SparklesText } from "./magicui/sparkles-text";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import HeadingSparkle from "./myui/heading-sparkle";

const Node = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-xl border bg-white px-4 py-2 shadow-md text-sm font-medium text-black hover:bg-gray-50",
        className
      )}
    >
      {children}
    </div>
  );
});

Node.displayName = "Node";

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  whatsapp: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
    >
      <path
        fill="#128C7E"
        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
      />
    </svg>
  ),
  call: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-telephone-outbound-fill"
      viewBox="0 0 16 16"
    >
      <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
    </svg>
  ),
};

export function Connect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const callWaseemRef = useRef<HTMLDivElement>(null);
  const whatsappWaseemRef = useRef<HTMLDivElement>(null);
  const callHammaadRef = useRef<HTMLDivElement>(null);
  const whatsappHammaadRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-primary-light py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle
          heading="Call Us"
          description="Have a question, a concern, or just want to say salaam? Feel free to call us anytime! 📞✨"
        />

        <div
          className="relative flex w-full max-w-5xl items-center justify-between overflow-visible p-10 gap-10"
          ref={containerRef}
        >
          {/* Left: Branches stacked vertically */}
          <div className="flex flex-col gap-4">
            <Node ref={callWaseemRef}>
              <a
                href="tel:+910000000000"
                className="flex flex-row-reverse items-center gap-2"
              >
                <Icons.call />
                {"Waseem"}
              </a>
            </Node>
            <Node ref={whatsappWaseemRef}>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                className="flex flex-row-reverse items-center gap-2"
              >
                <Icons.whatsapp />
                {"Waseem"}
              </a>
            </Node>
            <Node ref={callHammaadRef}>
              <a
                href="tel:+910000000000"
                className="flex flex-row-reverse items-center gap-2"
              >
                <Icons.call /> {"Hammaad"}
              </a>
            </Node>
            <Node ref={whatsappHammaadRef}>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                className="flex flex-row-reverse items-center gap-2"
              >
                <Icons.whatsapp />
                {"Hammaad"}
              </a>
            </Node>
          </div>

          {/* Right: Central User vertically centered */}
          <div className="flex flex-1 items-center justify-center">
            <Node ref={centerRef} className="min-w-[60px] h-[60px]">
              <Icons.user />
            </Node>
          </div>

          {/* Beams */}
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={callWaseemRef}
            toRef={centerRef}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={whatsappWaseemRef}
            toRef={centerRef}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={callHammaadRef}
            toRef={centerRef}
          />
          <AnimatedBeam
            duration={3}
            containerRef={containerRef}
            fromRef={whatsappHammaadRef}
            toRef={centerRef}
          />
        </div>
      </div>
    </section>
  );
}
