import { ShieldIcon, TruckIcon, StarIcon } from './Icons';

const features = [
  { icon: ShieldIcon, title: 'תשלום מאובטח', desc: 'רכישה בטוחה ומוגנת' },
  { icon: StarIcon, title: 'איכות מקצועית', desc: 'ייצור ברמה הגבוהה ביותר' },
  { icon: TruckIcon, title: 'משלוח עד הבית', desc: 'עד 7 ימי עסקים' },
];

export default function TrustBar() {
  return (
    <section className="py-16 sm:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Trust features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-16">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <f.icon className="w-7 h-7 text-brand-red" />
              </div>
              <h3 className="text-base font-black text-[#111] mb-1">{f.title}</h3>
              <p className="text-sm text-[#666]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Policy */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto">
          <h3 className="text-lg font-black text-[#111] text-center mb-6">מדיניות רכישה ומשלוח</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#666]">
            {[
              'משלוח עד הבית בלבד',
              'עלות משלוח: ₪50',
              'המשלוח על חשבון הלקוח',
              'אספקה: עד 7 ימי עסקים',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-red rounded-full shrink-0" />
                <span>{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 sm:col-span-2 sm:justify-center">
              <span className="w-2 h-2 bg-brand-red rounded-full shrink-0" />
              <span>אין החלפות על ביגוד מודפס / מותאם אישית</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
