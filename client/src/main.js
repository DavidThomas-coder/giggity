import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import config from "./config";
import RedBox from "redbox-react";
import { GigProvider } from "./context/gigs.context.jsx";

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app");

  if (reactElement) {
    if (config.nodeEnv === "development") {
      try {
        render(
          <GigProvider>
            <App />
          </GigProvider>,
          reactElement);
      } catch (e) {
        render(
          <GigProvider>
            <RedBox error={e} />
          </GigProvider>, 
          reactElement);
      }
    } else {
      render(
        <GigProvider>
          <App />
        </GigProvider>,
      reactElement);
    }
  }
});

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <GigProvider>
//       <App />
//     </GigProvider>
//   </React.StrictMode>
// )