import { ReactNode } from "react";
export type keyContentPairs = {
  [key: string]: string;
};

export type BulletPoints = {
  point: string;
};
export type Ids = {
  id: string;
};

export type List = {
  title: string;
  description?: string;
  listOfLists?: List[];
  bulletPoints?: BulletPoints[];
  extraText?: string;
};

export type Topics = {
  label: string;
  value: string;
  videoTime?: string;
  description?: string;
  listOfLists: List[];
};

export type contentObject = {
  title: string;
  key: string;
  componentName: string;
  description: string;
  topics: Topics[];
  videoIds?: Ids[];
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
