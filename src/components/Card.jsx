const Card = () => {
  return (
    <div className="w-90 bg-[#F5F2F2] rounded-3xl overflow-hidden">
      <img src="/waffles.png" className="w-full h-53 object-cover" alt="Waffles" />

      <div className="p-4">
        <h3 className="font-bold text-2xl mb-4">Waffles</h3>
        <p className="text-xl mb-5">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
          lectus, sit amet ipsum faucibus
        </p>

        <button className="bg-[#FFDB63] px-6 py-2 rounded-3xl">View Recipes</button>
      </div>
    </div>
  );
};

export default Card;
