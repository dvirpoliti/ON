import { CATEGORIES, getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {CATEGORIES.map((category) => {
          const categoryProducts = getProductsByCategory(category.id);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.id} id={category.id} className="mb-16 last:mb-0 scroll-mt-24">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-brand-red rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-black text-black">{category.label}</h2>
              </div>

              {/* Product grid */}
              <div className={`grid gap-4 sm:gap-6 ${
                category.id === 'bundles'
                  ? 'grid-cols-1 sm:grid-cols-1 max-w-md mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
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
