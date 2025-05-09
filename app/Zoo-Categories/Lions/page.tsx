
const page = () => {
  return (
    <div>
       <section className="p-8">
      <h2 className="text-4xl font-bold mb-4">Lions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/images/Zoocategory/lions/${i}.jpg`}
            alt={`Lion ${i}`}
            
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          
        ))}
          {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`/images/Zoocategory/lions/${i}.jpg`}
            alt={`Lion ${i}`}
            
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          
        ))}
      </div>
    </section>
    </div>
  )
}

export default page
