import '../styles/main.css';
import { StrictMode } from "react";

const App = ({ Component, pageProps }) => {

  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  )
}

export default App;

