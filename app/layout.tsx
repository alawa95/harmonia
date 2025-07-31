import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
        <header className="border-b p-4 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">🎶 Harmonia</h1>
            <button id="theme-toggle" className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
              🌙 Mode Sombre
            </button>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              <script>
                document.getElementById('theme-toggle').addEventListener('click', () => {
                  document.documentElement.classList.toggle('dark');
                });
              </script>
            `,
          }}
        />
      </body>
    </html>
  );
}