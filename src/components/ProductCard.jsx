import { useState } from 'react';
import { getBasePrice } from '../data/products';
import ProductCustomizer from './ProductCustomizer';

export default function ProductCard({ product }) {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isBundle = product.category === 'bundles';
  const hasDiscount = product.originalPrice && product.originalPrice > getBasePrice(product);
  const basePrice = getBasePrice(product);
  const mainImage = product.images[product.colors[0]?.id]?.[0];

  return (
    <>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowCustomizer(true)}
      >
        {/* Image container */}
        <div className={`relative overflow-hidden rounded-2xl ${isBundle ? 'bg-[#111]' : 'bg-[#f5f5f5]'}`}>
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 z-10 bg-brand-red text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
              {product.badge}
            </div>
          )}

          {/* Aspect ratio container */}
          <div className="aspect-[3/4]">
            {mainImage ? (
              <img
                src={mainImage}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hovered ? 'scale-105' : 'scale-100'}`}
                loading="lazy"
              />
            ) : (
              <div className={`w-full h-full flex flex-col items-center justify-center p-8 ${isBundle ? 'text-white' : 'text-[#bbb]'}`}>
                {isBundle ? (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-5 border-2 border-brand-red rounded-full flex items-center justify-center">
                      <span className="text-2xl font-black text-brand-red">ON</span>
                    </div>
                    <div className="space-y-1.5">
                      {product.bundleItems?.map((item, i) => (
                        <p key={i} className="text-[11px] text-gray-400 font-medium">{typeof item === 'string' ? item : item.name}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <svg className="w-10 h-10 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
            )}
          </div>

          {/* Quick add overlay on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button className="w-full py-3 bg-[#111] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-red transition-colors border-none cursor-pointer">
              לפרטים והזמנה
            </button>
          </div>
        </div>

        {/* Product info — minimal */}
        <div className="pt-4 space-y-1">
          {/* Color dots */}
          {product.colors.length > 1 && (
            <div className="flex gap-1.5 mb-1">
              {product.colors.slice(0, 5).map((color) => (
                <span
                  key={color.id}
                  className={`w-2.5 h-2.5 rounded-full ${color.border ? 'border border-[#ddd]' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-[9px] text-[#999] self-center">+{product.colors.length - 5}</span>
              )}
            </div>
          )}

          <h3 className="text-[13px] sm:text-sm font-bold text-[#111] leading-snug">{product.name}</h3>

          <div className="flex items-baseline gap-2">
            <span className="text-[13px] sm:text-sm font-black text-[#111]">₪{basePrice}</span>
            {hasDiscount && (
              <span className="text-[11px] text-[#999] line-through">₪{product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>

      {showCustomizer && (
        <ProductCustomizer
          product={product}
          initialColor={product.colors[0]?.id || ''}
          onClose={() => setShowCustomizer(false)}
        />
      )}
    </>
  );
}
