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
      { text: "If passing, don’t chase your own pass." },
      {
        text: "Power shooting is still crucial and should be practiced. Try to hit 115km/h shots.",
      },
      {
        title: "1st Man:",
        bulletPoints: [
          { point: "Focus on beating the opponents first man." },
          { point: "Create awkward situations for their second man." },
        ],
        extraText: "Your job is to apply pressure and force mistakes.",
      },
      {
        title: "2nd Man:",
        bulletPoints: [
          {
            point:
              "If your 1st man has 2 opponents to beat, cover the bad outcome.",
          },
          {
            point:
              "If he has 1 player to beat, cover his strong side to keep up pressure.",
          },
          {
            point:
              "Stay close to the play even with low boost,pick up pads(24 boost is enough).",
          },
        ],
        extraText:
          "Follow up smartly to maintain pressure while not giving opponents free opportunities.",
      },
    ],
  },
};

export default attackFundData;
