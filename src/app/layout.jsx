// src/app/layout.js (или layout.jsx)
import './globals.css';

export const metadata = {
  title: 'Моё приложение',
  description: 'Описание',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* CSS Flowbite */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"
          rel="stylesheet"
        />
        {/* Tailwind через CDN с плагинами */}
        <script
          src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
          defer
        ></script>
        {/* Flowbite и Datepicker JS */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"
          defer
        ></script>
        {/* SweetAlert2 */}
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}