import { contentObject } from "../types";

const defenseFundData: contentObject = {
  title: "Defense",
  key: "defenseFundemental",
  componentName: "defenseFundData",
  description:
    "You're on defense any time your team doesn’t have possession, even if the opponent isn’t fully in control of the ball.",
  topics: {
    title: "Defense Roles",
    videoId: ["4_4NYoMR8N0"],
    content: [
      {
        title: "1st Man on Defense",
        bulletPoints: [
          { point: "Make your 2nd man's job easier." },
          { point: "Apply pressure to the opponent with the ball." },
          {
            point: "Don’t overcommit—avoid leaving your teammate in a 1v2.",
          },
        ],
        extraText:
          "As the first man back, your job is to apply smart pressure and buy time without overcommitting.",
      },
      {
        title: "2nd Man on Defense",
        bulletPoints: [
          { point: "Create time for your 1st man to rotate." },
          {
            point:
              "Use techniques like: delaying, faking challenges, low 50/50s.",
          },
          { point: "Only challenge if it’s necessary." },
          { point: "Cover your teammate’s weaker outcomes." },
          {
            point: "Backboard positioning is often  a good idea.",
          },
        ],
        extraText:
          "You support your teammate while staying in a position to react, delay, or challenge only when needed.",
      },
    ],
  },
};

export default defenseFundData;
