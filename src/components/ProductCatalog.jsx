import { CATEGORIES, getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {CATEGORIES.map((category) => {
          const categoryProducts = getProductsByCategory(category.id);
          if (categoryProducts.length === 0) return null;

          const isBundle = category.id === 'bundles';

          return (
            <div key={category.id} id={category.id} className="mb-20 last:mb-0 scroll-mt-24">
              {/* Section header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-8 bg-brand-red rounded-full" />
                  <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">{category.label}</h2>
                </div>
              </div>

              {/* Product grid */}
              <div className={`grid gap-5 sm:gap-8 ${
                isBundle
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}>
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
