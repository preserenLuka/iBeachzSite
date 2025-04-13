import { contentObject } from "../types";

const challengeFundData: contentObject[] = [
  {
    title: "Efficient Challenges",
    key: "challengeFund",
    componentName: "challengeFundData",
    description:
      "If your challenge seems correct but still fails, reconsider your angle or approach.",
    videoIds: [{ id: "HjHHbmNplt8" }],
    topics: [
      {
        label: "⚔️ Dive Challenge",
        value: "diveChallenge",
        videoTime: "(No timestamp)",
        description:
          "A hard commit—used when you're sure it'll disrupt or win possession.",
        listOfLists: [
          {
            title: "Usage Tips:",
            bulletPoints: [
              {
                point:
                  "Only commit if you're confident it will help your team.",
              },
              { point: "Don't overuse it—timing matters a lot." },
            ],
          },
        ],
      },
      {
        label: "🚗 Drive Challenge",
        value: "driveChallenge",
        videoTime: "(No timestamp)",
        description:
          "Challenging without jumping — great for staying grounded and involved.",
        listOfLists: [
          {
            title: "Benefits & Guidelines:",
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
          },
        ],
      },
      {
        label: "🌀 Fake Challenge",
        value: "fakeChallenge",
        videoTime: "(No timestamp)",
        description:
          "A mind game tool to force mistakes without committing to the ball.",
        listOfLists: [
          {
            title: "Execution Tips:",
            bulletPoints: [
              { point: "Best used when you're in a position of strength." },
              { point: "Always make sure to cover your net while faking." },
              {
                point:
                  "Super effective against players with strong ball control.",
              },
              { point: "Forces the opponent to react, giving you control." },
              {
                point: "Creates panic, especially when they're under pressure.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default challengeFundData;
