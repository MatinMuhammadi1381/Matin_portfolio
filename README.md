# Matin Portfolio

**English** · [فارسی](#فارسی)

A dark, bilingual (English/Persian) portfolio for Matin Mohammadi, focused on frontend engineering, real applications, and a growing full-stack skill set.

## Features

- English-first language switch with persistent Persian RTL support
- Dark-only responsive design and keyboard-accessible mobile navigation
- Seven verified public projects, with Bus Tracking featured and honest demo/source links
- Local project previews and recognizable technology icons
- Installable offline-capable PWA with app icons and automatic updates
- Experience, technology stack, resume download, and professional contact links
- Accessible contact form that prepares an email draft without storing submissions
- Search/social metadata, robots.txt, and sitemap
- GitHub Pages deployment configuration

### Project previews and technology icons

Project screenshots are retained under `docs/screenshots/` so the featured
projects remain viewable in the deployed site. The SVG technology marks in
`public/tech-icons/` are from [Devicon](https://github.com/devicons/devicon)
and [Simple Icons](https://github.com/simple-icons/simple-icons).

## Tech Stack

- React 19
- Vite
- Custom CSS
- Lucide React
- JavaScript (JSX)

## Getting Started

~~~bash
git clone https://github.com/MatinMuhammadi1381/Matin_portfolio.git
cd Matin_portfolio
npm ci
npm run dev
~~~

Open the local URL shown by Vite, usually http://localhost:5173.
On Windows, `INSTALL-DEPENDENCIES.bat` installs the exact dependencies from the lockfile.
Builds include a web app manifest and service worker for installation and offline access.

## Available Scripts

~~~bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run deploy    # Build and publish to GitHub Pages
~~~

## Live Demo

[Open the portfolio](https://MatinMuhammadi1381.github.io/Matin_portfolio)

## Project Structure

~~~text
src/
├── components/   # Portfolio sections and reusable UI
├── context/      # English/Persian language state
├── data/         # Translations and verified project metadata
├── pages/        # Page-level views
├── App.jsx       # Application shell
└── main.jsx      # Application entry point
~~~

## Notes

Project metadata is maintained in `src/data/portfolio.js`. The linked repository READMEs describe each project's actual scope; projects without a published live demo link to source only. The Bus Tracking screenshot and some other previews contain sample/demo data.

---

## فارسی

یک وب‌سایت واکنش‌گرا برای معرفی مهارت‌ها و پروژه‌های برنامه‌نویسی و طراحی رابط کاربری.

### امکانات

- معرفی دوزبانه با زبان انگلیسی پیش‌فرض و پشتیبانی کامل از چیدمان فارسی RTL
- پوستهٔ تیرهٔ ثابت، پیمایش واکنش‌گرا و منوی مناسب موبایل
- نمایش هفت پروژهٔ عمومی بررسی‌شده همراه تصویر، فناوری‌ها، کد منبع و پیش‌نمایش‌های منتشرشده
- نمایش سوابق، رزومه، فناوری‌ها با آیکون و راه‌های تماس
- فرم تماس که پیش‌نویس ایمیل را آماده می‌کند و پیام‌ها را در سایت ذخیره نمی‌کند

### فناوری‌ها

React 19، Vite، CSS، Lucide React و JavaScript.

### راه‌اندازی

به Node.js نسخهٔ ۲۰ یا بالاتر نیاز است. در ویندوز فایل `INSTALL-DEPENDENCIES.bat` را اجرا کنید؛ یا این فرمان‌ها را اجرا کنید:

~~~bash
npm ci
npm run dev
~~~

نشانی محلی را Vite نمایش می‌دهد (معمولاً `http://localhost:5173`). برای ساخت نسخهٔ نهایی از `npm run build` و برای پیش‌نمایش از `npm run preview` استفاده کنید.

### ساختار پروژه

بخش‌های اصلی در `src/components/`، صفحهٔ اصلی در `src/pages/` و فایل‌های تصویری و رزومه در `public/` قرار دارند.