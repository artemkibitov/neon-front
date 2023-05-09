export default class CharState {
  value = '';
  char = 0;
  spaces = 0;
  lines = 0;
  maxLineLength = 0;

  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;

    return this;
  }

  getValue() {
    return this.value;
  }

  getState(value) {
    if (value) {
      this.count(value);
    }

    return {
      char: this.getChar(),
      spaces: this.getSpaces(),
      lines: this.getLines(),
    }
  }

  getChar() {
    return this.char;
  }

  getSpaces() {
    return this.spaces;
  }

  getLines() {
    return this.lines;
  }

  count(value) {
    this.countChars(value)
      .countSpaces(value)
      .countLines(value);

    return this;
  }

  countMaxLine() {
    this.maxLineLength = this.value.split('\n')
      .reduce((maxLength, line) => Math.max(maxLength, line.length), 0);

    return this;
  }

  countChars(value) {
    value ??= this.value;

    const matches = value.match(/\S/g);

    this.char = matches ? matches.length : 0;

    return this;
  }

  countSpaces(value) {
    const matches = value.match(/ /g);

    this.spaces = matches ? matches.length : 0;

    return this;
  }

  countLines(value) {
    const matches = value.match(/\n/g);

    this.lines = matches ? matches.length : 0;

    return this;
  }
}
