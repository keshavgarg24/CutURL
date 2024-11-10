import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { Input } from "@/components/ui/input";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useNavigate } from "react-router-dom";
import { InfiniteMovingCardsDemo } from "@/components/moving";

const LandingPage = () => {
  const words = ["shortener", "analyser", "tracker", "optimiser"];
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-14 px-4 sm:px-8 lg:px-16 w-full">
      <div className="text-center max-w-4xl mb-2 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-400 dark:text-neutral-400 leading-tight whitespace-nowrap">
          The FREE URL{" "}
          <span className="text-rose-600">
            <FlipWords words={words} />
          </span>
          <br />
          You will ever need!
        </h1>
      </div>
      <form onSubmit={handleShorten} className="flex flex-col items-center mt-6 w-full max-w-md">
        <Input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded-lg placeholder-gray-500"
          placeholder="Put your long URL here"
        />
        <Button className="w-full mt-2 py-2 text-white bg-rose-600 rounded-lg hover:bg-rose-700">
          Enter
        </Button>
      </form>

      <div className="py-14 w-full max-w-4xl">
        <BackgroundGradient className="rounded-lg p-4 sm:p-6 lg:p-10 bg-red dark:bg-zinc-900">
          <img
            src="/image.png"
            alt="CutURL banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </BackgroundGradient>
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default LandingPage;
