import React, {memo, useState} from "react";
// import Editor from "@/components/Editor";

export default function Index() {
  const [title, setTitle] = useState('your Text');

  // const MemoEditor = memo(Editor);
  console.dir(useState);
  return (
    <h1>hi</h1>
    // <MemoEditor/>
  )
}
