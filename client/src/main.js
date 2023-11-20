import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import config from "./config";
import RedBox from "redbox-react";
import { GigProvider } from "./context/gigs.context.js";

// document.addEventListener("DOMContentLoaded", () => {
//   let reactElement = document.getElementById("app");

//   if (reactElement) {
//     if (config.nodeEnv === "development") {
//       try {
//         render(<App />, reactElement);
//       } catch (e) {
//         render(<RedBox error={e} />, reactElement);
//       }
//     } else {
//       render(<App />, reactElement);
//     }
//   }
//});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GigProvider>
      <App />
    </GigProvider>
  </React.StrictMode>
)