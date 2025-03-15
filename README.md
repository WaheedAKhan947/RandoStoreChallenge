# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## CORS Issue
1) npm i cors

2) var cors = require("cors");

3) in index.js 
app.use(
  cors({
    origin: [
      "http://localhost:5173" // your local server,
      "https://rando-store-challenge.vercel.app",
    ],
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);

![4e377ba779514bfbb7c1ff19a995e7e2](https://github.com/user-attachments/assets/4725a457-c83c-4831-91ee-14e1b4fde400)
![4adb0d338b5144248713ad8f1286df93](https://github.com/user-attachments/assets/c41eee9d-50b7-4f02-b71c-78044bd2b0c8)
![02d35a3700b3420e98ea8fad8a4e7b7c](https://github.com/user-attachments/assets/8f87542d-4840-4b5f-89f2-d33178a53f75)
![1dddecc19c2a4cfe9e573855e0a22352](https://github.com/user-attachments/assets/bba5f6fc-0276-4f79-8052-140e8a725a1d)
