import AbstractActions from "./AbstractActions";

interface ISizeVariant {
  key: string;
  name: string;
  length: number;
  height: number;
  weight: number;
  cost: number;
}

interface ISizeState {
  variants: { [key: string]: ISizeVariant };
  selected: ISizeVariant;
}

declare class SizeActions extends AbstractActions {
  static structure: any;

  constructor(defaultKey?: string);

  selectSize(state: any, action: { type: string; [key: string]: any }): any;

  static createSizeVariants(): { [key: string]: ISizeVariant };

  static getInitialState(): ISizeState;
}
