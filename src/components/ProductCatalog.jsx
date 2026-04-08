import { CATEGORIES, getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {CATEGORIES.map((category, catIndex) => {
          const categoryProducts = getProductsByCategory(category.id);
          if (categoryProducts.length === 0) return null;

          const isBundle = category.id === 'bundles';

          return (
            <div key={category.id} id={category.id} className={`scroll-mt-20 ${catIndex > 0 ? 'mt-20 sm:mt-28' : ''}`}>
              {/* Section header */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-[#111] tracking-tight">{category.label}</h2>
                <div className="w-10 h-1 bg-brand-red rounded-full mt-3" />
              </div>

              {/* Product grid */}
              <div className={`grid gap-4 sm:gap-6 ${
                isBundle
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                  : 'grid-cols-2 lg:grid-cols-4'
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
