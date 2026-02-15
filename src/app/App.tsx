// Dev-only router — reads from the central route config in src/config/routes.ts.
// Production uses scripts/export-static.mjs to generate static HTML.

import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { routes, lazyComponents, diagnosticRoute } from "@/config/routes";

// Scroll to top on route change (mirrors the old DevRouter behaviour)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => {
          const LazyPage = lazyComponents[route.path];
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LazyPage />}
            />
          );
        })}

        {/* Dev-only diagnostic page */}
        <Route
          path={diagnosticRoute.path}
          element={<diagnosticRoute.component />}
        />

        {/* Fallback — redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
