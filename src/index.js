import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./themes/theme";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Profiler id='Navigation'>
            <ThemeProvider theme={theme}>
                <CssBaseline /> {/* apply normalize.css */}
                {/* 
            
                  CSSBaseline does the following:

                  The margin in all browsers is removed
                  The default Material Design background color is applied
                  Font antialiasing is enabled for better display of the font
                  No base font-size is declared on the <html>, but 16px is assumed (browser default)

              */}
              <App />
            </ThemeProvider>
        </Profiler>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
