import React from 'react';
import ReactDOM from 'react-dom/client';
import {Experience} from "./Experience.tsx";
import './main.scss';
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
        <Experience />
    </Theme>
  </React.StrictMode>,
)
