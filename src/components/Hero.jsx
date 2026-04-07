export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          {/* Club logo */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <span className="block text-black font-black text-2xl sm:text-3xl tracking-tighter leading-none">ON</span>
                <span className="block text-brand-red text-[8px] sm:text-[10px] font-bold tracking-wider uppercase mt-0.5">BASKETBALL</span>
              </div>
            </div>
          </div>

          {/* Welcome text */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            חנות המועדון
            <span className="block text-brand-red">הרשמית</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            ציוד מקצועי, עיצוב ייחודי ואיכות ללא פשרות.
            <br className="hidden sm:block" />
            הצטיידו לעונה עם הקולקציה החדשה.
          </p>

          {/* CTA */}
          <a
            href="#bundles"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 text-base sm:text-lg font-bold rounded-lg transition-all duration-200 hover:scale-105 no-underline shadow-lg shadow-red-900/30"
          >
            לקולקציה המלאה
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
