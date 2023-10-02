import React from 'react';
import ReactDOM from 'react-dom/client';
import {Experience} from "./Experience.tsx";
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Experience />
      <div className={"bg-slate-300"}>
          <h1 className={"text-xl text-white"}>Test</h1>
      </div>
  </React.StrictMode>,
)
