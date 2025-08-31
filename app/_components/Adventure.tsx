// components/AdventureGrid.js
const Adventure = () => {
    const adventures = [
        // {
        //   image: "/images/individual.jpg", // Replace with your image path
        //   title: "Individuals",
        //   points: ["Adventure days", "Holidays", "Celebrations"],
        //   link: "#",
        // },
        // {
        //   image: "/images/family.jpg", // Replace with your image path
        //   title: "Families",
        //   points: ["Holidays", "Celebrations", "Parties"],
        //   link: "#",
        // },
        // {
        //   image: "/images/hamza.jpg", // Replace with your image path
        //   title: "Corporate",
        //   points: ["Team Building", "Management Training", "Fun Days"],
        //   link: "#",
        // },
         {
          image: "/images/adventure/individual.png", 
          title: "Individuals",
          points: ["Adventure days", "Holidays", "Celebrations"],
          link: "#",
        },
        {
          image: "/images/adventure/family.png", 
          title: "Families",
          points: ["Holidays", "Celebrations", "Parties"],
          link: "#",
        },
        {
          image: "/images/adventure/kali.png", 
          title: "Corporate",
          points: ["Team Building", "Management Training", "Fun Days"],
          link: "#",
        },
      ];
  
    return (
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
    
          <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-center text-white text-3xl lg:text-4xl font-bold mb-12">
          Choose your adventure
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{adventure.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {adventure.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">&#x2713;</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={adventure.link}
                  className="inline-block mt-6 text-green-500 font-semibold flex items-center"
                >
                  <span className="mr-2">&#x27A4;</span> Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
      </section>
    );
  };
  
  export default Adventure;
  