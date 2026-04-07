import { useState } from 'react';
import { getBasePrice } from '../data/products';
import ProductCustomizer from './ProductCustomizer';

export default function ProductCard({ product }) {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id || '');

  const isBundle = product.category === 'bundles';
  const hasDiscount = product.originalPrice && product.originalPrice > getBasePrice(product);
  const basePrice = getBasePrice(product);
  const hasMultipleTiers = product.pricing.length > 1;
  const currentImages = product.images[selectedColor] || product.images[product.colors[0]?.id] || [];
  const mainImage = currentImages[0];

  return (
    <>
      <div className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col ${isBundle ? 'ring-2 ring-brand-red/20' : ''}`}>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {product.badge}
          </div>
        )}

        {/* Image area */}
        <div className={`relative aspect-square flex items-center justify-center overflow-hidden ${isBundle ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gray-50 group-hover:bg-gray-100'} transition-colors`}>
          {mainImage ? (
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className={`text-center p-6 ${isBundle ? 'text-white' : 'text-gray-400'}`}>
              {isBundle ? (
                <div>
                  <img src="/logo.svg" alt="ON" className="w-20 mx-auto mb-4 invert opacity-80" />
                  <p className="text-xs text-gray-400 space-y-0.5">
                    {product.bundleItems?.map((item, i) => (
                      <span key={i} className="block">{item.name}</span>
                    ))}
                  </p>
                </div>
              ) : (
                <div>
                  <svg className="w-16 h-16 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs mt-2 opacity-50">תמונה בקרוב</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="text-base sm:text-lg font-bold text-black mb-1 leading-tight">{product.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.description}</p>

          {/* Color selector */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-gray-400">צבע:</span>
              <div className="flex gap-1.5">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    title={color.name}
                    className={`w-6 h-6 rounded-full transition-all cursor-pointer border-2 ${
                      selectedColor === color.id
                        ? 'border-brand-red scale-110 ring-2 ring-brand-red/30'
                        : color.border ? 'border-gray-300 hover:border-gray-400' : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2 mt-auto">
            <span className="text-xl sm:text-2xl font-black text-black">₪{basePrice}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">₪{product.originalPrice}</span>
            )}
          </div>

          {/* Quantity pricing tiers */}
          {hasMultipleTiers && (
            <div className="mb-3 bg-gray-50 rounded-lg p-2.5">
              <p className="text-xs font-bold text-gray-600 mb-1.5">מחירון כמותי:</p>
              <div className="grid grid-cols-3 gap-1">
                {product.pricing.map((tier, i) => (
                  <div key={i} className="text-center bg-white rounded px-1.5 py-1 border border-gray-100">
                    <span className="block text-[10px] text-gray-400">
                      {tier.min === 1 ? 'יחידה' : `${tier.min}+`}
                    </span>
                    <span className="block text-xs font-bold text-black">₪{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={() => setShowCustomizer(true)}
            className="w-full py-3 bg-brand-red hover:bg-brand-red-hover text-white rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border-none cursor-pointer shadow-sm mt-auto"
          >
            {product.customizable ? 'בחר והתאם אישית' : 'הוסף לעגלה'}
          </button>
        </div>
      </div>

      {/* Customizer modal */}
      {showCustomizer && (
        <ProductCustomizer
          product={product}
          initialColor={selectedColor}
          onClose={() => setShowCustomizer(false)}
        />
      )}
    </>
  );
}
