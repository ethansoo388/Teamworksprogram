import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { ErrorBoundary } from "@/app/ErrorBoundary";
import "@/styles/index.css";

// Dev-only entry point with react-router-dom BrowserRouter for preview.
// Production uses scripts/export-static.mjs to generate static HTML from /src/site/pages/**

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
