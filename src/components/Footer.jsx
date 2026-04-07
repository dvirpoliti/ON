export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
            <span className="text-black font-black text-lg tracking-tighter">ON</span>
          </div>
          <span className="text-xs text-gray-500 font-bold tracking-[0.15em] uppercase mb-4">Switching ON</span>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            Switching ON Basketball — ציוד ספורט מקצועי ואיכותי לשחקני המועדון.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#bundles" className="text-gray-400 hover:text-white transition no-underline">ערכות</a>
            <a href="#kits" className="text-gray-400 hover:text-white transition no-underline">ביגוד ספורט</a>
            <a href="#clothing" className="text-gray-400 hover:text-white transition no-underline">ביגוד כללי</a>
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
