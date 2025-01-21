# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

## About the app

# Implemented Lazy Loading on Images: 
Images are optimized to load only when they appear in the viewport, reducing initial page load time.
# Filters and Sorting Integrated with Query Parameters: 
Filter and sorting options dynamically update based on query parameters, ensuring seamless user experience and shareable URLs.
# Responsive Design with Tailwind CSS: 
The app's layout is fully responsive, offering an optimal viewing experience across all devices using Tailwind CSS.
# Client-Side Infinite Loading: 
Products are loaded incrementally as users scroll down, improving performance and user engagement. Reason for implementing this was that the fake API dont provide pagination
# Identified Issue with Client Side Infinite Loading:
While implementing client-side infinite loading, it was noted that if the dataset is exceptionally large, it can lead to performance bottlenecks. This can cause excessive memory usage, increased API calls, or a laggy scrolling experience, particularly on devices with limited resources. Optimizations to mitigate this issue are currently being explored.
```
