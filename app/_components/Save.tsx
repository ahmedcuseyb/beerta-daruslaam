const Save = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Image Section */}
        <div className="lg:w-1/2 relative">
          <img
            src="/images/beer1.jpg"
            alt="Adventure Activity"
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0 text-center lg:text-left">
          <p className="text-green-500 uppercase tracking-wider font-semibold text-sm">
            Welcome to Our Centre
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-2">
            Find your next short break
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            If you are looking for a fun, exciting and challenging outdoor adventure
            activity centre, look no further than Beerta Darusalaam! You can experience
            unforgettable outdoor activities, scale heights, paddle the river and
            explore underground.
          </p>
          <div className="flex items-center mt-8 justify-center lg:justify-start">
            <div className="flex items-center text-green-500 font-medium">
              <span className="text-lg">&#x2713;</span>
              <span className="ml-2">
                We have 25 glorious acres of Somerset countryside with over 40 activities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Save;
