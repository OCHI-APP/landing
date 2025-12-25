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
        <main className="flex-1 relative z-10 flex items-center justify-center">
          {/* Placeholder for small image visibility logic */}
          {!isExpanded && (
            <motion.div
              layoutId="hero-image"
              className="relative w-full max-w-[400px] aspect-4/3 overflow-hidden rounded-lg border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/video-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/bg.png"
              />
            </motion.div>
          )}

          {/* Centered Hero Content (overlay) */}
          <div className="absolute inset-0 px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-center text-center gap-6 sm:gap-8 pointer-events-none">
                <motion.div
                  className="w-full"
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

                <motion.div
                  className="flex flex-col items-center gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md mx-auto mix-blend-difference">
                    Dress with intention — using the pieces you already own.
                  </p>

                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors self-center group pointer-events-auto"
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

        {/* Expanded Fullscreen Video */}
        {isExpanded && (
          <motion.div
            layoutId="hero-image"
            className="absolute inset-0 z-0 overflow-hidden"
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/video-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/bg.png"
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
          <div className="sticky top-20 md:top-24">
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
          <div className="sticky top-20 md:top-24 flex justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-[420px]">
              {/* Image */}
              <motion.div
                style={{ opacity: imageOpacity }}
                className="relative z-10 w-full aspect-3/4 rounded-[32px] overflow-hidden shadow-lg"
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
              <div className="flex absolute inset-y-0 left-0 z-20 flex-col justify-center gap-6 sm:gap-8 pointer-events-none">
                <motion.div
                  style={{ opacity: firstOverlayOpacity }}
                  className="space-y-5 sm:space-y-7"
                >
                  <OverlayPill
                    className="-translate-x-[46%] sm:-translate-x-[78%]"
                    color="#FF7648"
                    label="Coral"
                  />
                  <OverlayPill
                    className="-translate-x-[46%] sm:-translate-x-[78%]"
                    color="#EA3323"
                    label="Red"
                  />
                  <OverlayPill
                    className="-translate-x-[46%] sm:-translate-x-[78%]"
                    color="#D9A51C"
                    label="Turmeric"
                  />
                  <OverlayPill
                    className="-translate-x-[46%] sm:-translate-x-[78%]"
                    color="#D8C7AA"
                    label="Beige"
                  />
                </motion.div>
              </div>

              {/* Right overlays - partially overlapping */}
              <div className="flex absolute inset-y-0 right-0 z-20 flex-col justify-center gap-6 sm:gap-8 pointer-events-none items-end">
                <motion.div
                  style={{ opacity: firstOverlayOpacity }}
                  className="space-y-5 sm:space-y-7 flex flex-col items-end"
                >
                  <OverlayLabel
                    className="translate-x-[46%] sm:translate-x-[78%]"
                    label="Summer"
                  />
                  <OverlayLabel
                    className="translate-x-[46%] sm:translate-x-[78%]"
                    label="T-shirts"
                  />
                  <OverlayLabel
                    className="translate-x-[46%] sm:translate-x-[78%]"
                    label="Casual"
                  />
                  <OverlayLabel
                    className="translate-x-[46%] sm:translate-x-[78%]"
                    label="Cotton"
                  />
                </motion.div>
              </div>

              {/* Second scroll: stacked comment cards (like the reference) */}
              <motion.div
                style={{ opacity: secondOverlayOpacity }}
                className="absolute inset-y-0 -bottom-[40%] left-1/2 -translate-x-[104%] sm:-translate-x-[140%] z-30 flex items-center pointer-events-none"
              >
                <div className="space-y-4 sm:space-y-5">
                  <OverlayReviewCard
                    name="Leonardo"
                    text="Let's sharpen this. Go bolder."
                  />
                  <OverlayReviewCard
                    name="Mia"
                    text="This really suits you. Let's highlight this energy."
                  />
                  <OverlayReviewCard
                    name="Marcus"
                    text="Add structure for a cleaner, more balanced line."
                  />
                  <OverlayReviewCard
                    name="Sofia"
                    text="Soften the palette — it will look richer."
                  />
                </div>
              </motion.div>

              {/* Bottom speech bubble - overlapping bottom */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-10 w-[92%] sm:w-[min(520px,92%)] pointer-events-none z-20">
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
      className={`flex items-center gap-3 bg-white rounded-full shadow-md px-3 py-2 sm:px-6 sm:py-4 text-sm sm:text-base md:text-lg text-gray-900 ${className}`}
    >
      <span
        className="h-4 w-4 sm:h-5 sm:w-5 rounded-full border border-black/10"
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
      className={`bg-white rounded-[18px] shadow-md px-3 py-2 sm:px-6 sm:py-4 text-sm sm:text-base md:text-lg text-gray-900 ${className}`}
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
      className={`bg-white rounded-[22px] shadow-lg px-4 py-3 sm:px-6 sm:py-5 text-sm sm:text-base md:text-lg text-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}

function OverlayReviewCard({ name, text }: { name: string; text: string }) {
  const avatarSrc =
    name === "Leonardo"
      ? "/images/Instagram%20Post-1.png"
      : name === "Mia"
      ? "/images/Instagram%20Post-2.png"
      : name === "Marcus"
      ? "/images/Instagram%20Post-3.png"
      : "/images/Instagram%20Post-4.png";

  return (
    <div className="bg-white rounded-[20px] shadow-lg px-4 py-3 w-[210px] sm:w-[320px]">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 rounded-full overflow-hidden bg-gray-200 shrink-0">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <p className="text-base sm:text-lg font-medium text-gray-900">{name}</p>
      </div>
      <p className="mt-2 text-sm sm:text-lg italic text-gray-800 leading-relaxed">
        {text}
      </p>
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
  const screens = {
    default: { src: "/images/phone.png", alt: "OCHI app on phone" },
    aiStylists: { src: "/images/AI%20Stylists.png", alt: "AI Stylists" },
    daily: { src: "/images/Daily%20Suggestions.png", alt: "Daily Suggestions" },
    styleGoals: { src: "/images/Style%20Goals.png", alt: "Style Goals" },
    planner: { src: "/images/Planner.png", alt: "Outfit Planner" },
    donation: { src: "/images/Donation.png", alt: "Smart Donation" },
  } as const;

  type ScreenKey = keyof typeof screens;
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("default");

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
          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("default")}
            className={`relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-1 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "default" ? "shadow-sm" : ""
            }`}
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <WardrobeIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">
                Upload Your Wardrobe
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Add, crop, tag, and organize.
              </p>
            </div>
          </motion.button>

          <motion.div
            variants={item}
            className="relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-3 flex items-end justify-center p-4 pb-0"
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div className="relative w-full h-full max-w-[260px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screens[activeScreen].src}
                    alt={screens[activeScreen].alt}
                    fill
                    className="object-contain object-bottom"
                    sizes="260px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("aiStylists")}
            className={`relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-1 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "aiStylists" ? "shadow-sm" : ""
            }`}
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <SparkleIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">AI Stylists</p>
              <p className="text-gray-500 text-sm mt-2">
                Looks tailored to you.
              </p>
            </div>
          </motion.button>

          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("daily")}
            className={`relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "daily" ? "shadow-sm" : ""
            }`}
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <MagicWandIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">
                Daily Suggestions
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Outfits ready every morning.
              </p>
            </div>
          </motion.button>

          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("styleGoals")}
            className={`relative rounded-[10px] bg-[#F9F9F9] md:col-span-4 md:row-span-2 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "styleGoals" ? "shadow-sm" : ""
            }`}
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <TargetIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">Style Goals</p>
              <p className="text-gray-500 text-sm mt-2">
                Stay aligned with your direction.
              </p>
            </div>
          </motion.button>

          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("planner")}
            className={`relative rounded-[10px] bg-[#F9F9F9] md:col-span-6 md:row-span-1 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "planner" ? "shadow-sm" : ""
            }`}
          >
            <span className="absolute top-2 left-2 h-6 w-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
              +
            </span>
            <div>
              <CalendarIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">
                Outfit Planner
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Plan trips and big days.
              </p>
            </div>
          </motion.button>

          <motion.button
            variants={item}
            type="button"
            onClick={() => setActiveScreen("donation")}
            className={`rounded-2xl bg-[#F9F9F9] md:col-span-6 md:row-span-1 flex items-center justify-center text-center p-6 cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-black/10 ${
              activeScreen === "donation" ? "shadow-sm" : ""
            }`}
          >
            <div>
              <HeartIcon className="mx-auto mb-4 h-9 w-9 md:h-10 md:w-10 text-[#262626]" />
              <p className="text-lg font-semibold text-gray-900">
                Smart Donation
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Let go with intention.
              </p>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M39 7.5H9A1.5 1.5 0 0 0 7.5 9v30A1.5 1.5 0 0 0 9 40.5h30a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 39 7.5Zm-6-3v6m-18-6v6m-7.5 6h33"
      />
      <path
        fill="currentColor"
        d="M24 27a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm8.25 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm-16.5 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm8.25 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm8.25 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15.8 32.2 5.472 28.392a1.485 1.485 0 0 1 0-2.786l10.33-3.806 3.806-10.33a1.485 1.485 0 0 1 2.786 0L26.2 21.8l10.33 3.806a1.485 1.485 0 0 1 0 2.786L26.199 32.2l-3.806 10.33a1.485 1.485 0 0 1-2.786 0L15.8 32.199ZM33 3v9m9 1.5v6m-13.5-12h9m1.5 9h6"
      />
    </svg>
  );
}

function WardrobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M32.118 38.048H42m-4.94-4.941v9.882M18.796 19.785h-1.647m13.175 0h-1.647"
      />
      <path
        fill="currentColor"
        d="M37.571 5.108c.578 0 1.135.2 1.577.564l.183.165.165.182c.363.443.563 1 .564 1.577V29.25h-3V8.108H25.236v29.94h2.808v3H9.902a2.489 2.489 0 0 1-2.488-2.489V7.596c0-.66.262-1.293.729-1.76l.182-.164a2.49 2.49 0 0 1 1.577-.564h27.67Zm-27.157 32.94h11.822V8.108H10.414v29.94Z"
      />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24 24 42 6m-5.273 5.273a17.978 17.978 0 1 0 3.52 4.966"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M30.364 17.636a9 9 0 1 0 2.625 5.85"
      />
    </svg>
  );
}

function MagicWandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M40.5 24v9M36 28.5h9m-30-21v9M10.5 12h9m12 22.5v6m-3-3h6M27 15l6 6m1.06-13.061L7.94 34.06a1.5 1.5 0 0 0 0 2.122l3.878 3.878a1.5 1.5 0 0 0 2.121 0L40.06 13.938a1.5 1.5 0 0 0 0-2.12l-3.878-3.879a1.5 1.5 0 0 0-2.122 0Z"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M6 25.5h7.5l3-4.5 6 9 3-4.5H30"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M4.5 19.5v-.375A10.125 10.125 0 0 1 14.625 9c4.236 0 7.864 2.308 9.375 6 1.511-3.692 5.14-6 9.375-6A10.125 10.125 0 0 1 43.5 19.125C43.5 31.5 24 42 24 42s-7.875-4.237-13.609-10.5"
      />
    </svg>
  );
}
