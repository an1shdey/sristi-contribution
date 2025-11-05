"use client";

import { useState } from "react";
import SponsorCard, { Sponsor } from "../../components/SponsorCard";
import { Animated } from "@/Utils/Animation";
import Navbar from "../../components/Navbar";

function Sponsors() {
  // 🎯 Sponsor Data
  
  const sponsors: Sponsor[] = [
    // Title Sponsors
    { image: "/Sponsors/zerodha.jpg", tier: "Title Sponsors" },

    // Tech Sponsors
    { image: "/Sponsors/tech1.png", tier: "Tech Sponsors" },
    { image: "/Sponsors/tech2.png", tier: "Tech Sponsors" },
    
    // Food Sponsors
    { image: "/Sponsors/food1.png", tier: "Food Sponsors" },
    { image: "/Sponsors/food2.png", tier: "Food Sponsors" },
  ];

  // Group sponsors by tier
  const tiers = ["Title Sponsors", "Tech Sponsors", "Food Sponsors"];

  const groupedSponsors: Record<string, Sponsor[]> = {};
  tiers.forEach((tier) => {
    groupedSponsors[tier] = sponsors.filter((sponsor) => sponsor.tier === tier);
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            🤝 Our Sponsors
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Meet the amazing sponsors who make{" "}
            <span className="font-semibold text-indigo-400">SRISTI Techfest</span> possible.
          </p>
        </div>

        <Animated>
          <div className="mx-auto mt-14 max-w-7xl space-y-20">
            {tiers.map((tier) => (
              <div key={tier}>
                {/* Category Heading */}
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  {tier}
                </h2>

                {/* Cards Wrapper */}
                <div className="flex flex-wrap justify-center gap-8">
                  {groupedSponsors[tier].map((sponsor, index) => (
                    <div
                      key={`${tier}-${index}`}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center"
                    >
                      <Animated
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <SponsorCard sponsor={sponsor} />
                      </Animated>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Animated>
      </main>
    </>
  );
}

export default Sponsors;
