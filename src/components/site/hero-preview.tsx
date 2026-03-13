"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Bot,
  FileText,
  FlaskConical,
  MessagesSquare,
  Search,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const pills = [
  {
    label: "Prompt-first trial search",
    className: "left-0 top-8 sm:left-6",
    icon: Search,
    delay: 0.2,
  },
  {
    label: "Portfolio-wide analysis",
    className: "right-0 top-12 sm:right-6",
    icon: Sparkles,
    delay: 0.45,
  },
  {
    label: "Study-level AI chat",
    className: "left-2 top-[48%] sm:left-0",
    icon: MessagesSquare,
    delay: 0.6,
  },
  {
    label: "Protocol report generation",
    className: "right-2 top-[52%] sm:right-0",
    icon: FileText,
    delay: 0.8,
  },
  {
    label: "Agentic deep research",
    className: "left-8 bottom-16 sm:left-8",
    icon: Bot,
    delay: 1,
  },
];

const resultRows = [
  {
    title: "TARGET-123 Study",
    meta: "Recruiting · 18 sites · Phase 2",
    strength: "Open to site",
    width: "78%",
  },
  {
    title: "PIONEER 201 Therapy Trial",
    meta: "Recruiting · Biomarker match",
    strength: "Filtered set",
    width: "61%",
  },
  {
    title: "Midsight T-cell Scope",
    meta: "Active, not recruiting · 9 countries",
    strength: "Deep review",
    width: "46%",
  },
];

const insightRows = [
  "Recommended dose-escalation scheme",
  "High-signal inclusion criteria",
  "Relevant comparator patterns",
  "Endpoints seen across matched trials",
];

export function HeroPreview() {
  const frameRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  });
  const liftY = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 18,
  });

  const ambient = useMemo(
    () => ({
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      },
    }),
    [],
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = frameRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateYValue = ((x / bounds.width) - 0.5) * 10;
    const rotateXValue = -((y / bounds.height) - 0.5) * 9;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    liftY.set(-8);
  };

  const resetMotion = () => {
    rotateX.set(0);
    rotateY.set(0);
    liftY.set(0);
  };

  return (
    <div className="relative mx-auto mt-16 w-full max-w-[1180px] px-2 sm:px-6">
      <div className="hero-preview-glow hero-preview-glow--left" />
      <div className="hero-preview-glow hero-preview-glow--right" />

      {pills.map(({ label, className, icon: Icon, delay }) => (
        <motion.div
          key={label}
          className={`floating-capability-pill ${className}`}
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{
            duration: 7 + delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            ease: "easeInOut",
            delay,
          }}
        >
          <span className="floating-capability-pill__icon">
            <Icon className="h-4 w-4" />
          </span>
          {label}
        </motion.div>
      ))}

      <div
        ref={frameRef}
        className="relative mx-auto max-w-[900px] perspective-[2200px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMotion}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -8, 0] }}
          {...ambient}
        >
          <motion.div
            style={{ rotateX, rotateY, y: liftY, transformStyle: "preserve-3d" }}
            className="product-shell"
          >
            <div className="product-shell__toolbar">
              <div className="flex items-center gap-3">
                <span className="product-badge">
                  <Stethoscope className="h-3.5 w-3.5" />
                  Oncology Trials
                </span>
                <span className="product-toolbar-chip">Filtered set</span>
              </div>

              <div className="flex items-center gap-2 text-[#6f8f93]">
                <span className="product-window-dot bg-[#9debc8]" />
                <span className="product-window-dot bg-[#7fd8ff]" />
                <span className="product-window-dot bg-[#ccd9db]" />
              </div>
            </div>

            <div className="grid gap-4 p-4 lg:grid-cols-[88px_minmax(0,1.65fr)_minmax(0,1fr)] lg:p-5">
              <div className="product-sidebar">
                <div className="product-sidebar__brand">
                  <FlaskConical className="h-4 w-4" />
                </div>
                {["Search", "Results", "Reports", "Agents"].map((item, index) => (
                  <div
                    key={item}
                    className={`product-sidebar__item ${index === 1 ? "product-sidebar__item--active" : ""}`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="product-filter-row">
                  <span className="product-filter-chip">Biomarker+</span>
                  <span className="product-filter-chip">Immunotherapy</span>
                  <span className="product-filter-chip">Recruiting</span>
                </div>

                <div className="space-y-3">
                  {resultRows.map((row, index) => (
                    <motion.div
                      key={row.title}
                      className="result-card"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#60d6b8]" />
                            <h3 className="truncate text-sm font-semibold text-[#153439]">
                              {row.title}
                            </h3>
                          </div>
                          <p className="mt-1 text-xs text-[#6b8b90]">{row.meta}</p>
                        </div>
                        <span className="result-card__badge">{row.strength}</span>
                      </div>
                      <div className="result-card__meter">
                        <span style={{ width: row.width }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="insight-panel">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#153439]">
                      Protocol Insights
                    </p>
                    <p className="mt-1 text-xs text-[#6b8b90]">
                      Fast clinical synthesis from the matched study set.
                    </p>
                  </div>
                  <span className="insight-panel__spark">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {insightRows.map((item) => (
                    <div key={item} className="insight-row">
                      <span className="insight-row__bullet" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[24px] border border-[#d9ece8] bg-white/70 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0f3135]">
                    <MessagesSquare className="h-4 w-4 text-[#0a7b6d]" />
                    Cross-study answer draft
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#58767a]">
                    Trials converge on narrower biomarker gates, tighter prior-therapy
                    controls, and endpoint language optimized for earlier signal detection.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="product-pedestal"
            animate={{ scaleX: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
            {...ambient}
          />
        </motion.div>
      </div>
    </div>
  );
}
