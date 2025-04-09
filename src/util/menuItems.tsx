import { ReactNode } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { LuSword } from "react-icons/lu";

type SubMenuItem = {
  label: string;
  value: string;
  color?: string;
  icon?: ReactNode;  // icon is a ReactNode
};

type MenuItem = {
  title: string;
  key: string;
  items: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  {
    title: "Fundamentals",
    key: "fundamentals",
    items: [
      { label: "Defense", value: "defense", color: "red", icon: <FaShieldAlt size={30} /> },
      { label: "Counter Attacking", value: "counterAttack", color: "blue" },
      { label: "Attack", value: "attack", color: "yellow", icon: <LuSword size={30} /> },
      { label: "Rotations & Recoveries", value: "rotations", color: "green" },
      { label: "Speed & Decision Making", value: "speedDecision", color: "orange" },
      { label: "Efficient Challenges", value: "efficientChallenges", color: "purple" },
      { label: "Carry in Solo Q", value: "soloQ", color: "pink" },
      { label: "Positive Mental", value: "mental", color: "cyan" },
      { label: "21 Advanced Tips", value: "advancedTips", color: "teal" },
    ],
  },
  {
    title: "Mechanics",
    key: "mechanics",
    items: [
      { label: "Shooting Mechanics", value: "shooting", color: "red" },
      { label: "Dribbling Mechanics", value: "dribbling", color: "blue" },
      { label: "Flick Mechanics", value: "flicks", color: "yellow" },
      { label: "Cutting & Control Mechanics", value: "cutting", color: "green" },
      { label: "Aerial Mechanics", value: "aerial", color: "orange" },
      { label: "Reset Mechanics", value: "resets", color: "purple" },
      { label: "Wall & Ceiling Mechanics", value: "wall", color: "pink" },
      { label: "Defensive Mechanics", value: "defense", color: "cyan" },
    ],
  },
  {
    title: "Coaching",
    key: "coaching",
    items: [
      { label: "discord", value: "discord", icon: <FaShieldAlt size={30} /> },
      { label: "reviews", value: "reviews", icon: <LuSword size={30} /> },
    ],
  },
  {
    title: "Notes",
    key: "notes",
    items: [
      { label: "my notes", value: "myNotes", icon: <FaShieldAlt size={30} /> },
      { label: "test", value: "test", icon: <LuSword size={30} /> },
    ],
  },
  {
    title: "File Manager",
    key: "fileManager",
    items: [
      { label: "test", value: "test", icon: <FaShieldAlt size={30} /> },
      { label: "test", value: "test", icon: <LuSword size={30} /> },
    ],
  },
];

export default menuItems;
