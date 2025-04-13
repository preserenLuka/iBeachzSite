import { contentObject } from "../types";

const shootingMechData: contentObject[] = [
  {
    title: "Shooting Mechanics in Rocket League",
    key: "shooting",
    componentName: "shootingMechData",
    description:
      "Welcome to the deep dive into advanced Rocket League shooting mechanics. Each mechanic here is designed to help you generate power, improve shot placement, and become a more threatening player on the field.",
    topics: [
      {
        label: "Power Shooting (Basic)",
        value: "powerShootingBasic",
        videoTime: "1:50",
        description:
          "When to use: Anytime you need a powerful strike — offense, defense, or clears.",
        listOfLists: [
          {
            title: "How to practice:",
            bulletPoints: [
              { point: "Line up front flips through the ball — not into it." },
              {
                point:
                  "Hit the ball into the sidewall repeatedly to build up power and consistency.",
              },
              {
                point:
                  "Focus on pushing through the ball to maximize speed and control.",
              },
              {
                point:
                  "Later, combine this with bounce reads and call out your shot before striking for intention training.",
              },
            ],
          },
        ],
      },
      {
        label: "Power Shooting (Advanced)",
        value: "powerShootingAdvanced",
        videoTime: "4:30",
        description:
          "What’s different: You use air roll (e.g., Air Roll Left) to lean away from the ball, then flip through it to generate massive power.",
        listOfLists: [
          {
            title: "Key Points:",
            bulletPoints: [
              { point: "Lean out, then lean in with a diagonal flip." },
              { point: "Practice hitting sidewalls/backboards at full power." },
              {
                point:
                  "Add intentional placement (e.g., top-left) once consistency builds.",
              },
            ],
          },
        ],
      },
      {
        label: "Bounce Dribble (Power Shooting Out)",
        value: "bounceDribblePowerShot",
        videoTime: "28:50",
        description:
          "Use this when:\n• You want to bait a challenge or open up a better shooting angle.\n• Great in 1v1 or if an opponent is shadowing closely.",
        listOfLists: [
          {
            title: "Drill:",
            bulletPoints: [
              { point: "Bounce the ball consistently in a circular motion." },
              {
                point:
                  "Learn to hit it immediately after the bounce for max control.",
              },
              {
                point:
                  "Shoot by side flipping or full volleying at the bounce peak.",
              },
            ],
          },
        ],
      },
      {
        label: "Side Wall Redirect",
        value: "sideWallRedirect",
        videoTime: "18:05",
        description:
          "What it is: Redirecting a pass or clear from the side wall into a shot on net — without controlling first.",
        listOfLists: [
          {
            title: "When to use:",
            bulletPoints: [
              { point: "Receiving a pass midair from a teammate." },
              {
                point:
                  "Solo plays where you chip the ball off the wall and follow up.",
              },
            ],
          },
          {
            title: "How to train it:",
            bulletPoints: [
              {
                point:
                  "Practice wall-to-net redirects in Free Play by rolling the ball up the side wall and following it midair.",
              },
              {
                point:
                  "Focus on timing your jump and dodge to meet the ball at the right angle.",
              },
            ],
            extraText:
              "Pro tips:\n• Don’t boost straight into the ball — match its arc first, then flip through it.\n• Use air roll to fine-tune the angle midair.",
          },
        ],
      },
    ],
  },
];

export default shootingMechData;
