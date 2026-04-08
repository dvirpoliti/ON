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
        className="group cursor-pointer"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 z-10 bg-brand-red text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
            {product.badge}
          </div>
        )}

        {/* Image */}
        <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${isBundle ? 'bg-gradient-to-br from-[#111] to-[#222]' : 'bg-[#f5f5f5]'}`}>
          {mainImage ? (
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center p-6 ${isBundle ? 'text-white' : 'text-[#ccc]'}`}>
              {isBundle ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-brand-red rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-brand-red">ON</span>
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

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl" />
        </div>

        {/* Info */}
        <div className="pt-3 pb-2">
          <h3 className="text-sm font-bold text-[#111] group-hover:text-brand-red transition-colors leading-tight">
            {product.name}
          </h3>

          {/* Color dots */}
          {product.colors.length > 1 && (
            <div className="flex gap-1.5 mt-2">
              {product.colors.slice(0, 5).map((color) => (
                <span
                  key={color.id}
                  className={`w-3 h-3 rounded-full ${color.border ? 'border border-[#ddd]' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-[10px] text-[#999] self-center">+{product.colors.length - 5}</span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-base font-black text-[#111]">₪{basePrice}</span>
            {hasDiscount && (
              <span className="text-xs text-[#999] line-through">₪{product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>

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
