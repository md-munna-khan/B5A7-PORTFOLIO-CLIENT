# 🟢 My  Portfolio

[![Frontend](https://img.shields.io/badge/Frontend-Next.js-blue?logo=next.js)](https://munna-mia.vercel.app)  
[![Backend](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://munna-portfolio-server.vercel.app/)  


🌐 **Live Frontend:** [https://munna-mia.vercel.app](https://munna-mia.vercel.app)  
🌐 **Live Backend:** [https://munna-portfolio-server.vercel.app/](https://munna-portfolio-server.vercel.app/)

---

## 🚀 Project Overview

This is a **personal portfolio website** built using Next.js (frontend) and Node.js + Express (backend).  
It provides a **private dashboard** for the portfolio owner to manage **blogs**, **projects**, and other content, while offering a **public-facing interface** for visitors.

**Features:**

- Authentication & JWT-based authorization for owner-only dashboard.
- Full **CRUD** functionality for blogs and projects.
- Public **About Me** section with personal info and skills.
- Projects showcase with thumbnails, live links, and repository links.
- Responsive, modern UI with Tailwind CSS.
- Notifications and toast messages with `react-hot-toast`.
- SEO-friendly and fast performance with ISR/SSG.

---

## 💻 Technology Stack

**Frontend:** Next.js, TypeScript, Tailwind CSS, react-hot-toast  
**Backend:** Node.js, Express.js, Prisma with PostgreSQL, JWT, bcrypt  
**Tools & Libraries:** React Hook Form, React Quill (rich text editor), Lucide icons ,magic ui,shadcn ,next js
**Deployment:** Vercel for frontend, Vercel / other server for backend

---

## ⚡ Features Breakdown

### Public Pages
- Blog listing & individual blog pages (ISR)
- About Me section (SSG)
- Project showcase with live preview and repository links

### Private Pages (Owner Only)
- Dashboard to manage blogs & projects
- JWT-based authentication
- Rich text editor for content formatting
- Error handling & user-friendly feedback via toast notifications

---

## 🛠 Setup Instructions

### Frontend

```bash
git clone https://github.com/md-munna-khan/B5A7-PORTFOLIO-CLIENT.git
cd B5A7-PORTFOLIO-CLIENT
npm install
# .env.local
NEXT_PUBLIC_API_URL=https://munna-portfolio-server.vercel.app
npm run dev
```
#### Backend

# Clone repository
git clone https://github.com/md-munna-khan/B5A7-PORTFOLIO-SERVER.git
cd B5A7-PORTFOLIO-SERVER

# Install dependencies
npm install

# Create environment variables (.env)
PORT=5000
DATABASE_URI=<Your DATABASE_URI>
JWT_SECRET=<Your Secret Key>

# Seed admin user (if applicable)
npm run seed

# Run server
npm run dev
