const Snakes = () => (
    <section className="p-8">
      <h2 className="text-4xl font-bold mb-4">Snakes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/images/Zoocategory/snakes/${i}.jpg`}
            alt={`Snake ${i}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
          {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/images/Zoocategory/snakes/${i}.jpg`}
            alt={`Snake ${i}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
  export default Snakes
  