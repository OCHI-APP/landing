"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WaitlistModal from "./components/WaitlistModal";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 100); // Animation starts immediately

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden flex flex-col relative">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16 shrink-0 z-20 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-700 ${
                isExpanded ? "bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={`font-medium transition-colors duration-700 ${
                isExpanded ? "text-white" : "text-black"
              }`}
            >
              Menu
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`font-medium transition-colors duration-700 ${
                isExpanded ? "text-white" : "text-black"
              }`}
            >
              Start Free Trial
            </span>
            <svg
              className={`h-4 w-4 transition-colors duration-700 ${
                isExpanded ? "text-white" : "text-black"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative z-10">
          {/* Placeholder for small image visibility logic */}
          <div className="flex-1 flex items-center justify-center pointer-events-none">
            {!isExpanded && (
              <motion.div
                layoutId="hero-image"
                className="relative w-full max-w-[400px] aspect-4/3 overflow-hidden rounded-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/bg.png"
                  alt="Woman walking on pathway"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
          </div>

          {/* Bottom Text Content */}
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-10 md:pb-16 lg:pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                {/* Left side - Heading */}
                <motion.div
                  className="lg:col-span-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight text-white mix-blend-difference">
                    Wear who you&apos;re becoming
                  </h1>
                </motion.div>

                {/* Right side - Subheading and Button */}
                <motion.div
                  className="lg:col-span-5 flex flex-col gap-6 justify-en"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md mix-blend-difference">
                    Dress with intention — using the pieces you already own.
                  </p>

                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors self-start group"
                  >
                    <span>Join the waitlist</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        {/* Expanded Fullscreen Image */}
        {isExpanded && (
          <motion.div
            layoutId="hero-image"
            className="absolute inset-0 z-0 overflow-hidden"
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/bg.png"
              alt="Woman walking on pathway"
              fill
              className="object-cover"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </div>

      {/* Carousel Section */}
      <StyleCarousel />

      {/* Bento Section */}
      <BentoSection />

      {/* Look Feedback Section */}
      <LookFeedbackSection />

      {/* How OCHI Works */}
      <HowOchiWorksSection onJoinWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Second Life Section */}
      <SecondLifeSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom Banner */}
      <WaitlistBannerSection onJoinWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Footer */}
      <SiteFooter />

      <WaitlistModal
        open={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}

function StyleCarousel() {
  const images = [
    "/images/Instagram Post.png",
    "/images/Instagram Post-1.png",
    "/images/Instagram Post-2.png",
    "/images/Instagram Post-3.png",
    "/images/Instagram Post-4.png",
    "/images/Instagram Post-5.png",
    "/images/Instagram Post-6.png",
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];
  const cardHeights = [320, 360, 400, 340, 380, 330, 350];

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center py-16 md:py-20 overflow-hidden">
      {/* Text Content */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black mb-5 md:mb-6">
          Style that moves with you.
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Know what you own, refine what you keep, and
          <br />
          align your closet with your direction.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative w-[240px] shrink-0 rounded-2xl overflow-hidden"
              style={{ height: cardHeights[index % cardHeights.length] }}
            >
              <Image
                src={src}
                alt={`Style ${index + 1}`}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowOchiWorksSection({
  onJoinWaitlist,
}: {
  onJoinWaitlist: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const steps = [
    {
      title: "Choose your style goal",
      description:
        "Polished, minimal or bold — choose what you’re moving toward.",
    },
    {
      title: "Upload your wardrobe",
      description:
        "Add your pieces once, then build outfits from what you already own.",
    },
    {
      title: "Get daily looks",
      description:
        "Every day you’ll get looks aligned to your goal — ready to wear.",
    },
  ] as const;

  const [activeStep, setActiveStep] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const next = Math.min(2, Math.max(0, Math.floor(v * 3))) as 0 | 1 | 2;
      setActiveStep((prev) => (prev === next ? prev : next));
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Small downward bias so the phone sits lower in its card (like the reference)
  const phoneY = useTransform(scrollYProgress, [0, 1], [10, -8]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
            How OCHI works
          </h2>
        </motion.div>

        {/* Scroll area that drives the step selection */}
        <div className="h-[1200px] sm:h-[1300px] md:h-[1700px]">
          <div className="md:sticky md:top-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
              {/* Left: steps + CTA */}
              <div className="lg:col-span-4 rounded-[18px] bg-[#F7F7F7] border border-black/5 p-5 md:p-6 flex flex-col">
                <div className="space-y-2">
                  {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => setActiveStep(idx as 0 | 1 | 2)}
                        className={`w-full text-left rounded-[12px] px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-white"
                            : "bg-transparent hover:bg-white/70"
                        }`}
                      >
                        <span className="text-sm md:text-base text-gray-900">
                          {idx + 1}. {step.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto pt-5">
                  <button
                    onClick={onJoinWaitlist}
                    className="w-full inline-flex items-center justify-between gap-2 bg-[#6B2B2B] text-white px-5 py-4 rounded-xl font-medium hover:opacity-95 transition-opacity group"
                  >
                    <span>Join the waitlist</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Middle: step description */}
              <div className="lg:col-span-4 rounded-[18px] bg-[#F7F7F7] border border-black/5 p-5 md:p-6">
                <motion.p
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-base md:text-lg text-gray-800 leading-relaxed"
                >
                  {steps[activeStep].description}
                </motion.p>
              </div>

              {/* Right: phone emulator (cropped to top) */}
              <div className="lg:col-span-4 rounded-[18px] bg-[#F7F7F7] border border-black/5 pt-5 px-5 pb-0 md:pt-6 md:px-6 md:pb-0 flex items-end justify-center">
                <div className="relative w-full max-w-[360px]">
                  <div className="relative w-full h-[340px] md:h-[380px] overflow-hidden flex justify-center">
                    <motion.div
                      style={{ y: phoneY }}
                      className="relative w-[290px] md:w-[320px] h-[700px]"
                    >
                      <Image
                        src="/images/phone.png"
                        alt="OCHI app on phone"
                        fill
                        className="object-contain object-top"
                        sizes="320px"
                        priority={false}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondLifeSection() {
  const items = [
    "Find people within 1–3 km",
    "Hand-to-hand, no shipping, no extra steps",
    "Items move automatically into their wardrobe",
    "Nothing goes to waste",
  ] as const;

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            Give your clothes
            <br />a second life — effortlessly.
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Pass on the pieces you no longer wear — to
            <br />
            someone just a few streets away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          {/* Left list */}
          <div className="lg:col-span-4">
            <div className="rounded-[18px] bg-white border border-black/10 overflow-hidden">
              {items.map((text, idx) => (
                <div
                  key={text}
                  className={`px-5 py-4 text-sm md:text-base text-gray-900 ${
                    idx === 0 ? "" : "border-t border-black/10"
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-8">
            <div className="relative w-full h-[220px] md:h-[320px] lg:h-[360px] rounded-[18px] overflow-hidden bg-[#F2F2F2] border border-black/10">
              <Image
                src="/bg.png"
                alt="Second life"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How does OCHI create my outfits?",
      a: "From you, the AI version supports up to 60 items — just enough for OCHI to learn your style, understand what you actually wear and give accurate, realistic outfit suggestions. This number will grow as we introduce deeper wardrobe analytics.",
    },
    { q: "Who are the AI stylists and how do they differ?", a: "" },
    { q: "How does the donation feature work in real life?", a: "" },
    { q: "Do I need to upload everything at once?", a: "" },
    { q: "Is OCHI free to use?", a: "" },
    { q: "Can I change my style goal later?", a: "" },
    { q: "How many items can I add to my wardrobe?", a: "" },
    { q: "How often can I get styling advice?", a: "" },
  ] as const;

  const [openIdx, setOpenIdx] = useState<number | null>(6); // open the same card as in the reference

  return (
    <section className="bg-white pt-8 pb-14 md:pt-10 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.h2
          className="text-center text-xl md:text-2xl font-medium text-black mb-8 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frequently Asked questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx((prev) => (prev === idx ? null : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-4 md:px-5 py-4 flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-[15px] text-gray-900">{question}</span>

        <span className="shrink-0 h-7 w-7 rounded-full bg-black text-white flex items-center justify-center">
          {isOpen ? (
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-4 -mt-1">
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-136">
                {answer ||
                  "Answer coming soon — we’ll share details as the product evolves."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaitlistBannerSection({
  onJoinWaitlist,
}: {
  onJoinWaitlist: () => void;
}) {
  return (
    <section className="bg-white pb-3 md:pb-4">
      <div className="mx-auto w-full px-3 md:px-4 lg:px-5">
        <div className="relative overflow-hidden rounded-[28px] h-[380px] md:h-[520px] bg-black">
          <Image
            src="/images/girl.png"
            alt="OCHI"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority={false}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-3xl">
              <p className="text-xs md:text-sm tracking-[0.3em] opacity-90">
                OCHI
              </p>
              <h3 className="mt-3 text-3xl md:text-5xl font-medium leading-tight">
                Made for your present — <br className="hidden md:block" />
                aligned with your future.
              </h3>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={onJoinWaitlist}
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors group"
                >
                  <span>Join the waitlist</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full px-6 md:px-10 lg:px-16 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="text-sm text-gray-800 space-y-2">
            <a className="hover:underline" href="mailto:ochiapp@gmail.com">
              ochiapp@gmail.com
            </a>
            <div>
              <a className="hover:underline" href="tel:+4748372615">
                +47-48372615
              </a>
            </div>
            <p className="text-gray-500">OCHI © 2025</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 md:gap-x-16 gap-y-3 text-sm text-gray-800">
            <div className="flex flex-col gap-3 items-start md:items-end md:text-right">
              <a className="hover:underline" href="#">
                For Stylists
              </a>
              <a className="hover:underline" href="#">
                For Partners
              </a>
              <a className="hover:underline" href="#">
                For Investors
              </a>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-end md:text-right">
              <a className="hover:underline" href="#">
                Terms of Use
              </a>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LookFeedbackSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [0, 0.6, 1]
  );
  const firstOverlayOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const secondOverlayOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.8, 0.95],
    [0, 0, 1, 1]
  );

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="h-[1100px] sm:h-[1250px] md:h-[1800px] relative">
          <div className="md:sticky md:top-24 flex justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-[420px]">
              {/* Image */}
              <motion.div
                style={{ opacity: imageOpacity }}
                className="relative w-full aspect-3/4 rounded-[24px] overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/girl.png"
                  alt="Styled look"
                  fill
                  className="object-cover"
                  sizes="420px"
                  priority
                />
              </motion.div>

              {/* Left overlays - partially overlapping */}
              <div className="hidden sm:flex absolute inset-y-0 -left-6 md:-left-12 flex-col justify-center gap-3 pointer-events-none">
                <motion.div
                  style={{ opacity: firstOverlayOpacity }}
                  className="space-y-3"
                >
                  <OverlayPill color="#FF7648" label="Coral" />
                  <OverlayPill color="#EA3323" label="Red" />
                  <OverlayPill color="#D9A51C" label="Turmeric" />
                  <OverlayPill color="#D8C7AA" label="Beige" />
                </motion.div>

                <motion.div
                  style={{ opacity: secondOverlayOpacity }}
                  className="space-y-3"
                >
                  <OverlayComment
                    name="Leonardo"
                    text="Let's sharpen this. Go bolder."
                  />
                  <OverlayComment
                    name="Mia"
                    text="This really suits you. Let's highlight this energy."
                  />
                  <OverlayComment
                    name="Marcus"
                    text="Add structure for a cleaner, more balanced line."
                  />
                  <OverlayComment
                    name="Sofia"
                    text="Soften the palette — it will look richer."
                  />
                </motion.div>
              </div>

              {/* Right overlays - partially overlapping */}
              <div className="hidden sm:flex absolute inset-y-0 -right-6 md:-right-12 flex-col justify-center gap-3 pointer-events-none items-end">
                <motion.div
                  style={{ opacity: firstOverlayOpacity }}
                  className="space-y-3 flex flex-col items-end"
                >
                  <OverlayLabel label="Summer" />
                  <OverlayLabel label="T-shirts" />
                  <OverlayLabel label="Casual" />
                  <OverlayLabel label="Cotton" />
                </motion.div>
              </div>

              {/* Bottom speech bubble - overlapping bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] pointer-events-none z-10">
                <motion.div style={{ opacity: firstOverlayOpacity }}>
                  <OverlaySpeech>
                    How is my look today, what do you think?
                  </OverlaySpeech>
                </motion.div>

                <motion.div style={{ opacity: secondOverlayOpacity }}>
                  <OverlaySpeech>
                    How is my look today, what do you think?
                  </OverlaySpeech>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverlayPill({
  className,
  color,
  label,
}: {
  className?: string;
  color: string;
  label: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 bg-white rounded-full shadow-sm px-3 py-2 text-sm text-gray-800 ${className}`}
    >
      <span
        className="h-3.5 w-3.5 rounded-full border border-black/10"
        style={{ backgroundColor: color }}
      ></span>
      <span>{label}</span>
    </div>
  );
}

function OverlayLabel({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`bg-white rounded-[14px] shadow-sm px-3 py-2 text-xs text-gray-800 ${className}`}
    >
      {label}
    </div>
  );
}

function OverlaySpeech({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white rounded-[16px] shadow-md px-4 py-3 text-sm text-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}

function OverlayComment({
  className,
  name,
  text,
}: {
  className?: string;
  name: string;
  text: string;
}) {
  return (
    <div
      className={`bg-white rounded-[16px] shadow-md px-4 py-3 text-sm text-gray-800 max-w-[210px] ${className}`}
    >
      <p className="font-medium text-gray-900">{name}</p>
      <p className="text-gray-600 mt-1 leading-relaxed">{text}</p>
    </div>
  );
}

function BentoSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-3">
            Everything you actually need — in one place.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            A flexible system that keeps your wardrobe moving with you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[180px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Upload Your Wardrobe
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Add, crop, tag, and organize.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-3 flex items-end justify-center p-4 pb-0"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div className="relative w-full h-full max-w-[260px]">
              <Image
                src="/images/phone.png"
                alt="Wardrobe app on phone"
                fill
                className="object-contain object-bottom"
                sizes="260px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">AI Stylists</p>
              <p className="text-gray-500 text-sm mt-2">
                Looks tailored to you.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Daily Suggestions
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Outfits ready every morning.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">Style Goals</p>
              <p className="text-gray-500 text-sm mt-2">
                Stay aligned with your direction.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-1 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">Style Goals</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-6 md:row-span-1 flex items-center justify-center text-center p-6"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Outfit Planner
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Plan trips and big days.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl bg-[#F9F9F9] md:col-span-6 md:row-span-1 flex items-center justify-center text-center p-6"
          >
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Smart Donation
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Let go with intention.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
