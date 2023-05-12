import { createProxyHandler } from "@/components/Editor/reducer/util";

export default class Model {
  constructor() {
    if (new.target === Model) {
      throw new TypeError('You cannot create an instance of an abstract class');
    }

    return new Proxy(this, createProxyHandler());
  }
}
