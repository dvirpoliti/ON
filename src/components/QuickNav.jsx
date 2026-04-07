import { CATEGORIES } from '../data/products';
import { PackageIcon, TrophyIcon, ShirtIcon, StarIcon } from './Icons';

const iconMap = {
  package: PackageIcon,
  trophy: TrophyIcon,
  shirt: ShirtIcon,
  star: StarIcon,
};

export default function QuickNav() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex flex-col items-center gap-3 p-5 sm:p-6 bg-gray-50 hover:bg-black rounded-xl transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-white transition-colors">
                  {cat.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
