export default function HeroSection() {
  return (
    <div className="hero-section-wrapper relative">
      <section className="bg-teal-600 text-white text-center py-20 sm:py-24 mt-8 relative">
        {/* Left Image */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
          <img
            src="/hero section imgs/right.png"
            alt="Left Image"
            className="w-64 sm:w-64 ml-20"
          />
        </div>
        {/* Right Image */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
          <img
            src="/hero section imgs/left.png"
            alt="Right Image"
            className="w-64 sm:w-64 mr-20 "
          />
        </div>
        {/* Main Content */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to E-Kart
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Your one-stop shop for everything!
        </p>
        {/* New Line of Content */}
        <p className="text-lg sm:text-2xl mb-6 text-yellow-500">
          Shop the latest products and exclusive offers today!!!
        </p>
      </section>
    </div>
  );
}
