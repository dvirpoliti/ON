export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src="/logo.svg" alt="Switching ON" className="h-16 w-auto invert mb-4" />

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            Switching ON — ציוד ספורט מקצועי ואיכותי לשחקני המועדון.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#bundles" className="text-gray-400 hover:text-white transition no-underline">ערכות</a>
            <a href="#kits" className="text-gray-400 hover:text-white transition no-underline">ביגוד משחק</a>
            <a href="#clothing" className="text-gray-400 hover:text-white transition no-underline">ביגוד נוסף</a>
            <a href="#accessories" className="text-gray-400 hover:text-white transition no-underline">אביזרים</a>
          </div>

          <div className="w-full border-t border-gray-800 pt-6">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Switching ON Basketball. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
