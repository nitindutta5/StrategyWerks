# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

### About the app

## Implemented Lazy Loading on Images: 
Images are optimized to load only when they appear in the viewport, reducing initial page load time.
## Filters and Sorting Integrated with Query Parameters: 
Filter and sorting options dynamically update based on query parameters, ensuring seamless user experience and shareable URLs.
## Responsive Design with Tailwind CSS: 
The app's layout is fully responsive, offering an optimal viewing experience across all devices using Tailwind CSS.
## Client-Side Infinite Loading: 
Products are loaded incrementally as users scroll down, improving performance and user engagement. Reason for implementing this was that the fake API dont provide pagination
## Identified Issue Infinite Loading:
If the DOM elements will increase it will be a bottleneck so we can implement React-window or react virtualisation library to render only visible items to the dom.
```
