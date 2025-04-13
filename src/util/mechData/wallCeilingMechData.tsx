import { contentObject } from "../types";

const wallCeilingMechData: contentObject[] = [
  {
    title: "Wall & Ceiling Mechanics",
    key: "wallCeiling",
    componentName: "wallCeilingMechData",
    description:
      "Mastering walls and ceilings means you’re not limited by gravity. These mechanics give you more angles, more speed, and more options — whether you're attacking or defending.",
    topics: [
      {
        label: "Wall Pinch",
        value: "wallPinch",
        videoTime: "50:00",
        description: "When: Low boost clears or surprise goals.",
        listOfLists: [
          {
            title: "How:",
            bulletPoints: [
              { point: "Roll the ball up the wall." },
              { point: "Jump into the wall with a lean toward your target." },
              { point: "Dodge into the ball just as you hit the wall." },
            ],
          },
          {
            title: "Key:",
            bulletPoints: [
              { point: "Be slightly behind the ball to ‘pinch’ it forward." },
              { point: "Great for fast clears or unexpected shots." },
            ],
          },
        ],
      },
      {
        label: "Ceiling Pinch",
        value: "ceilingPinch",
        videoTime: "2:10:15",
        description: "One of the highest-power mechanics in the game.",
        listOfLists: [
          {
            title: "Execution:",
            bulletPoints: [
              { point: "Carry or air dribble the ball up." },
              {
                point:
                  "As it falls, match its speed and aim to pinch it between your car and the ceiling.",
              },
              { point: "Dodge into the ball right as it hits the ceiling." },
            ],
          },
          {
            title: "Timing:",
            bulletPoints: [
              { point: "Contact the ball and ceiling at the exact same time." },
            ],
          },
        ],
      },
      {
        label: "Ceiling Stall Reset",
        value: "ceilingStallReset",
        videoTime: "2:15:30",
        description: "Purpose: Delay your flip after a ceiling drop.",
        listOfLists: [
          {
            title: "How to Execute:",
            bulletPoints: [
              {
                point:
                  "Air roll while falling off the ceiling to stall your movement.",
              },
              { point: "Touch all four wheels to reset your flip." },
            ],
          },
          {
            title: "Tips:",
            bulletPoints: [
              { point: "Use the flip at the perfect moment — or fake it." },
            ],
          },
        ],
      },
      {
        label: "Preflip Off Wall",
        value: "preflipOffWall",
        videoTime: "2:34:04",
        description:
          "When: You’re out of alignment but need to reach the ball fast.",
        listOfLists: [
          {
            title: "How:",
            bulletPoints: [
              { point: "Drive off the wall slightly offset." },
              { point: "Flip early in the direction of the ball." },
              {
                point:
                  "Hit with the front of your car mid-flip for a clean touch or shot.",
              },
            ],
          },
          {
            title: "Pro tip:",
            bulletPoints: [
              { point: "Pairs beautifully with resets and redirect plays." },
            ],
          },
        ],
      },
      {
        label: "Missing Mechanics:",
        value: "missingMechanics",
        videoTime: "(No timestamp)",
        description: "",
        listOfLists: [
          {
            title: "• Ceiling Shot (Basic)",
            bulletPoints: [
              { point: "When: You need to attack from above." },
              {
                point:
                  "How: Jump off the wall or flip into the ceiling to gain height.",
              },
              {
                point:
                  "Use a quick flip to launch the ball downwards toward the goal.",
              },
            ],
          },
          {
            title: "• Advanced Ceiling Shots",
            bulletPoints: [
              {
                point: "When: You want a more powerful or unpredictable shot.",
              },
              {
                point:
                  "How: Perform a ceiling shot but with more precision or angle variations.",
              },
              {
                point:
                  "Often used to surprise the opponent with shots from unusual angles.",
              },
            ],
          },
          {
            title: "• Off Wall Double Taps",
            bulletPoints: [
              { point: "When: You want to make a powerful play off the wall." },
              {
                point:
                  "How: Hit the ball off the wall and immediately follow up with another shot, often by using your flip.",
              },
              {
                point:
                  "Requires good timing to follow up quickly for a second touch.",
              },
            ],
          },
          {
            title: "• Ground Pinch",
            bulletPoints: [
              {
                point: "When: You want to generate high speed from the ground.",
              },
              { point: "How: Approach the ball while it's on the ground." },
              {
                point:
                  "Use a strong hit from your car to pinch the ball against the ground or another object for high velocity.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default wallCeilingMechData;
