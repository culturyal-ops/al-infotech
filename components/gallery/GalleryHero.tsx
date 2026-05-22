export default function GalleryHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-green via-green-dark to-green overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-surface rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom text-center relative">
        <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-3">Our Journey</p>
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-surface mb-4 leading-tight">
          Experience Through Our Lens
        </h1>
        <p className="text-base md:text-lg text-surface/80 max-w-xl mx-auto font-light">
          Sacred moments in Makkah, comfort in our accommodations—see the care we bring to every journey.
        </p>
      </div>
    </section>
  );
}
