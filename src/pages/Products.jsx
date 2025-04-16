const Products = () => {
  const fetchProducts = async () => {
    // get products api from dummy json
    const res = await fetch("api goes here");
    const data = await res.json();

    return data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div>
      {/* handle loading state */}
      {
        // logic goes here
      }

      {data?.products &&
        data.products.map((recipe) => {
          return <Card img={recipe.image} title={recipe.name} />;
        })}
    </div>
  );
};

export default Products;
