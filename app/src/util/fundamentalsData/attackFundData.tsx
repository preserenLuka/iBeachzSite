import { contentObject } from "../types";

const attackFundData: contentObject[] = [
  {
    title: "Attacking",
    key: "attackFundData",
    componentName: "attackFundData",
    description:
      "Offensive pressure isn't just about scoring — it's about creating chaos, supporting teammates, and forcing difficult decisions from defenders.",
    videoIds: [{ id: "McFf085CuXY" }],
    topics: [
      {
        label: "📌 General Tips",
        value: "attackingGeneral",
        videoTime: "(No timestamp)",
        description: "Core principles for strong and smart offensive plays.",
        listOfLists: [
          {
            title: "Guidelines:",
            bulletPoints: [
              {
                point:
                  "Avoid shooting directly at goalkeepers – instead, force them into awkward positions or make them move.",
              },
              { point: "If passing, don’t instantly chase your own pass." },
              {
                point:
                  "Power shooting is still crucial and should be practiced.",
              },
            ],
          },
        ],
      },
      {
        label: "🥇 1st Man Tips",
        value: "firstManTips",
        videoTime: "(No timestamp)",
        description: "Your job is to apply pressure and force mistakes.",
        listOfLists: [
          {
            title: "Focus Points:",
            bulletPoints: [
              { point: "Focus on beating the opposing team's first man." },
              { point: "Create tough situations for their second man." },
            ],
          },
        ],
      },
      {
        label: "🥈 2nd Man Tips",
        value: "secondManTips",
        videoTime: "(No timestamp)",
        description:
          "Follow up smartly to maintain pressure and punish openings.",
        listOfLists: [
          {
            title: "Supportive Play:",
            bulletPoints: [
              {
                point:
                  "If your 1st man faces two defenders, cover his weak side (support 50/50s or chaos).",
              },
              {
                point:
                  "If he faces one defender, cover his strong side to keep up pressure.",
              },
              {
                point:
                  "Stay close to the play even with low boost—pad pickups (24 boost is enough) are viable.",
              },
              { point: "Just don’t overcommit." },
            ],
          },
        ],
      },
    ],
  },
];

export default attackFundData;
