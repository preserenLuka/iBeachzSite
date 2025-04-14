import { MenuItem } from "./types";
// Icons for each element in menu
import { FaShieldAlt } from "react-icons/fa";
import { LuSword } from "react-icons/lu";

// Icons for menu
import { FaLightbulb } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";

import { GiWhistle } from "react-icons/gi";

import { BiNotepad } from "react-icons/bi";

import { FaRegFolderOpen } from "react-icons/fa";

const menuItems: MenuItem[] = [
  {
    title: "Fundamentals",
    key: "fundamentals",
    icon: <FaLightbulb size={30} />,
    items: [
      {
        label: "Defense",
        value: "defenseFundamental",
        color: "red",
        icon: <FaShieldAlt size={20} />,
      },
      {
        label: "Counter Attacking",
        value: "counterAttackFundamental",
        color: "blue",
      },
      {
        label: "Attack",
        value: "attackFundamental",
        color: "yellow",
        icon: <LuSword size={30} />,
      },
      {
        label: "Rotations & Recoveries",
        value: "rotationFundamental",
        color: "green",
      },
      {
        label: "Speed & Decision Making",
        value: "speedFundamental",
        color: "orange",
      },
      {
        label: "Efficient Challenges",
        value: "challengeFundamental",
        color: "purple",
      },
      { label: "Carry in Solo Q", value: "soloQFundamental", color: "pink" },
      { label: "Positive Mental", value: "mentalFundamental", color: "cyan" },
      {
        label: "21 Advanced Tips",
        value: "advancedTipsFundamental",
        color: "teal",
      },
    ],
  },
  {
    title: "Mechanics",
    key: "mechanics",
    icon: <IoGameController size={30} />,
    items: [
      { label: "Shooting", value: "shootingMechanics", color: "red" },

      {
        label: "Cutting & Control",
        value: "cuttingControlMechanics",
        color: "green",
      },
      { label: "Flicks", value: "flickingMechanics", color: "yellow" },
      { label: "Aerial", value: "aerialMechanics", color: "orange" },
      { label: "Resets", value: "resetMechanics", color: "purple" },
      {
        label: "Wall & Ceiling",
        value: "wallCeilingMechanics",
        color: "pink",
      },
      { label: "Recoverys", value: "recoveryMechanics", color: "pink" },
      { label: "Defence", value: "defenseMechanics", color: "pink" },
    ],
  },
  {
    title: "Coaching",
    key: "coaching",
    icon: <GiWhistle size={30} />,
    items: [
      { label: "discord", value: "discord", icon: <FaShieldAlt size={30} /> },
      { label: "reviews", value: "reviews", icon: <LuSword size={30} /> },
    ],
  },
  {
    title: "Notes",
    key: "notes",
    icon: <BiNotepad size={30} />,
    items: [
      { label: "my notes", value: "myNotes", icon: <FaShieldAlt size={30} /> },
      { label: "test", value: "test", icon: <LuSword size={30} /> },
    ],
  },
  {
    title: "File Manager",
    key: "fileManager",
    icon: <FaRegFolderOpen size={30} />,
    items: [
      { label: "test", value: "test", icon: <FaShieldAlt size={30} /> },
      {
        label: "Component Test",
        value: "componentTest",
      },
    ],
  },
];

export default menuItems;
