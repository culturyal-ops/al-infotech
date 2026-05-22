export default function GalleryHero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-green via-green-dark to-green overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom text-center relative z-10">
        <p className="eyebrow mb-4 text-gold">Our Journey</p>
        <h1 className="heading-display mb-6 text-surface">
          Experience Through<br />Our Lens
        </h1>
        <p className="body-lg text-surface/90 max-w-2xl mx-auto">
          From sacred moments in Makkah to the comfort of our accommodations,
          see the care and quality we bring to every journey.
        </p>
      </div>
    </section>
  );
}
