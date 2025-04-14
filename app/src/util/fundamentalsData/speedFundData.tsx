import { contentObject } from "../types";

const speedFundData: contentObject = {
  title: "Speed & Decision-Making",
  key: "speedFundemental",
  componentName: "speedFundData",
  description:
    "This section emphasizes the importance of maintaining momentum in gameplay and making quick, committed decisions without overthinking.",
  videoIds: [{ id: "pBGFqL6RS7k" }],
  topics: [
    {
      label: "Speed",
      value: "speedConcepts",
      videoTime: "(No timestamp)",
      description:
        "Maintaining speed isn't just about pressing boost—it's about staying in motion, reacting quickly, and preserving flow.",
      listOfLists: [
        {
          title: "Core Principles:",
          bulletPoints: [
            { point: "Keep momentum—avoid slowing unnecessarily." },
            {
              point:
                "Missed a boost pad? Keep moving unless slowing is clearly better.",
            },
            {
              point:
                "Improving speed is about reacting fast to bounces—freeplay helps.",
            },
            {
              point:
                "Don’t panic if fast movement feels out of control; this improves with time.",
            },
            {
              point:
                "Common pitfall: reaching supersonic, stopping briefly, then trying to speed up again—maintain consistent motion.",
            },
          ],
        },
      ],
    },
    {
      label: "Decision-Making",
      value: "decisionMaking",
      videoTime: "(No timestamp)",
      description:
        "Great players make quick, confident decisions. Indecision is often worse than being wrong.",
      listOfLists: [
        {
          title: "Mindset Tips:",
          bulletPoints: [
            { point: "Trust your instincts—hesitation leads to errors." },
            {
              point: "Fully commit to your choices; learn from what happens.",
            },
            {
              point:
                "Overthinking slows you down; a late good decision = a bad one.",
            },
          ],
        },
      ],
    },
  ],
};

export default speedFundData;
