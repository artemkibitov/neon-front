import AbstractActions from "./AbstractActions";

interface ITextState {
  value: string;
  position: string;
}

declare class TextActions extends AbstractActions {
  constructor(defaultKey?: string);

  changeValue(state: object, payload: { type: string; [key: string]: string; }): object;

  changePosition(
    state: object,
    payload: {
      type: string;
      [key: string]: 'left' | 'right' | 'center';
    }
  ): object;

}


export default TextActions;
