# website-name

A template for a basic, **frontend-only** website built with:

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) (v4, via the `@tailwindcss/vite` plugin)
- [React Router DOM](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons/)

There is no backend, database, or API layer included. Use it as a starting point for static or client-side sites.

## Setup

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Build for production into `dist` |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## Project structure

```
src/
├── components/   App.tsx (router/routes), main.tsx (entry), Navbar.tsx
├── pages/        Route pages (Home, Page, NotFound)
└── css/          index.css (Tailwind import)
```

To add a page, create a component in `src/pages/` and add a `<Route>` in `src/components/App.tsx`. Add a link to it in `src/components/Navbar.tsx`.

## Renaming `website-name`

Replace `website-name` with your site's name in these places:

1. **Folder name**: rename the project folder.
2. **`package.json`**: change the `"name"` field (lowercase, no spaces, e.g. `my-site`).
3. **`package-lock.json`**: update the `"name"` fields at the top, or delete the file and run `npm install` to regenerate it.
4. **`index.html`**: update the `<title>`.
5. **`src/components/Navbar.tsx`**: change the `website-name` text in the navbar brand.
6. **`src/pages/Home.tsx`**: update the welcome text.
7. **`README.md`**: update the title and description.

Tip: search the project for `website-name` (excluding `node_modules`) to make sure none are left.
