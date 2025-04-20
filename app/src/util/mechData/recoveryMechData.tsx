import { contentObject } from "../types";
interface ContentProps {
  key: string;
}

const recoveryMechData: contentObject = {
  title: "Recovery Mechanics",
  key: "recoveryMechanics",
  componentName: "recoveryMechData",
  description:
    "Recovery is what separates good players from great ones. Mastering movement after saves, missed touches, or awkward landings allows you to stay in the play, rotate faster, and conserve boost. These techniques help you regain control quickly and efficiently.",

  topics: [
    {
      title: "Wall Dash",
      key: "wallDash",
      videoTime: "32:10",
      description:
        "What it is: A dodge-based way to accelerate along the wall without using boost.",
      content: [
        {
          title: "How to do it:",
          bulletPoints: [
            { point: "Jump slightly off the wall." },
            {
              point: "As your back wheels touch the wall again, dodge forward.",
            },
            { point: "Repeat for speed." },
          ],
          extraText:
            "Pro tip: Only steer when dodging — don't hold your stick throughout.",
        },
      ],
    },
    {
      title: "Half Flip",
      key: "halfFlip",
      videoTime: "7:10",
      description: "Purpose: Quickly turn around when facing the wrong way.",
      content: [
        {
          title: "How:",
          bulletPoints: [
            { point: "Backflip." },
            {
              point: "Instantly flip cancel by holding forward on the stick.",
            },
            { point: "Add air roll (left/right) to rotate fully." },
          ],
          extraText:
            "Use: After overcommitting, losing a challenge, or missing a ball — gets you back into the play faster than a three-point turn.",
        },
      ],
    },
    {
      title: "Wave Dash",
      key: "waveDash",
      videoTime: "22:15",
      description:
        "Why for defense: Regain speed instantly after a save or recovery without wasting boost.",
      content: [
        {
          title: "How to use:",
          bulletPoints: [
            {
              point:
                "After landing from a jump/save, dodge forward right as your back wheels hit.",
            },
            {
              point:
                "Combine it with a half flip or aerial recovery for lightning-fast repositioning.",
            },
          ],
        },
      ],
    },
    {
      title: "Speed Flip",
      key: "speedFlip",
      videoTime: "52:50",
      description: "Key use: Kickoffs and quick rotations.",
      content: [
        {
          title: "Why:",
          bulletPoints: [
            {
              point:
                "Gets you to the ball or back post faster than any other method.",
            },
            {
              point:
                "More controlled than chain wavedashing or straight boosting.",
            },
          ],
        },
        {
          title: "Drill:",
          bulletPoints: [
            { point: "Diagonal flip." },
            { point: "Immediately cancel with the stick down." },
            {
              point: "Boost through — and keep your trail straight behind you.",
            },
          ],
        },
      ],
    },
    {
      title: "Crease Dash",
      key: "creaseDash",
      videoTime: "",
      description:
        "What: A grounded wavedash near the goal line to regain speed while staying positioned for a save.",
      content: [
        {
          title: "When to use:",
          bulletPoints: [
            {
              point:
                "After a save or bump in the crease when you need to reposition quickly without overextending.",
            },
          ],
        },
        {
          title: "How to do it:",
          bulletPoints: [
            { point: "Land in the goal area and instantly wavedash out." },
            {
              point:
                "Can be done sideways or forward depending on the situation.",
            },
          ],
          extraText:
            "Tips:\n• Great in 1v1 or last-man situations to stay in the play.\n• Combines well with jump resets off the goalpost or ground.",
        },
      ],
    },
    {
      title: "Zap Dash",
      key: "zapDash",
      videoTime: "",
      description:
        "What: A rapid chain of wavedashes using flip resets for burst acceleration.",
      content: [
        {
          title: "How it works:",
          bulletPoints: [
            {
              point:
                "Land with a flip reset (typically off the ball, ceiling, or wall).",
            },
            { point: "Immediately wavedash on the ground." },
            {
              point:
                "If you retain the reset, you can dash again — chaining movement.",
            },
          ],
        },
        {
          title: "Use:",
          bulletPoints: [
            {
              point: "Extremely fast recovery or mind-bending dribble plays.",
            },
            { point: "Advanced mechanic used mostly at high levels." },
          ],
          extraText:
            "Note: Consistency is hard — practice flip resets and low jumps to control execution.",
        },
      ],
    },
  ],
};

export default recoveryMechData;
