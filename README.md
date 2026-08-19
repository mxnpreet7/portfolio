# Manpreet Singh - Personal Developer Portfolio

A modern, responsive, high-performance personal developer portfolio website built with **React.js**, **Tailwind CSS**, and **Lucide React** icons.

---

## 🚀 Live Info & Features

- **Developer**: Manpreet Singh
- **Role**: Student Developer
- **College**: Swami Vivekanand Institute of Engineering and Technology (SVIET)
- **Location**: Chandigarh, India
- **Email**: [iammanpreet640@gmail.com](mailto:iammanpreet640@gmail.com)
- **GitHub**: [github.com/mxnpreet7](https://github.com/mxnpreet7)
- **LinkedIn**: [linkedin.com/in/manpreet-singh-7063703b2/](https://www.linkedin.com/in/manpreet-singh-7063703b2/)

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: Static / Frontend-only (GitHub Pages, Vercel, Netlify ready)

---

## 📂 Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive navigation with mobile menu & dark/light theme switch
│   │   ├── Hero.jsx         # Intro, status badges, social links, resume download
│   │   ├── About.jsx        # Bio, technical focus, engineering values
│   │   ├── Skills.jsx       # Categorized skills (Languages, Frontend, Tools)
│   │   ├── Projects.jsx     # Project cards with tech tags & live demo/github links
│   │   ├── Education.jsx    # SVIET academic timeline & coursework
│   │   ├── Contact.jsx      # Client-side contact hub & copy-to-clipboard email
│   │   └── Footer.jsx       # Footer with quick links & back-to-top button
│   ├── data/
│   │   └── portfolio.js     # Single source of truth for all content
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React entry point
│   └── index.css            # Custom utility classes & Tailwind directives
├── index.html               # SEO metadata & fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ Customizing Your Content

All data is centralized in [`src/data/portfolio.js`](./src/data/portfolio.js). You can edit:
- `personalInfo`: Social links, bio, resume link, contact details.
- `skillsData`: Add/edit programming languages, frontend tools, and utilities.
- `projectsData`: Add your own project titles, descriptions, live demo links, and GitHub repositories.
- `educationData`: Academic coursework and highlights.
