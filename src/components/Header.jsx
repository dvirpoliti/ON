import { useCart } from '../store/cartStore.jsx';
import { CartIcon } from './Icons';

export default function Header() {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xs tracking-tighter">ON</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-black text-black leading-none tracking-tight">SWITCHING ON</span>
              <span className="block text-[10px] text-gray-400 font-medium">Basketball Club</span>
            </div>
          </a>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#bundles" className="text-sm font-medium text-gray-600 hover:text-black transition no-underline">ערכות</a>
            <a href="#kits" className="text-sm font-medium text-gray-600 hover:text-black transition no-underline">ביגוד ספורט</a>
            <a href="#clothing" className="text-sm font-medium text-gray-600 hover:text-black transition no-underline">ביגוד כללי</a>
            <a href="#accessories" className="text-sm font-medium text-gray-600 hover:text-black transition no-underline">אביזרים</a>
          </nav>

          {/* Cart button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-black hover:text-brand-red transition cursor-pointer bg-transparent border-none"
            aria-label="עגלת קניות"
          >
            <CartIcon />
            {itemCount > 0 && (
              <span className="absolute -top-1 -left-1 bg-brand-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
