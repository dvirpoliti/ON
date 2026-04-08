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
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex flex-col items-center gap-3 p-6 sm:p-8 bg-[#f5f5f5] hover:bg-[#111] rounded-2xl transition-all duration-300 no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-red flex items-center justify-center transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#111] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-bold text-[#111] group-hover:text-white transition-colors">
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
