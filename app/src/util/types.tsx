import { ReactNode } from "react";
export type keyContentPairs = {
  [key: string]: string;
};

export type SubMenuItem = {
  label: string;
  value: string;
  color?: string;
  icon?: ReactNode;
};

export type MenuItem = {
  title: string;
  key: string;
  items: SubMenuItem[];
  icon?: ReactNode;
};

//types for content data

export type contentObject = {
  title: string;
  key: string;
  componentName: string;
  description?: string;
  topics: SingleTopic | MultiTopic;
};

export type SingleTopic = {
  title: string;
  description?: string;
  videoId?: string[];
  content: (RandomText | List)[];
};

export type MultiTopic = Topics[];

export type Topics = {
  title: string;
  key?: string;
  description?: string;
  videoId?: string[];
  videoTime?: string;
  content: (RandomText | List)[];
};

export type BulletPoints = {
  point: string;
};

export type List = {
  title: string;
  description?: string;
  listOfLists?: List[];
  bulletPoints?: (BulletPoints | BPTitle)[];
  extraText?: string;
};

export type BPTitle = {
  title: string;
};
export type RandomText = {
  text: string;
};

//------------------------
export type TeammateRecord = {
  id: number;
  playerId: number;
  teammateId: number;
  teammateName?: string;
  wins: number;
  losses: number;
};
export type OpponentRecord = {
  id: number;
  playerId: number;
  opponentId: number;
  opponentName?: string;
  wins: number;
  losses: number;
};
export type Player = {
  id: number;
  leaderboardId: number;
  playerName: string;
  goals: number;
  assists: number;
  saves: number;
  points: number;
  shots: number;
  streak: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  teammateRecords: TeammateRecord[];
  opponentRecords: OpponentRecord[];
};
