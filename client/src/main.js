import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import config from "./config";
import RedBox from "redbox-react";
import { GigProvider } from "./context/gigs.context";

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app");

  if (reactElement) {
    if (config.nodeEnv === "development") {
      try {
        <GigProvider>
          render(<App />, reactElement);
        </GigProvider>
      } catch (e) {
        <GigProvider>
          render(<RedBox error={e} />, reactElement);
        </GigProvider>
      }
    } else {
      render(<App />, reactElement);
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