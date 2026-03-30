## Riddhima Paresh Urankar — Personal Portfolio

Tech stack: Next.js + Tailwind CSS + next-themes + AOS + Typed.js

### Requirements implemented
- Dark, modern design (#0f172a background, #38bdf8 accents, white text)
- Sections: Home, About, Skills, Projects, Experience, Contact
- Floating navbar with active section highlighting
- Smooth scrolling, hover effects, AOS fade-in animations
- Typing text effect in hero
- Dark Mode toggle (top-right)
- Responsive across desktop/tablet/mobile

### Getting started
1. Install Node.js LTS (>=18).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

### Customization
- Replace resume: put your PDF at `public/assets/resume/riddhima-resume.pdf`.
- Replace project images: add JPG/PNG under `public/assets/projects/` and update paths in `pages/index.js`.
- Update content: edit `pages/index.js` and components under `components/`.

### Build
```bash
npm run build
npm start
```

### Deploy (free)
- Vercel (recommended):
  - Push to GitHub → Import in Vercel → Framework: Next.js → Deploy.
- Netlify:
  - New site from Git → Build command: `npm run build` → Publish directory: `.next` → Enable Next.js.
- GitHub Pages (static export not enabled by default). Prefer Vercel for SSR/Next features.

### Notes
- Contact form uses a placeholder Formspree endpoint. Create your own at formspree.io and replace it in `components/ContactForm.jsx`.
- Images use `unoptimized: true` for easy static hosting; switch to Next Image Optimization as needed.


