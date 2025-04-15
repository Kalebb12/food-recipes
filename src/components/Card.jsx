const Card = ({title ,img}) => {
  return (
    <div className="bg-[#F5F2F2] rounded-3xl overflow-hidden">
      <img src={img} className="w-full h-53 object-cover" alt={title} />

      <div className="p-4">
        <h3 className="font-bold text-2xl mb-4">{title}</h3>
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
