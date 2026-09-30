# Devfolio

A personal frontend developer portfolio built with React, Vite, Tailwind CSS, and React Router.

## Features

- React + Vite with JavaScript
- Tailwind CSS v4 integration and responsive custom styling
- Eight routes: six portfolio pages, Privacy, and Terms
- Dark mode by default, with a persistent light theme option
- Reusable navigation, footer, buttons, project cards, skill groups, service cards, and timeline items
- Four CSS-built project previews and a custom CSS workspace illustration
- Skills grouped by frameworks, languages, and web fundamentals
- Contact form collects project type and framework preference, then prepares a WhatsApp message
- Mobile navigation, reduced-motion support, and accessible form controls
- Custom favicon and 404 page

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Create an optimized production build with `npm run build`, then preview it with `npm run preview`.

## Customize the content

- Update the identity, email, phone, WhatsApp number, and availability in `src/config/site.js`.
- Edit the four project records and their live/source URLs in `src/data/projects.js`.
- Update skill groups in `src/data/skills.js`.
- Update roles and descriptions in `src/data/experience.js`.
- Edit service descriptions in `src/data/services.js`.
- Replace the browser favicon in `public/fav.png`.
- Review the Privacy and Terms pages for accuracy and applicability.

The project cards do not show demo or source links until URLs are added to the project data. The WhatsApp number is configured in `src/config/site.js` with the country code and digits only.

## WhatsApp contact

The contact form creates a `wa.me` link using `whatsappNumber` in `src/config/site.js`. It includes the country code and digits only. Submitting prepares a link with the visitor's name, email, project type, preferred framework, subject, and message prefilled; the visitor opens it, reviews the text, and sends it from WhatsApp.

## Deployment

Run `npm run build` and deploy the generated `dist` directory to any static host that supports SPA fallback routing. Configure the host to serve `index.html` for unknown paths so React Router can render each page directly. Set the production domain and metadata in `index.html` as needed.

## Routes

- `/` - Home
- `/about` - About
- `/projects` - Projects
- `/experience` - Experience
- `/services` - Services
- `/contact` - Contact
- `/privacy` - Privacy
- `/terms` - Terms
