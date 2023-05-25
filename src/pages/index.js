import React, { memo, useState } from "react";
import Editor from "@/components/Editor";
import Head from "next/head";
import MyButton from "@/components/MyBtn";

export default function Index() {
  return (
    <>
      <div className={"container mx-auto"}>
        <section className={"mx-auto px-4 text-center tracking-wider"}>
          <h2 className={"text-4xl text-blue-700 f-oswald"}>
            cтвори свій унікальний напис неоном
          </h2>
          <MyButton />
          <p className={"f-roboto text-violet-600 text-lg"}>
            А про те, щоб твій власний стиль світив якісно, подбаємо ми
          </p>
        </section>
        <Editor/>
      </div>
    </>
  );
}
