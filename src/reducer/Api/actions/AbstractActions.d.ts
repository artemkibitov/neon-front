export default abstract class AbstractActions {
  protected _defaultKey: string;

  abstract updateState(key: string, state: object, updates: object): object;

  static getInitialState(): object;

  protected _destructFirstValue(object: object): any;
}
