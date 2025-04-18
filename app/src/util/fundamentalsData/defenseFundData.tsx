import { contentObject } from "../types";

const defenseFundData: contentObject = {
  title: "Defense",
  key: "defenseFundemental",
  componentName: "defenseFundData",
  description:
    "You're on defense any time your team doesn’t have possession, even if the opponent isn’t fully in control of the ball.",
  videoIds: [{ id: "4_4NYoMR8N0" }],
  topics: [
    {
      label: "1st Man on Defense",
      value: "defenseFirstMan",
      videoTime: "(No timestamp)",
      description:
        "As the first man back, your job is to apply smart pressure and buy time without overcommitting.",
      listOfLists: [
        {
          title: "Responsibilities:",
          bulletPoints: [
            { point: "Make life easier for your 2nd man." },
            { point: "Apply pressure to the opponent with the ball." },
            {
              point: "Don’t overcommit—avoid leaving your teammate in a 1v2.",
            },
          ],
        },
      ],
    },
    {
      label: "2nd Man on Defense",
      value: "defenseSecondMan",
      videoTime: "(No timestamp)",
      description:
        "You support your teammate while staying in a position to react, delay, or challenge only when needed.",
      listOfLists: [
        {
          title: "Support Techniques:",
          bulletPoints: [
            { point: "Create time for your 1st man to rotate." },
            {
              point:
                "Use techniques like: delaying, faking challenges, low 50/50s.",
            },
            { point: "Only challenge if it’s necessary." },
            { point: "Cover your teammate’s weaker outcomes." },
            {
              point: "Backboard positioning is often a smart defensive move.",
            },
          ],
        },
      ],
    },
  ],
};

export default defenseFundData;
