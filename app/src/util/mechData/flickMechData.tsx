import { contentObject } from "../types";

const flickMechData: contentObject = {
  title: "Flick Mechanics",
  key: "flickingMechanics",
  componentName: "flickMechData",
  description:
    "Flicks let you convert possession into instant offense. The better your flick variety, the harder it is for defenders to predict or block your plays.",
  topics: [
    {
      title: "Front Flip Flick",
      key: "frontFlipFlick",
      videoTime: "17:45",
      description:
        "Use: Gain momentum and get a quick shot with minimal boost.\nWhen: Low on boost or need a fast, simple finish.",
      content: [
        {
          title: "How to do it:",
          bulletPoints: [
            { point: "Dribble the ball just above your car’s nose." },
            {
              point: "Jump, wait until your car dips forward, then front flip.",
            },
            {
              point:
                "Timing is everything — flick right as your car hits ~45° forward angle.",
            },
          ],
          extraText:
            "Tip: The flick is most effective when the ball is slightly forward, not dead center.",
        },
      ],
    },
    {
      title: "Back Flip Flick",
      key: "backFlipFlick",
      videoTime: "20:00",
      description:
        "Use: Great for lob passes, surprise shots, or avoiding early challenges.\nBest in: 1v1 or 2v2 if your teammate is waiting mid.",
      content: [
        {
          title: "How to do it:",
          bulletPoints: [
            { point: "Let the ball rest on the back side of your car." },
            {
              point:
                "Jump, let your car angle backward (~45° up), then backflip.",
            },
            { point: "Add boost during the flick to extend the lob." },
          ],
        },
      ],
    },
    {
      title: "Diagonal Flick",
      key: "diagonalFlick",
      videoTime: "25:15",
      description:
        "Use: Adds both height and power. Great for shooting over defenders or creating backboard reads.",
      content: [
        {
          title: "Execution:",
          bulletPoints: [
            { point: "Put the ball just slightly to one side on your car." },
            {
              point:
                "Lean diagonally opposite to the side it's on (e.g. ball right → lean left).",
            },
            { point: "Hold that lean, then flick diagonally." },
          ],
          extraText:
            "Tips:\n• Back of your car = more height.\n• Front = more power.",
        },
      ],
    },
    {
      title: "Reverse 45 Flick",
      key: "reverse45Flick",
      videoTime: "40:30",
      description:
        "One of the most powerful flicks in the game.\nWhen: To shoot with power when shadowed or being pressured.",
      content: [
        {
          title: "How to do it:",
          bulletPoints: [
            {
              point: "Place ball on the right side (for a right-side flick).",
            },
            {
              point:
                "Air roll 45° away from the ball while slightly tilting your nose down.",
            },
            { point: "Diagonal backflip toward the ball." },
          ],
          extraText:
            "Note: Requires the ball to be perfectly settled. Timing + lean are crucial.",
        },
      ],
    },
    {
      title: "Musty Flick",
      key: "mustyFlick",
      videoTime: "46:00",
      description:
        "Use: Surprise defenders with high-arcing, powerful backflips.",
      content: [
        {
          title: "How:",
          bulletPoints: [
            {
              point:
                "Ball should be falling off the front of your car — not centered.",
            },
            { point: "Lean your car back until it's beyond vertical." },
            {
              point:
                "Backflip while boosting during the flick for more height.",
            },
          ],
        },
      ],
    },
    {
      title: "Delayed Musty",
      key: "delayedMusty",
      videoTime: "1:56:00",
      description:
        "Style shot with big reward if timed right.\nUse: Fake defenders, or set up double touches with delay.",
      content: [
        {
          title: "Technique:",
          bulletPoints: [
            {
              point:
                "Similar to regular musty, but hold the setup longer before the flip.",
            },
            {
              point:
                "Delays add mind games — defenders often pre-jump too early.",
            },
          ],
        },
      ],
    },
    {
      title: "Tornado Flick",
      key: "tornadoFlick",
      videoTime: "2:03:00",
      description: "Highly mechanical and flashy.",
      content: [
        {
          title: "How it works:",
          bulletPoints: [
            { point: "Dribble the ball." },
            { point: "Air roll in a full spin (tornado motion)." },
            {
              point:
                "As your car rotates under the ball, flick in a chosen direction.",
            },
          ],
          extraText:
            "Use when: You want to disorient defenders with unusual angles or impress your team (or TikTok).",
        },
      ],
    },
  ],
};

export default flickMechData;
