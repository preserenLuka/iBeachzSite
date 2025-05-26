import { contentObject } from "../types";

const speedFundData: contentObject = {
  title: "Speed & Decision-Making",
  key: "speedFundemental",
  componentName: "speedFundData",

  topics: {
    title: "Speed & Decision-Making Concepts",
    videoId: ["pBGFqL6RS7k"],
    content: [
      {
        text: "Maintaining speed isn't just about pressing boost—it's about staying in motion, reacting quickly, and preserving flow.",
      },
      {
        title: "Speed",
        bulletPoints: [
          {
            point:
              "Always try to maintain your momentum; avoid unnecessary break checks.",
          },
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
              "If fast movement feels out of control, that’s good — it will help you learn to control that speed.",
          },
        ],
        extraText:
          "Common mistake: reaching supersonic, stopping briefly, then trying to speed up again—maintain consistent motion.",
      },
      {
        title: "Decision-Making",
        bulletPoints: [
          { point: "Do not hesitate in your decisions." },
          {
            point: "Fully commit to your decisions; learn from what happens.",
          },
          {
            point:
              "Overthinking slows you down; a late good decision = a bad one.",
          },
        ],
      },
    ],
  },
};

export default speedFundData;
