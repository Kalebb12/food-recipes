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
        data.products.map((product) => {
          return <Card img={product.image} title={product.name} />;
        })}
    </div>
  );
};

export default Products;
