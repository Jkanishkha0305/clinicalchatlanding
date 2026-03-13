"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Clock3,
  Files,
  FileText,
  FlaskConical,
  FolderX,
  MessageSquareText,
  ScanText,
  ScanSearch,
  Sparkles,
} from "lucide-react";

import { AxentraMark } from "@/components/site/axentra-mark";
import { HeroPreview } from "@/components/site/hero-preview";
import { InteractiveTilt } from "@/components/site/interactive-tilt";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const PRODUCT_URL =
  process.env.NEXT_PUBLIC_PRODUCT_URL ?? "https://clinicalchat.vercel.app";

const workflowCards = [
  {
    title: "Discover",
    description:
      "Find relevant trials with structured filters or natural-language prompts.",
    icon: ScanSearch,
  },
  {
    title: "Analyze",
    description:
      "Ask questions across a filtered study set and get evidence-backed answers.",
    icon: Sparkles,
  },
  {
    title: "Inspect",
    description:
      "Open a single study and chat directly against protocol details.",
    icon: MessageSquareText,
  },
  {
    title: "Generate",
    description:
      "Turn matched evidence into protocol-ready direction and reports.",
    icon: FileText,
  },
];

const comparisonManual = [
  {
    icon: Files,
    text: "Too many tabs and disconnected tools",
  },
  {
    icon: Clock3,
    text: "Slow trial review cycles",
  },
  {
    icon: ScanText,
    text: "Scattered evidence with shallow summaries",
  },
  {
    icon: FolderX,
    text: "No reusable workspace for ongoing analysis",
  },
];

const comparisonSmart = [
  {
    icon: ScanSearch,
    text: "One searchable interface for discovery and review",
  },
  {
    icon: Sparkles,
    text: "Cross-study AI answers in context",
  },
  {
    icon: MessageSquareText,
    text: "Single-study deep dives when details matter",
  },
  {
    icon: FileText,
    text: "Saved reports and repeatable research workflows",
  },
];

