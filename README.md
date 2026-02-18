# Little Bloomers Pre-School: The Completist's Documentation

Welcome to the comprehensive documentation for the **Little Bloomers Pre-School** website project. This document serves as the single source of truth for developers, designers, and administrators working with this codebase. It covers every aspect of the project, from high-level architecture to granular component details, deployment strategies, and security protocols.

> **Note**: This documentation is designed to be exhaustive. Whether you are a junior developer setting up the project for the first time or a senior architect looking to optimize the build pipeline, you will find the relevant information here.

---

## 📚 Table of Contents

1.  [Project Overview](#project-overview)
    - [Vision & Mission](#vision--mission)
    - [Target Audience](#target-audience)
    - [Key Performance Indicators (KPIs)](#key-performance-indicators-kpis)
2.  [Feature Specification](#feature-specification)
    - [Core Features](#core-features)
    - [User Experience (UX) Enhancements](#user-experience-ux-enhancements)
    - [Administrative Features](#administrative-features)
3.  [Technology Stack Deep Dive](#technology-stack-deep-dive)
    - [Frontend Framework](#frontend-framework)
    - [Build System](#build-system)
    - [Styling Engine](#styling-engine)
    - [Animation Libraries](#animation-libraries)
    - [State Management](#state-management)
    - [Routing](#routing)
    - [Form Handling](#form-handling)
    - [Utility Libraries](#utility-libraries)
4.  [Installation & Setup Guide](#installation--setup-guide)
    - [Prerequisites](#prerequisites)
    - [Step-by-Step Installation](#step-by-step-installation)
    - [Environment Configuration](#environment-configuration)
    - [IDE Setup](#ide-setup)
5.  [Project Architecture](#project-architecture)
    - [Directory Structure](#directory-structure)
    - [Module Organization](#module-organization)
    - [Component Hierarchy](#component-hierarchy)
    - [Data Flow](#data-flow)
6.  [Component Reference](#component-reference)
    - [Common Components](#common-components)
    - [Layout Components](#layout-components)
    - [Page Components](#page-components)
    - [Form Components](#form-components)
7.  [Configuration Guide](#configuration-guide)
    - [Site Configuration](#site-configuration)
    - [SEO Configuration](#seo-configuration)
    - [Navigation Configuration](#navigation-configuration)
    - [Tailwind Configuration](#tailwind-configuration)
    - [Vite Configuration](#vite-configuration)
8.  [Development Workflow](#development-workflow)
    - [Coding Standards](#coding-standards)
    - [Git Workflow](#git-workflow)
    - [Component Creation Guide](#component-creation-guide)
    - [Debugging](#debugging)
9.  [Performance Optimization](#performance-optimization)
    - [Code Splitting](#code-splitting)
    - [Image Optimization](#image-optimization)
    - [Lazy Loading](#lazy-loading)
    - [Bundle Analysis](#bundle-analysis)
10. [Security Protocols](#security-protocols)
    - [XSS Protection](#xss-protection)
    - [Input Validation](#input-validation)
    - [Dependency Management](#dependency-management)
    - [Environment Security](#environment-security)
11. [Deployment Strategy](#deployment-strategy)
    - [Build Process](#build-process)
    - [Static Hosting](#static-hosting)
    - [CI/CD Pipeline](#cicd-pipeline)
    - [Domain Configuration](#domain-configuration)
12. [Troubleshooting & FAQ](#troubleshooting--faq)
    - [Common Errors](#common-errors)
    - [Known Issues](#known-issues)
    - [Support](#support)
13. [Contributing Guidelines](#contributing-guidelines)
    - [Code of Conduct](#code-of-conduct)
    - [Pull Request Process](#pull-request-process)
    - [Issue Reporting](#issue-reporting)
14. [License & Credits](#license--credits)

---

## 1. Project Overview <a name="project-overview"></a>

### Vision & Mission

The Little Bloomers Pre-School website is envisioned as a digital extension of the school's physical environment: warm, welcoming, organized, and focused on the holistic development of children.

**Our Mission**: To provide a seamless, informative, and engaging digital experience for parents, enabling them to explore our curriculum, understand our philosophy, and easily navigate the admissions process.

### Target Audience

- **Prospective Parents**: Looking for information about curriculum, facilities, fees, and admission procedures.
- **Current Parents**: Seeking updates, newsletters, event calendars, and policy documents.
- **Educators**: Interested in joining our team or understanding our teaching methodology.
- **School Administrators**: Managing content and inquiries through the platform.

### Key Performance Indicators (KPIs)

- **Page Load Time**: Under 2 seconds on 4G networks.
- **Accessibility**: WCAG 2.1 AA compliance.
- **Responsiveness**: Flawless rendering on devices from 320px to 4k resolutions.
- **Conversion Rate**: Increasing the number of completed "Contact Us" and "Admission Inquiry" forms.
- **SEO Ranking**: Ranking on the first page for local queries like "preschool near me".

---

## 2. Feature Specification <a name="feature-specification"></a>

### Core Features

#### HomePage

The `HomePage` serves as the primary landing area. It features:

- **Hero Section**: A dynamic, full-width introduction with call-to-action (CTA) buttons ("Book a Tour", "Apply Now").
- **Feature Highlights**: Cards displaying key selling points (e.g., "Safe Environment", "Qualified Teachers").
- **Testimonials**: A sliding carousel of parent reviews.
- **Recent News**: A preview of the latest blog posts.

#### About Us

The `AboutPage` details the school's history and philosophy:

- **Mission Statement**: Styled typography emphasizing core values.
- **Staff Profiles**: A grid of teacher profiles with photos and bios.
- **Timeline**: An interactive roadmap of the school's history.

#### Academics / Programs

The `ProgramsPage` outlines the educational offerings:

- **Curriculum Details**: Deep dives into Montessori, Play-way, or other methodologies used.
- **Age Groups**: Clearly defined sections for Toddlers, Nursery, Junior KG, and Senior KG.
- **Daily Schedule**: A visual representation of a typical day at school.

#### Admissions

The `AdmissionsPage` is crucial for conversion:

- **Process Flow**: A step-by-step guide (Inquiry -> Tour -> Application -> Enrollment).
- **Fee Structure**: Clear, tabular data presentation of fees.
- **FAQ Section**: Accordion-style frequently asked questions.
- **Admission Form**: A multi-step, validated form for submitting student details.

#### Contact

The `ContactPage` ensures accessibility:

- **Interactive Map**: Google Maps integration via iframe or API.
- **Contact Form**: Validation-protected inquiry form.
- **Direct Links**: Click-to-call and click-to-email functionality.

#### Blog

The `BlogPage` and `BlogPostPage` handle dynamic content:

- **Article Listing**: Grid layout with pagination or infinite scroll.
- **Categories**: Filter posts by tags (e.g., "Parenting Tips", "School Events").
- **Rich Text Rendering**: Secure rendering of HTML content for articles.

### User Experience (UX) Enhancements

- **Page Transitions**: Smooth entering and exiting animations using `framer-motion`.
- **Micro-interactions**: Hover effects on buttons, cards, and links to provide tactile feedback.
- **Scroll Animations**: Elements fade in or slide up as the user scrolls down (via customization of Intersection Observer).
- **Responsive Navigation**: A collapsible hamburger menu for mobile devices and a mega-menu for desktops.
- **Breadcrumbs**: Clear navigational paths for deep-linked pages.

### Administrative Features

- **SEO Management**: Centralized file (`seoConfig.jsx`) to manage meta titles, descriptions, and Open Graph images for every route.
- **Global Configuration**: A single config file (`siteConfig.js`) to update school name, address, phone numbers, and social links across the entire site instantly.

---

## 3. Technology Stack Deep Dive <a name="technology-stack-deep-dive"></a>

Each technology in our stack was chosen for performance, developer experience, and community support.

### Frontend Framework

**React 19**: We utilize the latest stable version of React to leverage concurrent features and improved rendering performance.

- **Hooks**: Extensive use of `useState`, `useEffect`, and custom hooks.
- **Components**: Functional components exclusively.
- **Context API**: For global theme and state management where Redux would be overkill.

### Build System

**Vite**: Chosen over Create React App (CRA) for its blazing fast hot module replacement (HMR) and optimized build output.

- **Esbuild**: Vite uses esbuild for pre-bundling dependencies, which is 10-100x faster than JavaScript-based bundlers.
- **Rollup**: Used for the production build, allowing for advanced code splitting and tree shaking.
- **Plugins**: Configured with `@vitejs/plugin-react` for Fast Refresh.

### Styling Engine

**Tailwind CSS v4**: A utility-first CSS framework that allows for rapid UI development without leaving your HTML.

- **JIT (Just-In-Time) Engine**: Generates styles on demand, resulting in varied builds.
- **Custom Config**: Extended theme configuration for brand colors, typography, and breakpoints.
- **Typography Plugin**: `@tailwindcss/typography` used for beautiful rendering of blog content (`prose` classes).

### Animation Libraries

- **Framer Motion**: The primary library for complex animations, layout transitions, and gesture handling. Used for:
  - Page transition effects.
  - Modal entry/exit animations.
  - List reordering.
- **GSAP (GreenSock Animation Platform)**: Used for high-performance, timeline-based animations that require precise sequencing.

### State Management

For a project of this scale, we avoid complex global state libraries like Redux. Instead, we use:

- **React Context**: For theming and user session state (if applicable).
- **Local State**: Managed via `useState` and `useReducer` for component-specific logic.
- **URL State**: Using React Router to store state in the URL (e.g., search queries, tabs) ensuring shareability.

### Routing

**React Router v7**: The standard routing library for React.

- **Declarative Routing**: Configuration-based route definition.
- **Nested Routes**: For layouts shared across multiple pages.
- **Dynamic Routes**: For blog posts (`/blog/:slug`).

### Form Handling

**React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.

- **Minimal Re-renders**: Isolates component re-renders for better performance.
- **Integration**: Seamlessly integrates with UI libraries.

**Zod**: TypeScript-first schema declaration and validation library.

- **Schema Definition**: We define shape of secure data in `src/utils/validators.js`.
- **Type Inference**: Automatically infers Types (if we were using TS) and validation logic.

### Utility Libraries

- **Lucide React**: consistent, lightweight icon set.
- **date-fns**: Modern date utility library for formatting and manipulation.
- **clsx / tailwind-merge**: For conditionally joining classNames and resolving Tailwind conflicts.
- **dompurify**: For sanitizing HTML to prevent XSS attacks.

---

## 4. Installation & Setup Guide <a name="installation--setup-guide"></a>

Follow these instructions to set up the development environment.

### Prerequisites

Ensure you have the following installed on your machine:

1.  **Node.js**: Version 18.x or higher (LTS recommended).
    - Verify with `node -v`
2.  **Package Manager**: `npm` (comes with Node.js) or `yarn` / `pnpm`.
    - Verify with `npm -v`
3.  **Git**: For version control.
    - Verify with `git --version`

### Step-by-Step Installation

1.  **Clone the Repository**

    Open your terminal and run:

    ```bash
    git clone https://github.com/your-username/react-preschool.git
    ```

2.  **Navigate to the Project Directory**

    ```bash
    cd react-preschool
    ```

3.  **Install Dependencies**

    This will download all required packages listed in `package.json`.

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Start the Development Server**

    This starts Vite's local development server.

    ```bash
    npm run dev
    ```

    You should see output similar to:

    ```
      VITE v5.x.x  ready in 300 ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
    ```

5.  **Open in Browser**

    Open `http://localhost:5173/` in your preferred web browser.

### Environment Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory if you need to override defaults.

Example `.env`:

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXX-Y
```

> **Note**: Variables must be prefixed with `VITE_` to be exposed to the client-side code.

### IDE Setup

We recommend **Visual Studio Code** (VS Code) with the following extensions:

1.  **ESLint**: Integration with the ESLint linter.
2.  **Prettier**: Code formatter.
3.  **Tailwind CSS IntelliSense**: Autocompletion for Tailwind classes.
4.  **ES7+ React/Redux/React-Native snippets**: Useful shortcuts.

---

## 5. Project Architecture <a name="project-architecture"></a>

The project follows a feature-based and component-centric directory structure, designed for scalability.

### Directory Structure

```
react-preschool/
├── public/                 # Static assets served directly (favicon, robots.txt)
│   ├── images/             # Global images not processed by bundler
│   └── vite.svg            # Default favicon
├── src/                    # Source code
│   ├── assets/             # Imported assets (images, fonts, global styles)
│   ├── components/         # React Components
│   │   ├── about/          # Components specific to About Page
│   │   ├── admissions/     # Components for Admissions (forms, steps)
│   │   ├── animations/     # Reusable animation wrappers
│   │   ├── blog/           # Blog listing and post components
│   │   ├── common/         # Globally reusable UI (Buttons, Inputs, Modals)
│   │   ├── contact/        # Contact forms and maps
│   │   ├── gallery/        # specialized gallery components
│   │   ├── home/           # Home page specific sections (Hero, Features)
│   │   ├── programs/       # Program details components
│   │   └── ui/             # Low-level UI primitives
│   ├── config/             # Configuration files
│   │   ├── navigationConfig.js # Menu interaction logic
│   │   ├── seoConfig.jsx   # SEO meta data definitions
│   │   ├── siteConfig.js   # Global site constants
│   │   └── themes.js       # theming logic
│   ├── data/               # Static JSON/JS data (mock API responses)
│   ├── hooks/              # Custom React Hooks (useForm, useScroll)
│   ├── layouts/            # Layout wrappers
│   │   ├── RootLayout.jsx  # Main layout with Navbar and Footer
│   │   └── ...
│   ├── pages/              # Route components (Page level)
│   │   ├── AboutPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ...
│   ├── utils/              # Helper functions
│   │   ├── helpers.js      # Formatters, calculators
│   │   └── validators.js   # Zod schemas
│   ├── App.jsx             # App root component (Providers, Routes)
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.jsx            # Entry point (DOM rendering)
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML entry point template
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration (if needed)
├── README.md               # Project documentation
└── vite.config.js          # Vite build configuration
```

### Module Organization

We group components by feature (e.g., `components/blog/`) rather than by type (e.g., `components/cards/`). This allows developers to locate all files related to a specific feature in one place ("Colocation").

- **Common Components**: `src/components/common` contains generic UI elements used across multiple features (Button, Badge, Card).
- **Page Components**: `src/pages` contains the top-level components that correspond to routes. These components largely compose other components.

### Component Hierarchy

A typical page hierarchy looks like this:

```
App
 └── RootLayout
      ├── Navbar
      ├── PageTransition
      │    └── HomePage (Route)
      │         ├── Hero
      │         ├── FeaturesGrid
      │         │    └── FeatureCard
      │         └── Testimonials
      └── Footer
```

### Data Flow

Data flows unidirectionally from parent to child via props.

- **Global configuration** is imported directly from `src/config`.
- **Form state** is managed within the form components using `react-hook-form`.

---

## 6. Component Reference <a name="component-reference"></a>

This section documents the key reusable components in the application.

### Common Components

#### `Button.jsx`

A versatile button component supporting multiple variants and sizes.

- **Path**: `src/components/common/Button.jsx`
- **Props**:
  - `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: 'primary')
  - `size`: `'sm' | 'md' | 'lg'` (default: 'md')
  - `isLoading`: `boolean` - Shows a spinner if true.
  - `icon`: `ReactNode` - optional icon to display.
  - `...props`: Standard HTML button attributes.

**Usage:**

```jsx
import Button from '@/components/common/Button';

<Button variant="primary" onClick={handleSubmit}>
  Submit Application
</Button>;
```

#### `Badge.jsx`

Used for status indicators, categories, or tags.

- **Path**: `src/components/common/Badge.jsx`
- **Props**:
  - `variant`: `'success' | 'warning' | 'error' | 'info'`
  - `children`: Label text.

**Usage:**

```jsx
<Badge variant="success">Enrolling Now</Badge>
```

### Layout Components

#### `RootLayout.jsx`

The main wrapper for the application.

- **Path**: `src/layouts/RootLayout.jsx`
- **Role**:
  - Renders the `Navbar` (fixed at top).
  - Renders the `Footer` (at bottom).
  - Contains the `<Outlet />` for React Router content.
  - Manages scroll restoration on route change.

### Page Components

#### `HomePage.jsx`

The landing page. Aggregates multiple sections.

- **Performance**: Uses lazy loaded images for the hero section.
- **SEO**: Defines specific `title` and `meta description`.

#### `BlogPost.jsx` & `BlogPostPage.jsx`

Responsible for displaying article content.

- **Security**: Uses `dompurify` to sanitize HTML content passed to `dangerouslySetInnerHTML`.
- **Styling**: Uses Tailwind Typography plugin (`prose` classes) for nice formatting of HTML content.

### Form Components

#### `AdmissionForm.jsx`

A complex, multi-step wizard form.

- **Steps**:
  1.  Student Info
  2.  Parent Info
  3.  Emergency Contact
  4.  Review & Submit
- **Validation**: Each step is validated against a Zod schema before proceeding.

---

## 7. Configuration Guide <a name="configuration-guide"></a>

The application is designed to be configurable without diving deep into component code.

### Site Configuration (`src/config/siteConfig.js`)

This file exports a centralized object containing site-wide constants.

```javascript
export const siteConfig = {
  name: 'Little Bloomers Pre-School',
  description: 'Nurturing young minds...',
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'info@littlebloomers.com',
    address: '123 Education Lane, Learning City',
  },
  social: {
    facebook: '...',
    instagram: '...',
  },
};
```

**Changing the phone number here updates it in the Header, Footer, and Contact Page automatically.**

### SEO Configuration (`src/config/seoConfig.jsx`)

Defines the default SEO metadata and route-specific overrides.

```javascript
export const SEO = {
  default: {
    title: 'Little Bloomers',
    description: 'Best preschool in town',
    // ...
  },
  routes: {
    '/about': {
      title: 'About Us | Little Bloomers',
    },
    // ...
  },
};
```

### Navigation Configuration (`src/config/navigationConfig.js`)

Defines the links shown in the Navbar and Footer.

```javascript
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  // ...
];
```

### Vite Configuration (`vite.config.js`)

We use a custom configuration to optimize builds.

- **Aliases**: `@` maps to `./src` for cleaner imports.
- **Plugins**: `react()` plugin enabled.
- **Build Options**:
  - `manualChunks`: Explicitly configured to split vendor code (React, Framer Motion) into separate chunks to prevent monolithic JS files.

---

## 8. Development Workflow <a name="development-workflow"></a>

### Coding Standards

1.  **Naming Conventions**:
    - Components: `PascalCase` (e.g., `featureCard.jsx` -> `FeatureCard.jsx`).
    - Functions/Variables: `camelCase` (e.g., `handleSubmit`).
    - Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRIES`).
2.  **File Structure**:
    - Component file name matches the component name.
    - One component per file (mostly).
3.  **Imports**:
    - Group imports: External (React, libs) -> Internal (Config, Utils) -> Components -> Styles.
    - Use absolute imports (`@/components/...`) over relative (`../../components/...`).

### Git Workflow

1.  **Branching**:
    - `main`: Production-ready code.
    - `develop`: Integration branch for new features.
    - `feature/feature-name`: Individual feature branches.
2.  **Commits**:
    - Use imperative mood: "Add contact form" not "Added contact form".
    - Reference issue numbers if applicable.

### Component Creation Guide

When creating a new component:

1.  Determine if it's **Common** (reusable) or **Feature-specific**.
2.  Create the file in the appropriate directory.
3.  Define the component using `const ComponentName = (props) => { ... }`.
4.  Add Prop Types (optional but recommended) or JSDoc comments.
5.  Export as `default`.

### Debugging

- **React Developer Tools**: Essential for inspecting component hierarchy and props.
- **Console**: We aim for a "Clean Console" policy. No warnings or errors should be visible in the console during normal operation.
- **Network Tab**: Use to debug API calls (if backend integration exists) or asset loading issues.

---

## 9. Performance Optimization <a name="performance-optimization"></a>

We treat performance as a feature.

### Code Splitting

We utilize Vite's internal Rollup configuration to split code.

- **Dynamic Imports**: Route-based code splitting is automatic with React Router `lazy` loading (if implemented).
- **Manual Chunks**: In `vite.config.js`, we define specific chunks for large libraries like `react-player` and `framer-motion`. This ensures that a user visiting the Home Page downloads the animation library, but might not need the heavy video player until they visit a page with a video.

### Image Optimization

- **Formats**: We prefer WebP or SVG format where possible.
- **Lazy Loading**: Images below the fold should have `loading="lazy"`.
- **Dimensions**: Always specify `width` and `height` to prevent Cumulative Layout Shift (CLS).

### Bundle Analysis

Run `npx vite-bundle-visualizer` (if installed) to see a visual treemap of the bundle size. helps identify large dependencies that can be pruned or optimized.

---

## 10. Security Protocols <a name="security-protocols"></a>

### XSS Protection

Cross-Site Scripting (XSS) is a major vulnerability in web apps.

- **React's Default**: React escapes variables in JSX by default.
- **Dangerous HTML**: When we must render raw HTML (e.g., blog posts), we use `dangerouslySetInnerHTML`.
- **Sanitization**: We **MUST** sanitize this content using `dompurify` before rendering to strip out malicious scripts.

### Input Validation

We do not trust user input.

- **Client-Side**: `zod` schemas ensure that data matches expected formats (email is an email, phone is a phone number) before submission.
- **Escaping**: Inputs are properly handled by React Hook Form.

### Dependency Management

- **Audit**: Regularly run `npm audit` to check for known vulnerabilities in dependencies.
- **Updates**: Keep packages updated to their latest stable versions.

---

## 11. Deployment Strategy <a name="deployment-strategy"></a>

The project is a Static Single Page Application (SPA). It can be deployed to any static host.

### Build Process

1.  Run `npm run build`.
2.  Vite compiles the code into the `dist/` directory.
3.  The `dist/` folder contains the optimized `index.html`, CSS, and JS chunks.

### Static Hosting

#### Vercel (Recommended)

1.  Connect GitHub repository.
2.  Vercel detects Vite.
3.  Build Command: `npm run build`.
4.  Output Directory: `dist`.
5.  **Important**: Configure "Redirects/Rewrites" for SPA. Vercel usually handles this automatically, verifying that all routes rewrite to `index.html`.

#### Netlify

1.  New Site from Git.
2.  Build Command: `npm run build`.
3.  Publish Directory: `dist`.
4.  Create a `_redirects` file in `public/` containing: `/* /index.html 200` to handle client-side routing.

#### Apache / Nginx

If hosting on a traditional server, configure the web server to serve `index.html` for all unknown routes (SPA fallback).

### CI/CD Pipeline

A typical GitHub Action workflow for testing and checking build:

```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run build
```

---

## 12. Troubleshooting & FAQ <a name="troubleshooting--faq"></a>

### Common Errors

**Q: "Vite is not defined"**
_A: Ensure you have run `npm install`._

**Q: Styles are not applying.**
_A: Check if the dev server is running. Tailwind v4 generates styles on the fly._

**Q: "Module not found: Can't resolve..."**
_A: Check your import paths. Remember we use `@` alias for `src`._

**Q: Large chunks warning during build.**
_A: This is normal for heavy applications. We have configured manual chunks to mitigate this. Check `vite.config.js`._

### Known Issues

- Video player controls may vary slightly across browsers.
- Very old browsers (IE11) are not supported.

### Support

For technical support, please open an Issue in the GitHub repository or contact the lead developer.

---

## 13. Contributing Guidelines <a name="contributing-guidelines"></a>

We welcome contributions!

### Code of Conduct

Please be respectful along all interactions. Harassment of any kind is not tolerated.

### Pull Request Process

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

### Issue Reporting

- Use the "Bug Report" template.
- Provide reproduction steps.
- Include screenshots if UI related.

---
