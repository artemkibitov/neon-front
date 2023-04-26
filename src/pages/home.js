import React, {memo, useState} from "react";
import Editor from "@/components/Editor";

export default function Index() {

  return (
    <div className={"container mx-auto"}>
      <section className={"mx-auto px-4 text-center tracking-wider"}>
        <h2 className={"text-4xl text-indigo-600 f-oswald"}>
          cтвори свій унікальний напис неоном
        </h2>
        <p className={"f-roboto text-pink-400 text-lg"}>
          А про те, щоб твій власний стиль світив якісно, подбаємо ми
        </p>
      </section>
      <Editor />
    </div>
  );
}