const faqItems = [
  {
    question: "What is ClinicalChat?",
    answer:
      "ClinicalChat is Axentra's clinical trial intelligence workspace. It brings search, study review, cross-study analysis, and protocol insight generation into one interface.",
  },
  {
    question: "Who is it for?",
    answer:
      "It is designed for teams doing clinical strategy, protocol research, competitive trial review, or early design exploration who need faster evidence synthesis.",
  },
  {
    question: "Can it analyze one study and a full study set?",
    answer:
      "Yes. You can open a single study for focused chat or work across a filtered portfolio of studies to identify patterns, tradeoffs, and strategic direction.",
  },
  {
    question: "Can I generate protocol research reports?",
    answer:
      "Yes. ClinicalChat can generate protocol-oriented research outputs from matched evidence so teams can move from exploration into structured planning faster.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export function LandingPage() {
  return (
    <div className="landing-page">
      <div className="page-grid-overlay" />
      <div className="page-aura page-aura--left" />
      <div className="page-aura page-aura--right" />

      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <div className="nav-shell mx-auto w-full max-w-[1120px]">
          <Link href="/" className="flex items-center gap-3 text-[#103138] no-underline">
            <span className="brand-lockup__mark">
              <AxentraMark />
            </span>
            <span className="brand-lockup__text brand-lockup__text--caps">AXENTRA</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#57747b] md:flex">
            <a href="#how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="#why-clinicalchat" className="nav-link">
              Why ClinicalChat
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
          </nav>

          <Button asChild size="lg">
            <a href={PRODUCT_URL} target="_blank" rel="noreferrer">
              Try the product
              <ArrowRight />
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pb-20">
        <section className="section-shell pt-12 sm:pt-16">
          <motion.div
            className="mx-auto max-w-[1080px] text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="section-kicker justify-center">
              <span className="section-kicker__dot" />
              Clinical Trial Intelligence Workspace
            </div>

            <h1 className="hero-title">
              <span className="hero-title__line">Search trials.</span>
              <span className="hero-title__line">Chat across evidence.</span>
              <span className="hero-title__line hero-title__accent">
                Generate protocol direction.
              </span>
            </h1>

            <p className="hero-copy">
              <strong>ClinicalChat</strong> helps teams search clinical trials,
              chat across evidence, inspect individual studies, and generate
              protocol direction in one focused workspace.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={PRODUCT_URL} target="_blank" rel="noreferrer">
                  Try ClinicalChat
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#how-it-works">See the workspace</a>
              </Button>
            </div>
          </motion.div>

          <HeroPreview />
        </section>

        <motion.section
          id="how-it-works"
          className="section-shell pt-8 sm:pt-14"
          {...reveal}
        >
          <div className="mx-auto max-w-[950px] text-center">
            <div className="section-kicker justify-center">
              <FlaskConical className="h-4 w-4" />
              How it works
            </div>
            <h2 className="section-title">
              One workspace. Four high-value workflows.
            </h2>
            <p className="section-copy">
              Enough structure to feel precise. Enough AI assistance to move
              faster.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflowCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <InteractiveTilt className="workflow-card">
                    <div className="workflow-card__orb" />
                    <div className="workflow-card__scanline" />
                    <div className="workflow-card__icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="workflow-card__title">{card.title}</h3>
                    <p className="workflow-card__copy">{card.description}</p>
                  </InteractiveTilt>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="why-clinicalchat"
          className="section-shell pt-10 sm:pt-18"
          {...reveal}
        >
          <div className="comparison-shell">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="section-kicker justify-center">
                <Bot className="h-4 w-4" />
                Why ClinicalChat
              </div>
              <h2 className="section-title">The manual way vs the ClinicalChat way</h2>
              <p className="section-copy">
                Fewer tabs. Faster evidence review. Better strategic context.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_180px_1fr] lg:items-stretch">
              <InteractiveTilt
                className="comparison-column comparison-column--muted"
                maxTilt={3.25}
                scale={1.012}
              >
                <span className="comparison-column__glow comparison-column__glow--muted" />
                <span className="comparison-column__label">Manual</span>
                <div className="mt-4 space-y-4">
                  {comparisonManual.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.text} className="comparison-item comparison-item--soft">
                        <span className="comparison-item__icon comparison-item__icon--muted">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </InteractiveTilt>

              <div className="comparison-pillars">
                <motion.div
                  className="comparison-pillar comparison-pillar--negative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                >
                  <span>FRICTION</span>
                </motion.div>
                <motion.div
                  className="comparison-pillar comparison-pillar--positive"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                >
                  <span>CLARITY</span>
                </motion.div>
              </div>

              <InteractiveTilt
                className="comparison-column comparison-column--active"
                maxTilt={3.25}
                scale={1.012}
              >
                <span className="comparison-column__glow comparison-column__glow--active" />
                <span className="comparison-column__label comparison-column__label--active">
                  ClinicalChat
                </span>
                <div className="mt-4 space-y-4">
                  {comparisonSmart.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.text} className="comparison-item comparison-item--bright">
                        <span className="comparison-item__icon comparison-item__icon--bright">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </InteractiveTilt>
            </div>
          </div>
        </motion.section>

        <motion.section id="faq" className="section-shell pt-10 sm:pt-18" {...reveal}>
          <div className="mx-auto max-w-[860px] text-center">
            <div className="section-kicker justify-center">
              <Sparkles className="h-4 w-4" />
              Common questions
            </div>
            <h2 className="section-title">Simple product. Serious capability.</h2>
            <p className="section-copy">
              Minimal onboarding, focused workflows, and a cleaner path from
              search to insight.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[1080px]">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="faq-card"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        <motion.section className="section-shell pt-10 sm:pt-18" {...reveal}>
          <div className="cta-island">
            <div className="max-w-[620px]">
              <div className="section-kicker section-kicker--dark">
                <span className="section-kicker__dot" />
                ClinicalChat by Axentra
              </div>
              <h2 className="cta-title">
                Start with the workspace. Leave with clearer trial direction.
              </h2>
              <p className="cta-copy">
                The product is already live. The landing page just gets people
                there with the right story.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={PRODUCT_URL} target="_blank" rel="noreferrer">
                  Try the product
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#how-it-works">Explore the workflow</a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="section-shell relative z-10 pt-2 pb-10">
        <div className="footer-shell">
          <div>
            <div className="flex items-center gap-3 text-[#11353b]">
              <span className="brand-lockup__mark">
                <AxentraMark />
              </span>
              <div>
                <div className="brand-lockup__text brand-lockup__text--caps text-[1.02rem]">
                  AXENTRA
                </div>
                <div className="footer-caption">ClinicalChat workspace</div>
              </div>
            </div>
            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#5d797d]">
              A focused clinical trial intelligence workspace for search,
              evidence review, protocol thinking, and AI-assisted research.
            </p>
          </div>

          <div className="footer-links">
            <a href="#how-it-works" className="footer-link">
              How It Works
            </a>
            <a href="#why-clinicalchat" className="footer-link">
              Why ClinicalChat
            </a>
            <a href="#faq" className="footer-link">
              FAQ
            </a>
            <a href={PRODUCT_URL} target="_blank" rel="noreferrer" className="footer-link">
              Live product
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
