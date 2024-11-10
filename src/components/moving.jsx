"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "CutURL has transformed the way I shorten and track my links, providing me with insightful data on every click and helping me optimize my online presence.",
    title: "Digital Marketing Expert",
  },
  {
    quote:
      "I can now easily manage and analyze my shortened links in real-time. CutURL’s seamless tracking and analytics are a game-changer for my campaigns.",
    title: "E-Commerce Specialist",
  },
  {
    quote: "With CutURL, I’ve gained the ability to see who’s clicking on my links, where they’re from, and how they’re interacting with my content.",
    title: "Content Creator",
  },
  {
    quote:
      "I was looking for an efficient URL shortening service with analytics capabilities, and CutURL provides both—simple, powerful, and insightful.",
    title: "Social Media Manager",
  },
  {
    quote:
      "CutURL's URL shortening and tracking features helped me understand my audience better, providing data that I can use to improve my marketing efforts.",
    title: "SEO Specialist",
  },
];
