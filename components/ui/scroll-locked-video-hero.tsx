"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export interface MetroHeroProps {
  videoSrc?: string;
  title?: string;
  scrollHint?: string;
  tagline?: string;
  scrubDistance?: number;
  className?: string;
  style?: CSSProperties;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function MetroHero({
  videoSrc = "/city.mp4",
  title = "You have conversations to handle.",
  scrollHint = "Scroll to open",
  tagline = "I’ll take care of them.",
  scrubDistance = 2600,
  className,
  style,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const endStateRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReducedMotion);

    let duration = 0;
    let frameId = 0;
    let targetProgress = prefersReducedMotion ? 0.92 : 0;
    let currentProgress = targetProgress;
    let lastTime = -1;

    const updateMedia = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (prefersReducedMotion && duration > 0) {
        video.currentTime = duration * 0.92;
      }
      setReady(true);
    };

    const updateTarget = () => {
      if (prefersReducedMotion) return;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      targetProgress = clamp((window.scrollY - sectionTop) / scrubDistance, 0, 1);
    };

    const paint = () => {
      currentProgress += (targetProgress - currentProgress) * 0.13;

      if (duration > 0 && video.readyState >= 2) {
        const nextTime = currentProgress * Math.max(0, duration - 0.04);
        if (Math.abs(nextTime - lastTime) > 0.015) {
          video.currentTime = nextTime;
          lastTime = nextTime;
        }
      }

      video.style.transform = `scale(${1.015 + currentProgress * 0.045})`;

      if (titleRef.current) {
        const visibility = 1 - clamp(currentProgress / 0.36, 0, 1);
        titleRef.current.style.opacity = String(visibility);
        titleRef.current.style.transform = `translateY(${(1 - visibility) * -22}px)`;
        titleRef.current.style.filter = `blur(${(1 - visibility) * 10}px)`;
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = currentProgress > 0.025 ? "0" : "1";
      }

      if (taglineRef.current) {
        const visibility = clamp((currentProgress - 0.32) / 0.18, 0, 1);
        taglineRef.current.style.opacity = String(visibility);
        taglineRef.current.style.transform = `translateY(${(1 - visibility) * 24}px)`;
        taglineRef.current.style.filter = `blur(${(1 - visibility) * 9}px)`;
      }

      if (endStateRef.current) {
        const visibility = clamp((currentProgress - 0.52) / 0.16, 0, 1);
        endStateRef.current.style.opacity = String(visibility);
        endStateRef.current.style.transform = `translateY(${(1 - visibility) * 14}px)`;
        endStateRef.current.style.pointerEvents = visibility > 0.8 ? "auto" : "none";
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      frameId = window.requestAnimationFrame(paint);
    };

    video.addEventListener("loadedmetadata", updateMedia);
    video.addEventListener("loadeddata", updateMedia);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    if (video.readyState >= 1) updateMedia();
    updateTarget();

    if (!navigator.userAgent.toLowerCase().includes("jsdom")) {
      const playback = video.play();
      if (playback) playback.then(() => video.pause()).catch(() => undefined);
    }

    frameId = window.requestAnimationFrame(paint);

    return () => {
      video.removeEventListener("loadedmetadata", updateMedia);
      video.removeEventListener("loadeddata", updateMedia);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      window.cancelAnimationFrame(frameId);
    };
  }, [scrubDistance]);

  return (
    <section
      aria-label="Clara city reveal"
      className={className}
      id="hero"
      ref={sectionRef}
      style={{
        height: reduceMotion
          ? "100dvh"
          : `calc(100dvh + ${scrubDistance}px)`,
        minHeight: "36rem",
        position: "relative",
        ...style,
      }}
    >
      <div className="metro-hero__stage">
        <video
          aria-hidden="true"
          className="metro-hero__video"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src={videoSrc}
          style={{ opacity: ready ? 1 : 0 }}
        />

        <div className="metro-hero__veil" aria-hidden="true" />

        <div className="metro-hero__title" ref={titleRef}>
          <h1>{title}</h1>
        </div>

        <div className="metro-hero__tagline" ref={taglineRef}>
          <p>{tagline}</p>
        </div>

        <div className="metro-hero__end-state" ref={endStateRef}>
          <span>Clara listens, decides and completes the next approved step.</span>
          <div>
            <a href="#after-hello">See how Clara works <ArrowRight aria-hidden="true" size={17} /></a>
            <a href="#invitation">Talk to Clara</a>
          </div>
        </div>

        <div className="metro-hero__hint" ref={hintRef}>
          <span>{scrollHint}</span>
          <ArrowDown aria-hidden="true" size={16} />
        </div>

        <div className="metro-hero__progress" aria-hidden="true">
          <div ref={progressBarRef} />
        </div>
      </div>
    </section>
  );
}
