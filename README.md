# Come API

**Come API** is a modern, high-performance web application built using **Next.js, TypeScript, and Tailwind CSS**. This project follows best practices for scalability, theme support, and enhanced UI/UX.

## 🚀 Features

- **Next.js 13 (App Router)**
- **TypeScript for type safety**
- **Dark Mode & Theming (via `next-themes`)**
- **Custom UI Components**
- **Reusable Layout & Toaster Context**
- **Prettier & ESLint Configured**
- **Responsive Design with Tailwind CSS**
- **Framer Motion for Animations**
- **SEO Optimized Metadata**
- **Scroll to Top Feature**
- **Organized Folder Structure**

## 📦 Tech Stack

| Tech          | Purpose                            |
|--------------|------------------------------------|
| **Next.js**  | React Framework for SSR & SSG     |
| **TypeScript** | Type-safe development           |
| **Tailwind CSS** | Utility-first styling         |
| **Framer Motion** | Smooth animations & transitions |
| **React Icons** | Iconography support           |
| **Next-Themes** | Dark mode & theme management   |
| **React-Hot-Toast** | Toast notifications        |

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/enayetsyl/go-api.git
cd come-api
```

### 2️⃣ Install Dependencies
```sh
npm install
# or
yarn install
```

### 3️⃣ Run Development Server
```sh
npm run dev
# or
yarn dev
```
Now, open **`http://localhost:3000`** in your browser.

---

## 📂 Project Structure

```
📁 come-api
├── 📁 components      # UI Components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Contact.tsx
│   ├── Feature.tsx
│   ├── ...
├── 📁 context         # Toast Context Provider
├── 📁 pages           # Next.js Pages
├── 📁 styles          # Global CSS & Tailwind
├── 📁 public          # Static assets (favicon, images)
├── 📁 utils           # Utility functions
│   ├── cn.ts          # Tailwind ClassName Merge
├── next.config.js     # Next.js Config
├── tailwind.config.js # Tailwind Config
├── tsconfig.json      # TypeScript Config
├── package.json       # Project Dependencies
└── README.md          # Documentation
```

---

## 🎯 How It Works

### ✅ **Main Components**
- **`RootLayout.tsx`** - Provides global context, dark mode support, and layout structure.
- **`Hero.tsx`** - Displays the homepage hero section.
- **`Feature.tsx`** - Highlights core features.
- **`Contact.tsx`** - Contact form integration.
- **`Footer.tsx` & `Header.tsx`** - Navigation and footer components.

### ✅ **Context & State Management**
- `ToastContext.tsx` is used to handle global toast notifications.

### ✅ **Dark Mode**
- Uses `next-themes` to switch between **Light & Dark mode**.

---

## 🔥 Optimizations
- **Prettier & ESLint**: Code formatting and linting.
- **Lazy Loading**: Performance-optimized image & script loading.
- **SEO & Metadata**: Configured in `Head.tsx` & `metadata.ts`.

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

## 🤝 Contributing

1. **Fork** the repository.
2. Create a **new branch** (`feature/your-feature`).
3. **Commit your changes** (`git commit -m 'Add new feature'`).
4. **Push** to your branch (`git push origin feature/your-feature`).
5. Open a **Pull Request**.

---

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)
