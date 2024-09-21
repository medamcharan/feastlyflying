FeastlyFlying is a delivery website designed to streamline food ordering and delivery services. The **Admin Dashboard** for FeastlyFlying allows the website administrators to manage and monitor key aspects of the platform efficiently.

### Key Features of the Admin Dashboard:

1. **Order Management:** Admins can view, track, and update the status of customer orders in real time. This feature ensures that deliveries are timely and accurate.
  
2. **User Management:** The dashboard provides control over user accounts, allowing admins to add, remove, or update user information and manage permissions for delivery personnel and customers.

3. **Product Management:** Admins can easily add, edit, or remove menu items, update prices, manage inventory, and ensure that the food offerings are up to date.

4. **Analytics and Reports:** The dashboard includes detailed analytics on order trends, user activity, and sales performance. It helps admins make data-driven decisions for improving operations.

5. **Real-time Notifications:** Alerts and updates are provided in real-time to keep the admin informed of new orders, delivery issues, or user queries.

6. **User Interface:** The dashboard is designed with a user-friendly interface, providing easy access to all necessary tools and ensuring smooth navigation for administrators.

This dashboard plays a critical role in maintaining seamless operations for the FeastlyFlying platform, enabling efficient food delivery and enhancing the overall customer experience.

**Here is the link to the admin dashboard: [FeastlyFlying Admin Dashboard] https://66e83942caa3970074b62c5b--spiffy-travesseiro-83b201.netlify.app
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
