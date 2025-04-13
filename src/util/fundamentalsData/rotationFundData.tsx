import { contentObject } from "../types";

const rotationFundData: contentObject[] = [
  {
    title: "Rotations & Recoveries",
    key: "rotationFund",
    componentName: "rotationFundData",
    description:
      "Mastering pad selection, boost management, and recovery habits is essential to maintaining strong rotational flow in Rocket League.",
    videoIds: [{ id: "WlgNfzle_1s" }],
    topics: [
      {
        label: "⛽ Selecting Boost Pads",
        value: "boostPads",
        videoTime: "(No timestamp)",
        description:
          "Efficient pad usage keeps you moving quickly and staying relevant in the play.",
        listOfLists: [
          {
            title: "Key Concepts:",
            bulletPoints: [
              {
                point:
                  "Pad management is key for speed and efficient recoveries.",
              },
              { point: "Prioritize small pads to stay active and fluid." },
              { point: "Save large boost for aggressive offensive moments." },
            ],
          },
        ],
      },
      {
        label: "🔁 Recoveries",
        value: "recoveries",
        videoTime: "(No timestamp)",
        description:
          "Recover with minimal boost to stay involved in plays without overcommitting resources.",
        listOfLists: [
          {
            title: "Tips:",
            bulletPoints: [
              { point: "Recover quickly and efficiently using minimal boost." },
              {
                point:
                  "Preserve boost during defense to have it available when transitioning to offense.",
              },
              {
                point:
                  "Use boost more freely when you're already close to supersonic speed.",
              },
            ],
          },
        ],
      },
      {
        label: "♻️ Rotations",
        value: "rotations",
        videoTime: "(No timestamp)",
        description:
          "Strong rotations depend on proper positioning and support based on your role in the play.",
        listOfLists: [
          {
            title: "1st Man:",
            bulletPoints: [
              {
                point:
                  "Disrupt opponents on the ground to relieve pressure and create openings.",
              },
              {
                point:
                  "If opponent is aerial:\n- Fast enough? Rotate behind 2nd man and challenge from better positioning.\n- Too slow? Go for the air challenge yourself to make it easier for 2nd man.",
              },
            ],
          },
          {
            title: "2nd Man:",
            bulletPoints: [
              {
                point:
                  "If 1st man is pressured by two opponents, cover his weak side to support challenges.",
              },
              {
                point:
                  "If he only has one to beat, cover his strong side to keep up offensive pressure.",
              },
              {
                point:
                  "Stay in play even with low boost—24 boost from pads is plenty to stay useful.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default rotationFundData;
