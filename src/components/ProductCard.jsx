import { useState } from 'react';
import { getBasePrice } from '../data/products';
import ProductCustomizer from './ProductCustomizer';

export default function ProductCard({ product }) {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id || '');

  const isBundle = product.category === 'bundles';
  const hasDiscount = product.originalPrice && product.originalPrice > getBasePrice(product);
  const basePrice = getBasePrice(product);
  const currentImages = product.images[selectedColor] || product.images[product.colors[0]?.id] || [];
  const mainImage = currentImages[0];

  return (
    <>
      <div
        onClick={() => setShowCustomizer(true)}
        className={`group relative cursor-pointer overflow-hidden ${isBundle ? '' : ''}`}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 z-10 bg-brand-red text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
            {product.badge}
          </div>
        )}

        {/* Image */}
        <div className={`relative aspect-[4/5] overflow-hidden rounded-xl ${isBundle ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-[#f5f5f5]'}`}>
          {mainImage ? (
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center ${isBundle ? 'text-white' : 'text-gray-300'}`}>
              {isBundle ? (
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-4 border-2 border-brand-red rounded-full flex items-center justify-center">
                    <span className="text-3xl font-black text-brand-red">ON</span>
                  </div>
                  <div className="space-y-1">
                    {product.bundleItems?.map((item, i) => (
                      <p key={i} className="text-xs text-gray-400">{typeof item === 'string' ? item : item.name}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <svg className="w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
          )}
        </div>

        {/* Info — minimal: name + colors + price */}
        <div className="pt-3 pb-1">
          <h3 className="text-sm sm:text-base font-bold text-black leading-tight">{product.name}</h3>

          {/* Color dots */}
          {product.colors.length > 1 && (
            <div className="flex gap-1 mt-2">
              {product.colors.slice(0, 6).map((color) => (
                <span
                  key={color.id}
                  className={`w-3.5 h-3.5 rounded-full ${color.border ? 'border border-gray-300' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {product.colors.length > 6 && (
                <span className="text-[10px] text-gray-400 self-center mr-0.5">+{product.colors.length - 6}</span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-base sm:text-lg font-black text-black">₪{basePrice}</span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">₪{product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>

      {/* Product modal */}
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
