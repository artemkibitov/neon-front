'use strict';
import React from "react";

const Text = ({changeText}) => (
  <textarea
    className="resize-none"
    name="neon-text"
    onChange={changeText}
    id="neon-text-input"
    cols="30"
    rows="10"
  />
);

export default Text;
