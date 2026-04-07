import { ShieldIcon, TruckIcon, StarIcon } from './Icons';

const features = [
  {
    icon: ShieldIcon,
    title: 'תשלום מאובטח',
    desc: 'רכישה בטוחה ומוגנת',
  },
  {
    icon: StarIcon,
    title: 'איכות מקצועית',
    desc: 'ייצור ברמה הגבוהה ביותר',
  },
  {
    icon: TruckIcon,
    title: 'משלוח עד הבית',
    desc: 'עד 7 ימי עסקים',
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <f.icon className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-base font-bold text-black mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Policy banner */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
          <h3 className="text-lg font-bold text-black text-center mb-4">מדיניות רכישה ומשלוח</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 max-w-xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
              <span>משלוח עד הבית בלבד</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
              <span>עלות משלוח: ₪50</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
              <span>המשלוח על חשבון הלקוח</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
              <span>אספקה: עד 7 ימי עסקים</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2 justify-center">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
              <span>אין החלפות על ביגוד מודפס / מותאם אישית</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
