import { contentObject } from "../types";

const defenseMechData: contentObject = {
  title: "Defensive Mechanics",
  key: "defenseMechanics",
  componentName: "defenseMechData",
  description:
    "Defense in Rocket League isn’t just about blocking shots — it’s about recovering fast, reading pressure, and clearing with control. These mechanics will sharpen your defensive consistency.",
  topics: [
    {
      label: "Backboard Defense",
      value: "backboardDefense",
      videoTime: "1:21:15",
      description: "Essential for blocking backboard passes and double taps.",
      listOfLists: [
        {
          title: "How to train:",
          bulletPoints: [
            {
              point:
                "Sit on the backboard and practice jumping off to intercept aerials.",
            },
            {
              point:
                "Use air roll to position your car facing slightly upward or angled forward.",
            },
          ],
        },
        {
          title: "Tips:",
          bulletPoints: [
            { point: "Always rotate above the ball if it’s heading high." },
            {
              point:
                "Don't commit off the backboard unless you're sure you’ll reach it.",
            },
          ],
        },
      ],
    },
    {
      label: "Corner & Wall Clears",
      value: "cornerWallClears",
      videoTime: "(No timestamp)",
      description:
        "What: When defending under pressure, use the wall or corner to launch the ball out of danger.",
      listOfLists: [
        {
          title: "Technique:",
          bulletPoints: [
            { point: "Let the ball roll up the corner or side wall." },
            {
              point:
                "Jump or flip into it while aiming toward side or downfield.",
            },
            {
              point:
                "Use the side of your car for soft clears, or front for power.",
            },
          ],
        },
        {
          title: "Pro tips:",
          bulletPoints: [
            {
              point:
                "Avoid smashing it blindly — angle clears away from pressure.",
            },
            {
              point: "You can wave dash out of the wall for a quick follow-up.",
            },
          ],
        },
      ],
    },
    {
      label: "Shadow Defense",
      value: "shadowDefense",
      videoTime: "(No timestamp)",
      description:
        "What: Defending by staying between the ball and your net while facing backward, mirroring your opponent’s movement.",
      listOfLists: [
        {
          title: "How to train:",
          bulletPoints: [
            {
              point:
                "Practice following 1v1 plays and staying close without overcommitting.",
            },
            {
              point:
                "Use free play with unlimited boost and dribble the ball back toward your own goal.",
            },
          ],
        },
        {
          title: "Tips:",
          bulletPoints: [
            {
              point:
                "Keep slight distance — close enough to challenge, far enough to react.",
            },
            {
              point:
                "Use small speed adjustments and avoid flipping unless committing.",
            },
            {
              point:
                "Turn to challenge only when you’ve forced a predictable shot or heavy touch.",
            },
          ],
        },
      ],
    },
    {
      label: "Backwards Aerials",
      value: "backwardsAerials",
      videoTime: "(No timestamp)",
      description:
        "What: A defensive move for reaching high balls when your car is facing backward or during awkward recoveries.",
      listOfLists: [
        {
          title: "Technique:",
          bulletPoints: [
            {
              point: "Pull back on your stick and boost while holding reverse.",
            },
            {
              point: "Feather boost and air roll to adjust your angle mid-air.",
            },
          ],
        },
        {
          title: "Tips:",
          bulletPoints: [
            { point: "Great for emergency saves when you're recovering." },
            {
              point: "Practice in custom training with awkward aerial saves.",
            },
            {
              point:
                "Try to land facing forward afterward for faster recovery.",
            },
          ],
        },
      ],
    },
  ],
};

export default defenseMechData;
