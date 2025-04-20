import { contentObject } from "../types";

const challengeFundData: contentObject = {
  title: "Efficient Challenges",
  key: "challengeFundemental",
  componentName: "challengeFundData",
  description:
    "If your challenge seems correct but still fails, reconsider your angle or approach.",
  topics: {
    videoId: ["HjHHbmNplt8"],
    title: "Challenge Types & Tips",
    content: [
      {
        title: "Dive Challenge",
        bulletPoints: [
          {
            point: "Only commit if you're confident it will help your team.",
          },
          { point: "Don't overuse it—timing matters a lot." },
        ],
        extraText:
          "A hard commit—used when you're sure it'll disrupt or win possession.",
      },
      {
        title: "Drive Challenge",
        bulletPoints: [
          { point: "Great for challenging without jumping." },
          {
            point:
              "Use when you want to pressure while staying involved in the play.",
          },
          {
            point:
              "Focus on being able to recover quickly after the challenge.",
          },
        ],
        extraText:
          "Challenging without jumping — great for staying grounded and involved.",
      },
      {
        title: "Fake Challenge",
        bulletPoints: [
          { point: "Best used when you're in a position of strength." },
          { point: "Always make sure to cover your net while faking." },
          {
            point: "Super effective against players with strong ball control.",
          },
          { point: "Forces the opponent to react, giving you control." },
          { point: "Creates panic, especially when they're under pressure." },
        ],
        extraText:
          "A mind game tool to force mistakes without committing to the ball.",
      },
    ],
  },
};

export default challengeFundData;
