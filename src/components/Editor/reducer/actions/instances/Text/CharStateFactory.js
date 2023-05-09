import CharState from "@/components/Editor/reducer/actions/instances/Text/CharState";

export default class CharStateFactory {
  static create(text = '') {
    const charState = new CharState();
    charState.count(text);

    return charState;
  }
}
