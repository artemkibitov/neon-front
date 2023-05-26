import '../styles/main.css';
import React, { StrictMode, useEffect, useReducer, useState } from "react";
import Editor from "@/components/Editor";
import EditorContext from "@/components/Editor/editorContext";
import editorReducer from "@/reducer";
import initialState from "@/reducer/state";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState, () => initialState);

  return (
    <StrictMode>
      <EditorContext.Provider value={{ state, dispatch }}>
        <Head>
          <title>Кастомний неон твоєї мрії</title>
          <meta name="description" content="Your page's concise summary"/>
        </Head>
        <Component {...pageProps} />
      </EditorContext.Provider>
    </StrictMode>
  )
}

export default App;

