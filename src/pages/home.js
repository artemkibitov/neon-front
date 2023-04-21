import React, {memo, useState} from "react";
import Editor from "@/components/Editor";

export default function Index() {
  const MemoEditor = memo(Editor);

  return (
    <MemoEditor/>
  )
}
