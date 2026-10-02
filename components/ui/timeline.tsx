"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineStage = {
  id: string;
  label: string;
  description: string;
  tags: string[];
};

export type TimelineProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  stages?: TimelineStage[];
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

const defaultStages: TimelineStage[] = [
  {
    id: "understand",
    label: "Understand your business",
    description:
      "We start by learning about your customers, workflows, policies and business goals. We identify what your conversations need to achieve and where an AI agent can help.",
    tags: ["Business goals", "Customer needs", "Workflows", "Policies"],
  },
  {
    id: "build",
    label: "Build around your needs",
    description:
      "Our team configures your agent, optimizes its instructions, adds relevant knowledge, connects the necessary actions and defines when it should involve a human.",
    tags: ["Strategy", "Configuration", "Knowledge", "Actions"],
  },
  {
    id: "optimize",
    label: "Test, learn and optimize",
    description:
      "We test how the agent handles different scenarios, identify gaps and refine its responses and behavior to better meet your business requirements.",
    tags: ["Testing", "Evaluation", "Refinement", "Improvement"],
  },
];

export default function Timeline({
  eyebrow = "Our approach",
  title = "We learn your business before we build your AI.",
  subtitle = "Our team turns your business requirements into a purpose-built AI agent, then tests and refines it around the conversations that matter.",
  stages = defaultStages,
  textColor = "#ffffff",
  mutedTextColor = "#a1a1aa",
  activeColor = "#b4b4ec",
  backgroundColor = "#1b1b3c",
  imageUrl = "/images/clara-workflow.webp",
  imageAlt = "Clara workflow",
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  const topStages = stages.filter((_, i) => i % 2 === 0);
  const bottomStages = stages.filter((_, i) => i % 2 !== 0);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = window.innerWidth < 600;
    const slidePercent = isMobile ? -35 : -38;
    const lineWidth = isMobile ? "65%" : "98%";
    const lineStart = isMobile ? "top 30%" : "top 25%";
    const slideEnd = isMobile ? "82% 50%" : "90% bottom";
    const lineEnd = isMobile ? "80% 50%" : "90% bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: slideEnd,
        scrub: true,
      },
      defaults: { ease: "none" },
    });

    tl.fromTo(
      wholeSliderRef.current,
      { xPercent: 0 },
      { xPercent: slidePercent },
    );

    if (reducedMotion) {
      gsap.set(".journey-line", { width: lineWidth });
      return;
    }

    gsap.to(".journey-line", {
      width: lineWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: lineStart,
        end: lineEnd,
        scrub: true,
      },
    });
  }, { dependencies: [reducedMotion], scope: sectionRef });

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      stages.forEach((stage) => {
        gsap.set(`.jl-${stage.id}`, { scaleY: 1 });
        gsap.set(`.jd-${stage.id}`, { scale: 1 });
        gsap.set(`.title-${stage.id}`, { opacity: 1, clearProps: "transform" });
        gsap.set(`.description-${stage.id}`, { opacity: 1, clearProps: "transform" });
        gsap.set(`.tags-${stage.id}`, { opacity: 1, clearProps: "transform" });
      });
      return;
    }

    stages.forEach((stage) => {
      gsap.set(`.jl-${stage.id}`, { scaleY: 0, transformOrigin: "bottom bottom" });
      gsap.set(`.jd-${stage.id}`, { scale: 0 });
      gsap.set(`.title-${stage.id}`, { opacity: 1 });
      gsap.set(`.description-${stage.id}`, { opacity: 1 });
      gsap.set(`.tags-${stage.id}`, { opacity: 0, y: 20 });
    });

    const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
    const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

    stages.forEach((stage) => {
      titleSplits[stage.id] = new SplitText(`.title-${stage.id}`, {
        type: "chars, words, lines",
        mask: "lines",
      });
      descriptionSplits[stage.id] = new SplitText(`.description-${stage.id}`, {
        type: "chars, words, lines",
        mask: "lines",
      });
    });

    const createItemTimeline = (
      stage: TimelineStage,
      startPos: number,
      endPos: number,
      isTop: boolean,
    ) => {
      const lineSelector = `.jl-${stage.id}`;
      const dotSelector = `.jd-${stage.id}`;
      const tagsSelector = `.tags-${stage.id}`;
      const titleLines = titleSplits[stage.id]?.lines || [];
      const descriptionLines = descriptionSplits[stage.id]?.lines || [];

      if (!isTop) {
        gsap.set(lineSelector, { transformOrigin: "top top" });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${startPos}% 30%`,
          end: `${endPos}% 50%`,
          scrub: true,
        },
      });

      timeline
        .to(lineSelector, { scaleY: 1, duration: normalizedDuration * 0.4 })
        .to(dotSelector, { scale: 1, duration: normalizedDuration * 0.4 }, "<")
        .fromTo(
          titleLines,
          { y: 100 },
          {
            y: 0,
            delay: -0.8 * normalizedDuration,
            duration: normalizedDuration,
            stagger: 0.02,
            ease: "power2.out",
          },
        )
        .fromTo(
          descriptionLines,
          { y: 100 },
          {
            y: 0,
            duration: normalizedDuration,
            stagger: 0.02,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          tagsSelector,
          { opacity: 1, y: 0, duration: normalizedDuration * 0.6, ease: "power2.out" },
          "<+=0.3",
        );

      return timeline;
    };

    const positions: ReadonlyArray<readonly [number, number]> =
      window.innerWidth < 600
        ? [
            [20, 36],
            [38, 54],
            [56, 72],
          ]
        : [
            [15, 38],
            [35, 58],
            [55, 78],
          ];

    stages.forEach((stage, index) => {
      const [startPos, endPos] = positions[index];
      const isTop = index % 2 === 0;
      createItemTimeline(stage, startPos, endPos, isTop);
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      Object.values(titleSplits).forEach((split) => split?.revert?.());
      Object.values(descriptionSplits).forEach((split) => split?.revert?.());
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [normalizedDuration, reducedMotion, stages], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="h-[140vw] max-[600px]:h-[280vh] w-full relative"
      style={sectionStyle}
    >
      {/* Static intro — sits above the pinned scroll */}
      <div
        className="flex flex-col items-center text-center px-[5vw] pt-[6vw] pb-[2vw] max-[600px]:pt-[14vw] max-[600px]:pb-[6vw]"
        style={sectionStyle}
      >
        {eyebrow ? (
          <p
            className="text-[.85vw] font-semibold uppercase tracking-[.18em] mb-[1.2vw] max-[600px]:text-[3vw] max-[600px]:mb-[3vw]"
            style={{ color: activeColor }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-[3.2vw] leading-[1.1] font-semibold max-w-[36vw] max-[600px]:text-[7.5vw] max-[600px]:max-w-[85vw]">
          {title}
        </h2>
        <p
          className="text-[1.15vw] leading-[1.55] max-w-[32vw] mt-[1.2vw] max-[600px]:text-[4vw] max-[600px]:max-w-[85vw] max-[600px]:mt-[3vw]"
          style={mutedTextStyle}
        >
          {subtitle}
        </p>
      </div>

      {/* Pinned horizontal-scroll track */}
      <div className="h-screen w-screen sticky top-0 pt-[8%] overflow-hidden max-[600px]:top-[5%]">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] w-[160vw] items-center gap-[4vw] px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[500vw] max-[600px]:px-[7vw]"
        >
          {/* Panel 1: Image */}
          <div className="h-full w-[28vw] flex-shrink-0 overflow-hidden rounded-[1vw] max-[600px]:h-[60vw] max-[600px]:w-[85vw] max-[600px]:rounded-[4vw]">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Panels 2-4: Timeline track */}
          <div className="relative h-full w-full">
            {/* Connector line */}
            <div className="w-full absolute left-0 top-[49%] translate-y-[-50%] flex items-center h-fit">
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full"
                style={activeStyle}
              />
              <div
                className="h-px w-[0%] rounded-full journey-line"
                style={activeStyle}
              />
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full"
                style={activeStyle}
              />
            </div>

            {/* Top row (stages at even indices: 0, 2) */}
            <div className="flex h-1/2 w-full items-center justify-start">
              <div className="w-full flex h-full gap-x-[14vw] max-[600px]:gap-x-[40vw]">
                {topStages.map((stage) => (
                  <div
                    key={`top-${stage.id}`}
                    className="relative h-full w-[30vw] px-[3vw] max-[600px]:flex max-[600px]:w-[75vw] max-[600px]:flex-col max-[600px]:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative aspect-square rounded-full jd-${stage.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`h-[94%] w-px origin-bottom rounded-full jl-${stage.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="mt-[-1vw] space-y-[.8vw] max-[600px]:mt-[-2vw] max-[600px]:space-y-[2vw]">
                      <h3
                        className={`title-${stage.id} text-[2vw] leading-[1.1] font-semibold max-[600px]:text-[5.5vw]`}
                      >
                        {stage.label}
                      </h3>
                      <p
                        className={`description-${stage.id} w-[90%] text-[1.1vw] leading-[1.4] max-[600px]:w-[90%] max-[600px]:text-[3.8vw]`}
                        style={mutedTextStyle}
                      >
                        {stage.description}
                      </p>
                      <div className={`tags-${stage.id} flex flex-wrap gap-[.4vw] max-[600px]:gap-[1.5vw]`}>
                        {stage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-full px-[.8vw] py-[.25vw] text-[.75vw] font-medium max-[600px]:px-[2.5vw] max-[600px]:py-[.8vw] max-[600px]:text-[2.8vw]"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${activeColor} 12%, transparent)`,
                              color: activeColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row (stages at odd indices: 1) */}
            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-full flex h-full gap-x-[14vw] ml-[14vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[25vw]">
                {bottomStages.map((stage) => (
                  <div
                    key={`bottom-${stage.id}`}
                    className="relative h-full w-[30vw] px-[3vw] max-[600px]:w-[75vw] max-[600px]:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-[-1%] h-full">
                      <div
                        className={`h-[94%] origin-top w-px rounded-full max-[600px]:h-full jl-${stage.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative w-auto aspect-square rounded-full jd-${stage.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="flex h-full w-full flex-col justify-end space-y-[.8vw] max-[600px]:space-y-[2vw]">
                      <h3
                        className={`title-${stage.id} text-[2vw] leading-[1.1] font-semibold max-[600px]:text-[5.5vw]`}
                      >
                        {stage.label}
                      </h3>
                      <p
                        className={`description-${stage.id} w-[90%] text-[1.1vw] leading-[1.4] max-[600px]:w-[90%] max-[600px]:text-[3.8vw]`}
                        style={mutedTextStyle}
                      >
                        {stage.description}
                      </p>
                      <div className={`tags-${stage.id} flex flex-wrap gap-[.4vw] max-[600px]:gap-[1.5vw]`}>
                        {stage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-full px-[.8vw] py-[.25vw] text-[.75vw] font-medium max-[600px]:px-[2.5vw] max-[600px]:py-[.8vw] max-[600px]:text-[2.8vw]"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${activeColor} 12%, transparent)`,
                              color: activeColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
