export default function Hero() {
  const videoId = '1r2sE-i9NvQOVd2hvRVV-B3Hzp_FfXGKe';
  const videoEmbedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={videoEmbedUrl}
          className="w-full h-full object-cover pointer-events-none"
          style={{ border: 'none', transform: 'scale(1.5)', transformOrigin: 'center center' }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title="Hero video"
          loading="lazy"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Fallback gradient if video doesn't load */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Club logo */}
          <div className="mb-8 inline-flex items-center justify-center">
            <img
              src="/logo.svg"
              alt="Switching ON Basketball"
              className="h-24 sm:h-32 lg:h-40 w-auto invert"
            />
          </div>

          {/* Welcome text */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            חנות המועדון
            <span className="block text-brand-red mt-1">הרשמית</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
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
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
