import { contentObject } from "../types";

const attackFundData: contentObject = {
  title: "Attacking",
  key: "attackFundamental",
  componentName: "attackFundData",
  description:
    "Offensive pressure isn't just about scoring — it's about creating chaos, supporting teammates, and forcing difficult decisions from defenders.",
  topics: {
    title: "Offensive Principles",
    videoId: ["McFf085CuXY"],
    content: [
      {
        text: "Avoid shooting directly at goalkeepers – instead, force them into awkward positions or make them move.",
      },
      { text: "If passing, don’t instantly chase your own pass." },
      {
        text: "Power shooting is still crucial and should be practiced.",
      },
      {
        title: "1st Man Tips",
        bulletPoints: [
          { point: "Focus on beating the opposing team's first man." },
          { point: "Create tough situations for their second man." },
        ],
        extraText: "Your job is to apply pressure and force mistakes.",
      },
      {
        title: "2nd Man Tips",
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
        extraText:
          "Follow up smartly to maintain pressure and punish openings.",
      },
    ],
  },
};

export default attackFundData;
