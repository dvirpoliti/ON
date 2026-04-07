import { useState } from 'react';
import { useCart } from '../store/cartStore.jsx';
import ProductCustomizer from './ProductCustomizer';

export default function ProductCard({ product }) {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const { addItem } = useCart();

  const isBundle = product.category === 'bundles';
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  function handleQuickAdd() {
    if (product.customizable) {
      setShowCustomizer(true);
    } else {
      // For non-customizable products with one size, add directly
      if (product.sizes.length === 1) {
        addItem(product, {
          size: product.sizes[0],
          print: 'none',
          emblem: 'none',
          playerName: '',
          playerNumber: '',
          printCost: 0,
        });
      } else {
        setShowCustomizer(true);
      }
    }
  }

  return (
    <>
      <div className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl overflow-hidden ${isBundle ? 'ring-2 ring-brand-red/20' : ''}`}>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {product.badge}
          </div>
        )}

        {/* Image area */}
        <div className={`relative aspect-square flex items-center justify-center ${isBundle ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gray-50 group-hover:bg-gray-100'} transition-colors`}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className={`text-center p-6 ${isBundle ? 'text-white' : 'text-gray-400'}`}>
              {isBundle ? (
                <div>
                  <div className="w-16 h-16 mx-auto mb-3 border-2 border-brand-red rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-brand-red">ON</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {product.bundleItems?.map((item, i) => (
                      <span key={i} className="block">{item}</span>
                    ))}
                  </p>
                </div>
              ) : (
                <div>
                  <svg className="w-16 h-16 mx-auto opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs mt-2">תמונה בקרוב</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-black mb-1 leading-tight">{product.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.description}</p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl sm:text-2xl font-black text-black">₪{product.price}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">₪{product.originalPrice}</span>
            )}
            {product.customizable && (
              <span className="text-xs text-gray-400 mr-auto">+ הדפסה מ-₪10</span>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-brand-red hover:bg-brand-red-hover text-white rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border-none cursor-pointer shadow-sm"
            >
              {product.customizable ? 'בחר והתאם אישית' : 'הוסף לעגלה'}
            </button>
          </div>
        </div>
      </div>

      {/* Customizer modal */}
      {showCustomizer && (
        <ProductCustomizer
          product={product}
          onClose={() => setShowCustomizer(false)}
        />
      )}
    </>
  );
}
