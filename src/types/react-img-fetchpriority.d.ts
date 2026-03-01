/**
 * React 18.3.x SSR workaround for fetchpriority.
 *
 * React's renderToStaticMarkup does not recognise the camelCase `fetchPriority`
 * prop in React 18.x and drops it from the HTML output. Using the all-lowercase
 * `fetchpriority` causes React to pass it through as a raw HTML attribute, which
 * is exactly what browsers need for LCP optimisation.
 *
 * This declaration merges `fetchpriority` into React.ImgHTMLAttributes so that
 * TypeScript accepts it alongside the existing camelCase `fetchPriority`.
 *
 * Remove this file once the project upgrades to React 19 (where SSR correctly
 * handles both `fetchPriority` and `fetchpriority`).
 */
import 'react';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
