const Banner = () => {
  return (
    <section className="max-w-[1440px] bg-gray-400 h-[362px] mx-auto bg-[url('/banner.jpg')] bg-cover bg-bottom relative">
      <h2 className="font-bold text-shadow-xl lg:text-4xl text-3xl text-nowrap text-center text-white absolute top-1/2 left-1/2 -translate-1/2 z-2">
        Get inspired, cook with passion and enjoy <br /> unforgettable moments
        at the table.
      </h2>
      <div className="absolute inset-0 bg-(--overlay)" />
    </section>
  );
};

export default Banner;
