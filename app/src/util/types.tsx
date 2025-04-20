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
  bulletPoints?: BulletPoints[];
  extraText?: string;
};

export type RandomText = {
  text: string;
};
