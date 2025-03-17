# HiliosAI - Enterprise AI Agent Platform

A modern, responsive website for HiliosAI, an enterprise AI agent platform that helps businesses automate operations, enhance customer experiences, and deliver actionable insights.

![HiliosAI Screenshot](public/images/screenshot.png)

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Vite and React
- 📱 Fully responsive design
- 🧩 Component-based architecture
- 🔄 React Router for navigation

## Pages

- **Home**: Landing page showcasing the platform's capabilities
- **Features/Integration**: Details about integration options with CRM, ERP, E-commerce, and Helpdesk systems
- **Pricing**: Pricing plans and enterprise options
- **Team**: Information about the leadership and team members
- **Blog**: Articles about AI trends, case studies, and tutorials
- **Contact**: Contact form and office locations
- **Legal**: Privacy Policy and Terms of Use

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hilios-clone.git
   cd hilios-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
hilios-clone/
├── public/              # Static assets
│   └── images/          # Image files
├── src/                 # Source files
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── App.css          # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Content

Update the content in the page components to match your requirements.

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, which can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by [Hilios.ai](https://hilios.ai)
- Icons from [Heroicons](https://heroicons.com/) 