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
        value: "defenseFund",
        color: "red",
        icon: <FaShieldAlt size={20} />,
      },
      { label: "Counter Attacking", value: "counterAttackFund", color: "blue" },
      {
        label: "Attack",
        value: "attackFundData",
        color: "yellow",
        icon: <LuSword size={30} />,
      },
      {
        label: "Rotations & Recoveries",
        value: "rotationFund",
        color: "green",
      },
      {
        label: "Speed & Decision Making",
        value: "speedFund",
        color: "orange",
      },
      {
        label: "Efficient Challenges",
        value: "challengeFund",
        color: "purple",
      },
      { label: "Carry in Solo Q", value: "soloQFund", color: "pink" },
      { label: "Positive Mental", value: "mentalFund", color: "cyan" },
      { label: "21 Advanced Tips", value: "advancedFund", color: "teal" },
    ],
  },
  {
    title: "Mechanics",
    key: "mechanics",
    icon: <IoGameController size={30} />,
    items: [
      { label: "Shooting", value: "shooting", color: "red" },

      {
        label: "Cutting & Control",
        value: "cuttingControl",
        color: "green",
      },
      { label: "Flicks", value: "flicks", color: "yellow" },
      { label: "Aerial", value: "aerial", color: "orange" },
      { label: "Resets", value: "reset", color: "purple" },
      { label: "Wall & Ceiling", value: "wallCeiling", color: "pink" },
      { label: "Recoverys", value: "recoverys", color: "pink" },
      { label: "Defence", value: "defenseMech", color: "pink" },
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
